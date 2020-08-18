export default function TeamMember({ name = 'Name', url, children }) {
  return (
    <p>
      <strong>
        {url && (
          <a href={`${url}`} target="_blank">
            {name}
          </a>
        )}
        {!url && name}
      </strong>{' '}
      &mdash; {children}
    </p>
  )
}
