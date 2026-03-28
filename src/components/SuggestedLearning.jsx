import { getLinks } from '../data.js'

export default function SuggestedLearning({ group, offset, onRefresh }) {
  const links = getLinks(group.topic, offset)
  return (
    <div style={{ width: 210, flexShrink: 0, background: '#f8f9fb', borderRadius: 8, border: '1px solid #e5e7eb', padding: '14px 16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: 0.8 }}>Suggested Learning</span>
        <button
          onClick={onRefresh}
          title="Refresh links"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', fontSize: 15, lineHeight: 1, padding: 0 }}
        >↻</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 13, color: '#2563eb', textDecoration: 'none', display: 'flex', alignItems: 'flex-start', gap: 6, lineHeight: 1.4 }}
          >
            <span style={{ marginTop: 2, flexShrink: 0, fontSize: 10 }}>↗</span>
            <span style={{ borderBottom: '1px solid transparent' }}
              onMouseEnter={e => e.currentTarget.style.borderBottomColor = '#2563eb'}
              onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}
            >{link.title}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
