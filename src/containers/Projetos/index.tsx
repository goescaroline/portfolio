import Titulo from '../../components/Titulo'
import { Lista, LinkBotao, Sessao, Item } from './styles'
import { useEffect, useState } from 'react'
import Paragrafo from '../../components/Paragrafo'

const Projetos = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/goescaroline/repos')
      .then((res) => res.json())
      .then((resJson) => {
        setRepos(resJson)
      })
  }, [])
  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {repos.map(
          (repositorio: {
            name: string
            language: string
            html_url: string | undefined
          }) => (
            // eslint-disable-next-line react/jsx-key
            <Sessao>
              <Item>Nome: {repositorio.name}</Item>
              <Item>Linguagem: {repositorio.language}</Item>
              <LinkBotao href={repositorio.html_url}>Visualizar</LinkBotao>
            </Sessao>
          )
        )}
      </Lista>
    </section>
  )
}

export default Projetos
