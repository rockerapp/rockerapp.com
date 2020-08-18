export default function WidthContainer({ maxWidth = 768, children }) {
  return (
    <div
      style={{
        maxWidth: `${maxWidth}px`,
        margin: '0 auto'
      }}
    >
      {children}
    </div>
  )
}
