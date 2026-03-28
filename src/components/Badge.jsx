export default function Badge({ level }) {
  const c = { Beginner: ['#dbeafe','#1d4ed8'], Intermediate: ['#fef3c7','#b45309'], Expert: ['#dcfce7','#15803d'] }[level] || ['#f3f4f6','#374151']
  return <span style={{ background: c[0], color: c[1], fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 99 }}>{level}</span>
}
