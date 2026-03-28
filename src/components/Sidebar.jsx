import { useState } from 'react'
import { getColour, inputStyle, btnPrimary } from '../data.js'

function SidebarTopic({ topic, allTopics, active, count, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%', display: 'flex', alignItems: 'center', gap: 8,
        padding: '7px 16px', background: active ? '#fff3ee' : 'none',
        border: 'none', cursor: 'pointer', textAlign: 'left',
        borderLeft: active ? '3px solid #fc4c02' : '3px solid transparent',
      }}
    >
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: getColour(topic, allTopics), flexShrink: 0 }} />
      <span style={{ fontSize: 12, fontWeight: active ? 700 : 400, color: active ? '#111827' : '#4b5563', lineHeight: 1.4, flex: 1 }}>{topic}</span>
      {count > 0 && (
        <span style={{ fontSize: 11, color: active ? '#fc4c02' : '#9ca3af', fontWeight: 600 }}>({count})</span>
      )}
    </button>
  )
}

function AccordionSection({ label, topics, allTopics, groups, filterTopic, setFilterTopic }) {
  const [open, setOpen] = useState(false)
  const topicCount = (t) => groups.filter(g => g.topic === t).length
  const totalCount = topics.reduce((sum, t) => sum + topicCount(t), 0)

  // Topics with groups float to top, then alphabetical
  const sorted = [...topics].sort((a, b) => {
    const ca = topicCount(a), cb = topicCount(b)
    if (ca !== cb) return cb - ca
    return a.localeCompare(b)
  })

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '8px 16px', background: '#f3f4f6', border: 'none', cursor: 'pointer',
          textAlign: 'left', borderTop: '1px solid #e5e7eb',
        }}
      >
        <span style={{ fontSize: 10, fontWeight: 800, color: '#6b7280', textTransform: 'uppercase', letterSpacing: 1 }}>
          {label}{totalCount > 0 ? ` (${totalCount})` : ''}
        </span>
        <span style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600 }}>{open ? '▲' : '▼'}</span>
      </button>
      {open && sorted.map(topic => (
        <SidebarTopic
          key={topic}
          topic={topic}
          allTopics={allTopics}
          active={filterTopic === topic}
          count={topicCount(topic)}
          onClick={() => setFilterTopic(filterTopic === topic ? null : topic)}
        />
      ))}
    </div>
  )
}

export default function Sidebar({ cloudTopics, aiTopics, allTopics, groups, filterTopic, setFilterTopic, onAddTopic, onClose }) {
  const [adding, setAdding] = useState(false)
  const [newTopic, setNewTopic] = useState('')
  const [newCategory, setNewCategory] = useState('Cloud')

  function submitNewTopic() {
    if (newTopic.trim()) {
      onAddTopic(newCategory, newTopic.trim())
      setNewTopic('')
      setAdding(false)
    }
  }

  return (
    <aside style={{ width: 236, flexShrink: 0, padding: '24px 0 24px 16px', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        background: '#fff', borderRadius: 8, border: '1px solid #e5e7eb',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)', overflow: 'hidden',
      }}>

        {/* Close button (drawer mode) */}
        {onClose && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '8px 12px 0', flexShrink: 0 }}>
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', fontSize: 20, lineHeight: 1, padding: '2px 6px' }}>×</button>
          </div>
        )}

        {/* Add topic */}
        <div style={{ padding: '12px 16px', borderBottom: '1px solid #e5e7eb', flexShrink: 0 }}>
          {adding ? (
            <div>
              <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
                {['Cloud', 'AI'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setNewCategory(cat)}
                    style={{
                      flex: 1, padding: '5px 0', fontSize: 12, fontWeight: 600,
                      border: `1.5px solid ${newCategory === cat ? '#fc4c02' : '#e5e7eb'}`,
                      borderRadius: 8, cursor: 'pointer',
                      background: newCategory === cat ? '#fff3ee' : '#fff',
                      color: newCategory === cat ? '#fc4c02' : '#6b7280',
                    }}
                  >{cat}</button>
                ))}
              </div>
              <input
                autoFocus
                value={newTopic}
                onChange={e => setNewTopic(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') submitNewTopic()
                  if (e.key === 'Escape') { setAdding(false); setNewTopic('') }
                }}
                placeholder="Topic name..."
                style={{ ...inputStyle, fontSize: 13, padding: '8px 10px', marginBottom: 8 }}
              />
              <div style={{ display: 'flex', gap: 6 }}>
                <button onClick={submitNewTopic} style={{ ...btnPrimary, flex: 1, fontSize: 12, padding: '6px 0' }}>+ ADD ›</button>
                <button onClick={() => { setAdding(false); setNewTopic('') }} style={{ flex: 1, background: '#f3f4f6', color: '#6b7280', border: 'none', borderRadius: 8, padding: '6px 0', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
              </div>
            </div>
          ) : (
            <button onClick={() => setAdding(true)} style={{ ...btnPrimary, width: '100%', fontSize: 12, padding: '8px 0' }}>
              + ADD TOPIC ›
            </button>
          )}
        </div>

        {/* All topics button */}
        <button
          onClick={() => setFilterTopic(null)}
          style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: 8,
            padding: '9px 16px', background: filterTopic === null ? '#fff3ee' : '#fafafa',
            border: 'none', cursor: 'pointer', textAlign: 'left',
            borderLeft: filterTopic === null ? '3px solid #fc4c02' : '3px solid transparent',
            flexShrink: 0,
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#d1d5db', flexShrink: 0 }} />
          <span style={{ fontSize: 12, fontWeight: filterTopic === null ? 700 : 500, color: filterTopic === null ? '#111827' : '#374151' }}>All topics</span>
        </button>

        {/* Scrollable accordion list */}
        <div>
          <AccordionSection
            label="Cloud"
            topics={cloudTopics}
            allTopics={allTopics}
            groups={groups}
            filterTopic={filterTopic}
            setFilterTopic={setFilterTopic}
          />
          <AccordionSection
            label="AI"
            topics={aiTopics}
            allTopics={allTopics}
            groups={groups}
            filterTopic={filterTopic}
            setFilterTopic={setFilterTopic}
          />
          <div style={{ height: 8 }} />
        </div>
      </div>
    </aside>
  )
}
