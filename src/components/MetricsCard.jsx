export default function MetricsCard({ title, value, index }) {
  return (
    <article className="metric-card">
      <div className="metric-topline">
        <span className="metric-rank">0{index + 1}</span>
      </div>
      <h3>{title}</h3>
      <div className="metric-value-row">
        <span className="metric-value">{value}</span>
      </div>
    </article>
  );
}
