// Signature element: a repeating motif inspired by Adire eleko (resist-dye)
// patterns from Ogun State textile tradition — used as a section seam
// throughout the site rather than a decorative stock divider.
export default function AdireDivider({ tone = 'light' }) {
  const stroke = tone === 'dark' ? '#D9BB5C' : '#C9A227'
  const bg = tone === 'dark' ? '#141B33' : 'transparent'

  return (
    <div
      role="presentation"
      className="h-9 w-full bg-repeat-x"
      style={{
        backgroundColor: bg,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='36' viewBox='0 0 72 36'%3E%3Cg fill='none' stroke='${encodeURIComponent(
          stroke
        )}' stroke-width='1.4' opacity='0.55'%3E%3Ccircle cx='18' cy='18' r='10'/%3E%3Ccircle cx='54' cy='18' r='10'/%3E%3Cpath d='M18 4v6M18 26v6M4 18h6M26 18h6M54 4v6M54 26v6M40 18h6M62 18h6'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '72px 36px',
        backgroundPosition: 'center',
      }}
    />
  )
}
