import { LINKS, FALLBACK_LINKS } from '../data.js'

const CLOUD_HIGHLIGHTS = [
  'AWS', 'Azure', 'Kubernetes & Containers', 'Infrastructure as Code',
]
const AI_HIGHLIGHTS = [
  'Large Language Models (LLMs)', 'Prompt Engineering',
  'AI Agents & Automation', 'Generative AI for Business',
]

function LinkItem({ url, title, description }) {
  return (
    <div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: 13, color: '#2563eb', textDecoration: 'none', display: 'flex', alignItems: 'flex-start', gap: 6, lineHeight: 1.4 }}
      >
        <span style={{ flexShrink: 0, fontSize: 10, marginTop: 2 }}>↗</span>
        <span
          onMouseEnter={e => e.currentTarget.style.borderBottomColor = '#2563eb'}
          onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}
          style={{ borderBottom: '1px solid transparent' }}
        >{title}</span>
      </a>
      {description && (
        <p style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.5, margin: '4px 0 0 16px' }}>{description}</p>
      )}
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <div style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 10, marginTop: 4 }}>
      {children}
    </div>
  )
}

export default function LearningPanel({ learningTopic, cloudTopics, aiTopics, onClose, isDrawer }) {
  const outerStyle = isDrawer
    ? { width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }
    : { width: 260, flexShrink: 0, padding: '24px 16px 24px 0', display: 'flex', flexDirection: 'column' }

  const innerStyle = {
    background: '#fff',
    borderRadius: isDrawer ? 0 : 8,
    border: isDrawer ? 'none' : '1px solid #e5e7eb',
    boxShadow: isDrawer ? 'none' : '0 1px 4px rgba(0,0,0,0.06)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    ...(isDrawer ? { flex: 1 } : {}),
  }

  const scrollStyle = isDrawer
    ? { overflowY: 'auto', flex: 1, padding: '14px 16px' }
    : { padding: '14px 16px' }

  if (learningTopic) {
    const pool = LINKS[learningTopic] || FALLBACK_LINKS
    return (
      <aside style={outerStyle}>
        <div style={innerStyle}>
          {/* Header */}
          <div style={{ padding: '14px 16px', background: '#fff3ee', borderBottom: '1px solid #fcd9c8', flexShrink: 0 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>
              Suggested Learning for
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
              <div style={{ fontSize: 17, fontWeight: 800, color: '#fc4c02', lineHeight: 1.3, flex: 1 }}>
                {learningTopic}
              </div>
              <button
                onClick={onClose}
                title="Close"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', fontSize: 18, padding: '0 4px', lineHeight: 1, flexShrink: 0 }}
              >×</button>
            </div>
          </div>
          {/* Links */}
          <div style={scrollStyle}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 12 }}>
              {pool.length} resources
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {pool.map((link, i) => (
                <LinkItem key={i} url={link.url} title={link.title} description={link.description} />
              ))}
            </div>
          </div>
        </div>
      </aside>
    )
  }

  // No topic selected — show highlights
  const cloudItems = CLOUD_HIGHLIGHTS
    .filter(t => cloudTopics.includes(t))
    .map(t => ({ topic: t, ...((LINKS[t] || FALLBACK_LINKS)[0]) }))

  const aiItems = AI_HIGHLIGHTS
    .filter(t => aiTopics.includes(t))
    .map(t => ({ topic: t, ...((LINKS[t] || FALLBACK_LINKS)[0]) }))

  return (
    <aside style={outerStyle}>
      <div style={innerStyle}>
        {/* Header */}
        <div style={{ padding: '14px 16px', borderBottom: '1px solid #e5e7eb', flexShrink: 0 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 0.8 }}>
            Suggested Learning
          </div>
        </div>
        {/* Highlights */}
        <div style={scrollStyle}>
          <SectionLabel>Cloud Highlights</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}>
            {cloudItems.map((item, i) => (
              <div key={i}>
                <div style={{ fontSize: 10, color: '#9ca3af', fontWeight: 600, marginBottom: 3 }}>{item.topic}</div>
                <LinkItem url={item.url} title={item.title} />
              </div>
            ))}
          </div>
          <SectionLabel>AI Highlights</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {aiItems.map((item, i) => (
              <div key={i}>
                <div style={{ fontSize: 10, color: '#9ca3af', fontWeight: 600, marginBottom: 3 }}>{item.topic}</div>
                <LinkItem url={item.url} title={item.title} />
              </div>
            ))}
          </div>
          <div style={{ height: 8 }} />
        </div>
      </div>
    </aside>
  )
}
