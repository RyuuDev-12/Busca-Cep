import {content, start} from '../css/Content.module.css'
import {Link} from 'react-router-dom'

export default function Content(){
  return (
    <section className={content}>
      <h1>Busca Cep</h1> 
      <p>Não sabe o seu CEP? Veio ao lugar certo!</p>
      <Link to="/Busca-Cep/form" className={start}>iniciar</Link>
      <p>
        Muitas pessoas não lembram o próprio CEP pelo 
        simples fato de usarmos raramente no dia a dia, 
        mas quando chega a hora de fazer aquele cadastro 
        importante pedindo seu CEP você se perde não é? 
        É pra isso que existe o <span>Busca CEP</span> pra te ajudar!
      </p>
    </section>
  )
}