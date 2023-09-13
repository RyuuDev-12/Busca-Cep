import {content, btns} from '../css/Content.module.css'
import {Link} from 'react-router-dom'

export default function Content(){
  return (
    <section className={content}>
      <h1>Busca Cep</h1> 
      <p>Não sabe o seu CEP? Veio ao lugar certo!</p>
      <p>
        Muitas pessoas não lembram o próprio CEP pelo 
        simples fato de usarmos raramente no dia a dia, 
        mas quando chega a hora de fazer aquele cadastro 
        importante pedindo seu CEP você se perde não é? 
        É pra isso que existe o <span>Busca CEP</span> pra te ajudar!
      </p>
      <div>
        <Link to="/Busca-Cep/FormCep" className={btns}>buscar CEP</Link>
        <Link to="/Busca-Cep/Form" className={btns}>buscar Endereço</Link>
      </div>
    </section>
  )
}