import { useState } from 'react'
import Avatar from './Avatar.jsx'
import Badge from './Badge.jsx'

export default function MemberCard({ member, onRemove }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8,
        padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10,
        minWidth: 150, position: 'relative',
        transition: 'box-shadow 0.15s',
        boxShadow: hovered ? '0 2px 8px rgba(0,0,0,0.10)' : 'none',
      }}
    >
      <Avatar name={member.name} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 14, color: '#111827', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{member.name}</div>
        <div style={{ marginTop: 4 }}><Badge level={member.level} /></div>
      </div>
      {hovered && (
        <button
          onClick={e => { e.stopPropagation(); onRemove() }}
          aria-label={`Remove ${member.name}`}
          style={{
            position: 'absolute', top: 5, right: 7,
            background: '#fee2e2', border: 'none', color: '#dc2626',
            fontSize: 13, fontWeight: 700, cursor: 'pointer',
            lineHeight: 1, padding: '3px 6px', borderRadius: 4, zIndex: 1,
          }}
        >×</button>
      )}
    </div>
  )
}
