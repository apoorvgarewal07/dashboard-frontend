export default function Suggestions({ suggestions }) {
  if (!suggestions || suggestions.length === 0) return null;
  return (
    <article className="insight-card">
      <div className="section-heading">
        <span className="icon-badge" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
        </span>
        <div>
          <h2>Suggestions</h2>
        </div>
      </div>
      <ol className="next-steps-list">
        {suggestions.map((suggestion, index) => (
          <li key={index}>
            <span>{index + 1}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>✅</span>
              {suggestion.text}
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}
