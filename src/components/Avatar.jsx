import { avatarColour, initials } from '../data.js'

export default function Avatar({ name, size = 36 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: avatarColour(name),
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', fontWeight: 700, fontSize: size * 0.38,
      flexShrink: 0, letterSpacing: 0.5, userSelect: 'none',
    }}>
      {initials(name)}
    </div>
  )
}
