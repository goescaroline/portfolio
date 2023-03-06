import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { Githubsecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eius
      qui necessitatibus nisi, voluptates cupiditate perferendis impedit quas
      vitae quia reprehenderit doloribus amet expedita soluta iste numquam quam
      corrupti voluptatibus.
    </Paragrafo>
    <Githubsecao>
      <img src="https://github-readme-stats.vercel.app/api?username=goescaroline&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=goescaroline&layout=compact&langs_count=7&theme=dracula" />
    </Githubsecao>
  </section>
)

export default Sobre
