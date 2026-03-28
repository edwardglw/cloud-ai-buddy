import { useState } from 'react'
import { CLOUD_TOPICS, AI_TOPICS, isValidName, inputStyle, btnPrimary, btnSecondary } from '../data.js'
import { Modal, Field } from './Modal.jsx'
import Avatar from './Avatar.jsx'
import Badge from './Badge.jsx'

export function AddMyselfModal({ cloudTopics, aiTopics, onClose, onSubmit, onAddTopic }) {
  const [name, setName] = useState('')
  const [level, setLevel] = useState('Intermediate')
  const [topicMode, setTopicMode] = useState('select')
  // select mode
  const [selectedTopic, setSelectedTopic] = useState('')
  // create mode
  const [newCategory, setNewCategory] = useState('Cloud')
  const [newTopicName, setNewTopicName] = useState('')

  const nameValid = isValidName(name)
  const allTopics = [...cloudTopics, ...aiTopics]
  const newTopicTrimmed = newTopicName.trim()
  const newTopicAlreadyExists = allTopics.includes(newTopicTrimmed)

  const topic = topicMode === 'select' ? selectedTopic : newTopicTrimmed
  const topicValid = topicMode === 'select' ? !!selectedTopic : (!!newTopicTrimmed && !newTopicAlreadyExists)
  const canSubmit = nameValid && topicValid

  function handleSubmit() {
    if (!canSubmit) return
    if (topicMode === 'create') onAddTopic(newCategory, newTopicTrimmed)
    onSubmit({ name: name.trim(), topic, level })
  }

  return (
    <Modal title="Add Myself" onClose={onClose}>
      <Field label="Your name (First name + last initial, e.g. Ed L)">
        <input
          style={{ ...inputStyle, borderColor: name && !nameValid ? '#e63946' : '#e5e7eb' }}
          value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Ed L"
        />
        {name && !nameValid && <p style={{ color: '#e63946', fontSize: 12, marginTop: 4 }}>Use format: First name + last initial (e.g. Ed L)</p>}
      </Field>

      <Field label="Topic">
        {/* Mode toggle */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
          {['select', 'create'].map(mode => (
            <button
              key={mode}
              onClick={() => setTopicMode(mode)}
              style={{
                flex: 1, padding: '6px 0', fontSize: 12, fontWeight: 600,
                border: `1.5px solid ${topicMode === mode ? '#fc4c02' : '#e5e7eb'}`,
                borderRadius: 8, cursor: 'pointer',
                background: topicMode === mode ? '#fff3ee' : '#fff',
                color: topicMode === mode ? '#fc4c02' : '#6b7280',
                textTransform: 'uppercase', letterSpacing: 0.3,
              }}
            >
              {mode === 'select' ? 'Existing topic' : 'Create new topic'}
            </button>
          ))}
        </div>

        {topicMode === 'select' ? (
          <select style={inputStyle} value={selectedTopic} onChange={e => setSelectedTopic(e.target.value)}>
            <option value="">Select a topic…</option>
            {cloudTopics.length > 0 && <optgroup label="Cloud">{cloudTopics.map(t => <option key={t}>{t}</option>)}</optgroup>}
            {aiTopics.length > 0 && <optgroup label="AI">{aiTopics.map(t => <option key={t}>{t}</option>)}</optgroup>}
          </select>
        ) : (
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
              value={newTopicName}
              onChange={e => setNewTopicName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              placeholder="Topic name…"
              style={{ ...inputStyle, borderColor: newTopicAlreadyExists ? '#e63946' : '#e5e7eb' }}
            />
            {newTopicAlreadyExists && (
              <p style={{ color: '#e63946', fontSize: 12, marginTop: 4 }}>This topic already exists — select it from the list instead.</p>
            )}
          </div>
        )}
      </Field>

      <Field label="Experience level">
        <select style={inputStyle} value={level} onChange={e => setLevel(e.target.value)}>
          <option>Beginner</option><option>Intermediate</option><option>Expert</option>
        </select>
      </Field>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 8 }}>
        <button onClick={onClose} style={btnSecondary}>Cancel</button>
        <button
          disabled={!canSubmit}
          onClick={handleSubmit}
          style={{ ...btnPrimary, opacity: canSubmit ? 1 : 0.45, cursor: canSubmit ? 'pointer' : 'not-allowed' }}
        >
          ADD ME ›
        </button>
      </div>
    </Modal>
  )
}

export function PairWithModal({ entry, onClose, onSubmit }) {
  const [name, setName] = useState('')
  const [level, setLevel] = useState('Intermediate')
  const nameValid = isValidName(name)
  const allLevels = [entry.level, level]
  const hint = nameValid
    ? allLevels.every(l => l === allLevels[0]) ? 'Peer pairing' : 'Mentor / Mentee pairing'
    : null

  return (
    <Modal title={`Pair with ${entry.name.split(' ')[0]}`} onClose={onClose}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: '#f8f9fb', borderRadius: 8, marginBottom: 20 }}>
        <Avatar name={entry.name} size={44} />
        <div>
          <div style={{ fontWeight: 700, fontSize: 15, color: '#111827' }}>{entry.name}</div>
          <div style={{ marginTop: 4 }}><Badge level={entry.level} /></div>
        </div>
      </div>
      <Field label="Your name (First name + last initial, e.g. Ed L)">
        <input
          style={{ ...inputStyle, borderColor: name && !nameValid ? '#e63946' : '#e5e7eb' }}
          value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Ed L"
        />
        {name && !nameValid && <p style={{ color: '#e63946', fontSize: 12, marginTop: 4 }}>Use format: First name + last initial (e.g. Ed L)</p>}
      </Field>
      <Field label="Experience level">
        <select style={inputStyle} value={level} onChange={e => setLevel(e.target.value)}>
          <option>Beginner</option><option>Intermediate</option><option>Expert</option>
        </select>
      </Field>
      {hint && <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 16, padding: '8px 12px', background: '#f3f4f6', borderRadius: 8 }}>{hint}</p>}
      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
        <button onClick={onClose} style={btnSecondary}>Cancel</button>
        <button
          disabled={!nameValid}
          onClick={() => nameValid && onSubmit(entry, { name: name.trim(), level })}
          style={{ ...btnPrimary, opacity: nameValid ? 1 : 0.45, cursor: nameValid ? 'pointer' : 'not-allowed' }}
        >
          PAIR UP &gt;
        </button>
      </div>
    </Modal>
  )
}

export function JoinGroupModal({ group, onClose, onSubmit }) {
  const [name, setName] = useState('')
  const [level, setLevel] = useState('Intermediate')
  const nameValid = isValidName(name)

  return (
    <Modal title={`Join group — ${group.topic}`} onClose={onClose}>
      <Field label="Your name (First name + last initial, e.g. Ed L)">
        <input
          style={{ ...inputStyle, borderColor: name && !nameValid ? '#e63946' : '#e5e7eb' }}
          value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Ed L"
        />
        {name && !nameValid && <p style={{ color: '#e63946', fontSize: 12, marginTop: 4 }}>Use format: First name + last initial (e.g. Ed L)</p>}
      </Field>
      <Field label="Experience level">
        <select style={inputStyle} value={level} onChange={e => setLevel(e.target.value)}>
          <option>Beginner</option><option>Intermediate</option><option>Expert</option>
        </select>
      </Field>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 8 }}>
        <button onClick={onClose} style={btnSecondary}>Cancel</button>
        <button
          disabled={!nameValid}
          onClick={() => nameValid && onSubmit(group.id, { name: name.trim(), level })}
          style={{ ...btnPrimary, opacity: nameValid ? 1 : 0.45, cursor: nameValid ? 'pointer' : 'not-allowed' }}
        >
          JOIN GROUP &gt;
        </button>
      </div>
    </Modal>
  )
}

export function ConfirmRemoveModal({ memberName, onClose, onConfirm }) {
  return (
    <Modal title="Remove from group?" onClose={onClose}>
      <p style={{ fontSize: 14, color: '#374151', marginBottom: 24, lineHeight: 1.6 }}>
        Are you sure you want to remove <strong>{memberName}</strong> from this group?
        {' '}If only one person remains, they will be moved back to "looking to pair".
      </p>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
        <button onClick={onClose} style={btnSecondary}>Cancel</button>
        <button
          onClick={onConfirm}
          style={{ ...btnPrimary, background: '#dc2626' }}
        >
          REMOVE &gt;
        </button>
      </div>
    </Modal>
  )
}
