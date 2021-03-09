export type Repository = {
  name: string;
  description: string;
  html_url: string;
}

export type RepositoryItemProps = {
  repository: Repository
}

export default function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a target='_blank' href={repository.html_url}>
          Acessar Repositório
      </a>
    </li>
  )
}

