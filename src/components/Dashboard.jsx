import { useState, useEffect } from 'react';
import MetricsCard from './MetricsCard';
import Insights from './Insights';
import Suggestions from './Suggestions';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dashboard-backend-0km7.onrender.com/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner" aria-label="Loading"></div>
        <p>Loading developer insights</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <main className="app-container">
        <section className="empty-state">
          <p className="eyebrow">Connection issue</p>
          <h1>Unable to load dashboard data</h1>
          <p>{error}. Please make sure the backend is running on port 5000.</p>
        </section>
      </main>
    );
  }

  const formatMetricName = (key) => {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
  };

  const formatValue = (key, value) => {
    if (key.toLowerCase().includes('time')) return `${value.toFixed(1)} days`;
    if (key.toLowerCase().includes('rate')) return `${(value * 100).toFixed(1)}%`;
    return value;
  };

  const metricsArray = Object.entries(data.metrics);

  return (
    <main className="app-shell">
      <section className="hero-section">
        <div className="hero-copy">
        
          <h1>Developer Performance Insights</h1>
          <p className="hero-text">
            A focused analytics dashboard that turns engineering metrics into clear coaching actions.
          </p>
        </div>

        <div className="profile-panel">
          <div className="avatar" aria-hidden="true">
            D
          </div>
          <div>
            <p className="profile-label">Individual contributor</p>
            <h2>Dev 1</h2>
            <p>Software Engineer</p>
          </div>
        </div>
      </section>

      <section className="metrics-grid" aria-label="Developer metrics">
        {metricsArray.map(([key, value], index) => (
          <MetricsCard 
            key={key}
            title={formatMetricName(key)} 
            value={formatValue(key, value)} 
            index={index} 
          />
        ))}
      </section>

      <section className="insights-section">
        <Insights insights={data.insights} />
        <Suggestions suggestions={data.suggestions} />
      </section>
    </main>
  );
}
