export default function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository.name ?? 'Default'}</strong>
      <p>{repository.description}</p>

      <a target='_blank' href={repository.html_url}>
          Acessar Repositório
      </a>
    </li>
  )
}

