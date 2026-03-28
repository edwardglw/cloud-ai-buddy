import { getColour, pairingType, btnPrimary } from '../data.js'
import MemberCard from './MemberCard.jsx'

function CardHeader({ topic, groups, allTopics, cloudTopics, aiTopics, isLearningActive, onShowLearning, onPairWith, onJoin }) {
  const colour = getColour(topic, allTopics)
  const category = cloudTopics.includes(topic) ? 'Cloud' : aiTopics.includes(topic) ? 'AI' : 'Custom'
  const catStyle = {
    Cloud:  { bg: '#eff6ff', text: '#1d4ed8' },
    AI:     { bg: '#f5f3ff', text: '#6d28d9' },
    Custom: { bg: '#f0fdf4', text: '#15803d' },
  }[category]

  const singleGroup = groups.find(g => g.members.length === 1)
  const multiGroup = groups.find(g => g.members.length > 1)
  const actionLabel = singleGroup ? 'PAIR UP ›' : 'JOIN GROUP ›'

  function handleAction() {
    if (singleGroup) {
      onPairWith({ id: singleGroup.id, name: singleGroup.members[0].name, topic: singleGroup.topic, level: singleGroup.members[0].level })
    } else if (multiGroup) {
      onJoin(multiGroup)
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', borderBottom: '1px solid #f3f4f6', flexWrap: 'wrap' }}>
      <span style={{ width: 9, height: 9, borderRadius: '50%', background: colour, flexShrink: 0 }} />
      <span style={{ fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 99, background: catStyle.bg, color: catStyle.text, flexShrink: 0 }}>{category}</span>
      <span style={{ fontWeight: 700, fontSize: 14, color: '#111827', flex: 1, minWidth: 60 }}>{topic}</span>
      <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
        <button
          onClick={onShowLearning}
          style={{ ...btnPrimary, fontSize: 11, padding: '4px 10px', background: isLearningActive ? '#d94002' : '#fc4c02' }}
        >
          VIEW SUGGESTED LEARNING ›
        </button>
        <button onClick={handleAction} style={{ ...btnPrimary, fontSize: 11, padding: '4px 10px' }}>
          {actionLabel}
        </button>
      </div>
    </div>
  )
}

function GroupRow({ group, onRemove }) {
  const isSingle = group.members.length === 1
  const subtitle = isSingle ? 'Looking to pair' : pairingType(group.members)

  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 10, fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>
        {subtitle}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {group.members.map((member, mi) => (
          <MemberCard key={mi} member={member} onRemove={() => onRemove(group.id, mi)} />
        ))}
      </div>
    </div>
  )
}

export function TopicCard({ topic, groups, allTopics, cloudTopics, aiTopics, onJoin, onPairWith, onRemoveMember, onShowLearning, isLearningActive }) {
  return (
    <div style={{ background: '#fff', borderRadius: 8, border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', marginBottom: 12, overflow: 'hidden' }}>
      <CardHeader
        topic={topic}
        groups={groups}
        allTopics={allTopics}
        cloudTopics={cloudTopics}
        aiTopics={aiTopics}
        isLearningActive={isLearningActive}
        onShowLearning={onShowLearning}
        onPairWith={onPairWith}
        onJoin={onJoin}
      />
      <div style={{ padding: '10px 16px' }}>
        {groups.map(group => (
          <GroupRow key={group.id} group={group} onRemove={onRemoveMember} />
        ))}
      </div>
    </div>
  )
}
