import RepositoryItem from "./RepositoryItem"

import '../styles/repositories.scss'

const repository = {
  name: 'unform',
  description: 'Form Rocketseat',
  link: 'https://github.com/unform/unform'
}

export default function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
          <RepositoryItem repository={repository}/>
          <RepositoryItem repository={repository}/>
          <RepositoryItem repository={repository}/>
          <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}