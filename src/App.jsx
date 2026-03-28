import { useState } from 'react'
import { DEFAULT_DATA, btnPrimary } from './data.js'
import { useWindowWidth } from './hooks/useWindowWidth.js'
import Sidebar from './components/Sidebar.jsx'
import { TopicCard } from './components/TopicCard.jsx'
import LearningPanel from './components/LearningPanel.jsx'
import { AddMyselfModal, PairWithModal, JoinGroupModal, ConfirmRemoveModal } from './components/Modals.jsx'


export default function App() {
  const [data, setData] = useState(DEFAULT_DATA)
  const [modal, setModal] = useState(null)
  const [filterTopic, setFilterTopic] = useState(null)
  const [learningTopic, setLearningTopic] = useState(null)
  const [toast, setToast] = useState(null)
  const [filterOpen, setFilterOpen] = useState(false)

  const width = useWindowWidth()
  const isWide = width >= 900

  const allTopics = [...data.cloudTopics, ...data.aiTopics]

  function persist(newData) { setData({ ...newData }) }

  function addTopic(category, name) {
    if (!name) return
    const key = category === 'Cloud' ? 'cloudTopics' : 'aiTopics'
    if (data[key].includes(name)) return
    persist({ ...data, [key]: [...data[key], name] })
  }

  function handleAddMyself({ name, topic, level }) {
    persist({
      ...data,
      groups: [...data.groups, { id: Date.now(), topic, members: [{ name, level }], createdAt: Date.now() }],
    })
    setModal(null)
  }

  function handleRemoveMember(groupId, memberIndex) {
    const group = data.groups.find(g => g.id === groupId)
    if (!group) return
    const newMembers = group.members.filter((_, i) => i !== memberIndex)
    if (newMembers.length === 0) {
      persist({ ...data, groups: data.groups.filter(g => g.id !== groupId) })
    } else {
      persist({ ...data, groups: data.groups.map(g => g.id === groupId ? { ...g, members: newMembers } : g) })
    }
  }

  function handleJoinGroup(groupId, member) {
    const group = data.groups.find(g => g.id === groupId)
    persist({ ...data, groups: data.groups.map(g => g.id === groupId ? { ...g, members: [...g.members, member] } : g) })
    setModal(null)
    setToast({ name: member.name, topic: group?.topic })
  }

  function handlePairWith(entry, me) {
    persist({ ...data, groups: data.groups.map(g => g.id === entry.id ? { ...g, members: [...g.members, me] } : g) })
    setModal(null)
    setToast({ name: me.name, topic: entry.topic })
  }

  function requestRemoveMember(groupId, memberIndex) {
    const group = data.groups.find(g => g.id === groupId)
    setModal({ type: 'confirmRemove', groupId, memberIndex, memberName: group?.members[memberIndex]?.name })
  }

  const sortedGroups = [...data.groups].sort((a, b) => b.id - a.id)
  const visibleGroups = filterTopic ? sortedGroups.filter(g => g.topic === filterTopic) : sortedGroups
  const activeTopics = [...new Set(visibleGroups.map(g => g.topic))]

  const sidebarEl = (
    <Sidebar
      cloudTopics={data.cloudTopics}
      aiTopics={data.aiTopics}
      allTopics={allTopics}
      groups={data.groups}
      filterTopic={filterTopic}
      setFilterTopic={(t) => { setFilterTopic(t); if (!isWide) setFilterOpen(false) }}
      onAddTopic={addTopic}
      onClose={!isWide ? () => setFilterOpen(false) : undefined}
    />
  )

  const mainContent = (
    <>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: '#111827', marginBottom: 6 }}>
          Welcome to the Cloud &amp; AI Buddy Programme
        </h2>
        <p style={{ fontSize: 14, color: '#6b7280' }}>
          Join a topic group, pair with someone within a topic group or add yourself to start a new group.
        </p>
      </div>

      {filterTopic && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 8, padding: '10px 16px', marginBottom: 12 }}>
          <span style={{ fontSize: 13, color: '#92400e', fontWeight: 500 }}>Filtered: <strong>{filterTopic}</strong></span>
          <button onClick={() => setFilterTopic(null)} style={{ background: '#fc4c02', color: '#fff', border: 'none', borderRadius: 8, padding: '5px 12px', fontSize: 12, fontWeight: 700, cursor: 'pointer', textTransform: 'uppercase' }}>
            × Reset
          </button>
        </div>
      )}

      {activeTopics.length === 0 ? (
        <div style={{ background: '#fff', borderRadius: 8, border: '1px solid #e5e7eb', padding: '48px 32px', textAlign: 'center' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#fff3ee', border: '2px solid #fcd9c8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 26 }}>🤝</div>
          <p style={{ fontSize: 17, fontWeight: 700, color: '#111827', marginBottom: 6 }}>
            {filterTopic ? `No groups for "${filterTopic}"` : 'No groups yet'}
          </p>
          <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 24 }}>Be the first — add yourself to a topic and get matched.</p>
          <button onClick={() => setModal({ type: 'addMyself' })} style={{ ...btnPrimary }}>
            + ADD MYSELF ›
          </button>
        </div>
      ) : (
        activeTopics.map(topic => (
          <TopicCard
            key={topic}
            topic={topic}
            groups={visibleGroups.filter(g => g.topic === topic)}
            allTopics={allTopics}
            cloudTopics={data.cloudTopics}
            aiTopics={data.aiTopics}
            onJoin={group => setModal({ type: 'joinGroup', payload: group })}
            onPairWith={entry => setModal({ type: 'pairWith', payload: entry })}
            onRemoveMember={requestRemoveMember}
            onShowLearning={() => setLearningTopic(learningTopic === topic ? null : topic)}
            isLearningActive={learningTopic === topic}
          />
        ))
      )}
    </>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', background: '#f0f2f5' }}>

      {/* Header */}
      <header style={{ background: 'linear-gradient(135deg, #111827 0%, #1e1b4b 100%)', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
        <img
          src={`${import.meta.env.BASE_URL}headerimage.png`}
          alt=""
          style={{ position: 'absolute', top: 0, right: 0, height: '100%', width: 'auto', display: 'block', pointerEvents: 'none' }}
        />
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '20px 24px', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: '#fff', letterSpacing: -0.5, marginBottom: 6 }}>
            Cloud &amp; AI Buddy Programme
          </h1>
          <p style={{ color: '#94a3b8', fontSize: 14, marginBottom: 16 }}>
            Connect with peers and mentors across cloud and AI topics. Pair, learn, share, grow.
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setModal({ type: 'addMyself' })} style={{ ...btnPrimary, fontSize: 13 }}>
              + ADD MYSELF ›
            </button>
            {!isWide && (
              <button
                onClick={() => setFilterOpen(true)}
                style={{ ...btnPrimary, fontSize: 13, background: '#374151' }}
              >
                ☰ FILTER
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Toast */}
      {toast && (
        <div style={{ background: '#111827', color: '#fff', flexShrink: 0, borderBottom: '1px solid #374151' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', padding: '10px 24px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 16 }}>🎉</span>
            <span style={{ flex: 1, fontSize: 13, color: '#e2e8f0' }}>
              <strong style={{ color: '#fff' }}>{toast.name}</strong> has been paired on <strong style={{ color: '#fff' }}>{toast.topic}</strong>.
            </span>
            <button
              onClick={() => { setFilterTopic(toast.topic); setToast(null) }}
              style={{ ...btnPrimary, fontSize: 12, padding: '5px 12px', whiteSpace: 'nowrap' }}
            >
              FIND IN PAIRINGS ›
            </button>
            <button onClick={() => setToast(null)} style={{ background: 'none', border: 'none', color: '#6b7280', fontSize: 18, cursor: 'pointer', lineHeight: 1, padding: '0 4px' }}>×</button>
          </div>
        </div>
      )}

      {/* Content */}
      {isWide ? (
        // Wide layout: sidebar + shared scroll (main + learning panel)
        <div style={{ display: 'flex', maxWidth: 1400, margin: '0 auto', width: '100%', alignItems: 'flex-start' }}>
          {sidebarEl}
          <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start' }}>
            <main style={{ flex: 1, minWidth: 0, padding: '24px 16px' }}>
              {mainContent}
            </main>
            <LearningPanel
              learningTopic={learningTopic}
              cloudTopics={data.cloudTopics}
              aiTopics={data.aiTopics}
              onClose={() => setLearningTopic(null)}
            />
          </div>
        </div>
      ) : (
        // Narrow layout: full-width main
        <div>
          <main style={{ padding: '16px' }}>
            {mainContent}
          </main>
        </div>
      )}

      {/* Narrow: filter drawer (left) */}
      {!isWide && (
        <>
          {filterOpen && (
            <div
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 40 }}
              onClick={() => setFilterOpen(false)}
            />
          )}
          <div style={{
            position: 'fixed', left: 0, top: 0, bottom: 0, width: 268,
            background: '#f0f2f5', zIndex: 50,
            transform: filterOpen ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.22s ease',
            display: 'flex', flexDirection: 'column',
          }}>
            {sidebarEl}
          </div>
        </>
      )}

      {/* Narrow: learning drawer (right) */}
      {!isWide && (
        <>
          {learningTopic && (
            <div
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 40 }}
              onClick={() => setLearningTopic(null)}
            />
          )}
          <div style={{
            position: 'fixed', right: 0, top: 0, bottom: 0, width: 300,
            zIndex: 50,
            transform: learningTopic ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.22s ease',
            display: 'flex', flexDirection: 'column',
          }}>
            <LearningPanel
              learningTopic={learningTopic}
              cloudTopics={data.cloudTopics}
              aiTopics={data.aiTopics}
              onClose={() => setLearningTopic(null)}
              isDrawer
            />
          </div>
        </>
      )}

      {/* Modals */}
      {modal?.type === 'addMyself' && (
        <AddMyselfModal cloudTopics={data.cloudTopics} aiTopics={data.aiTopics} onClose={() => setModal(null)} onSubmit={handleAddMyself} onAddTopic={addTopic} />
      )}
      {modal?.type === 'joinGroup' && (
        <JoinGroupModal group={modal.payload} onClose={() => setModal(null)} onSubmit={handleJoinGroup} />
      )}
      {modal?.type === 'pairWith' && (
        <PairWithModal entry={modal.payload} onClose={() => setModal(null)} onSubmit={handlePairWith} />
      )}
      {modal?.type === 'confirmRemove' && (
        <ConfirmRemoveModal
          memberName={modal.memberName}
          onClose={() => setModal(null)}
          onConfirm={() => { handleRemoveMember(modal.groupId, modal.memberIndex); setModal(null) }}
        />
      )}
    </div>
  )
}
