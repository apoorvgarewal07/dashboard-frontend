export default function Insights({ insights }) {
  if (!insights || insights.length === 0) return null;
  return (
    <article className="insight-card primary-insight">
      <div className="section-heading">
        <span className="icon-badge" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
        </span>
        <div>
          <p className="eyebrow">Interpretation</p>
          <h2>Insights</h2>
        </div>
      </div>
      <div className="interpretation-text">
        {insights.map((insight, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span>⚠️</span>
            <span>{insight.text}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
