import {content, start} from '../css/Content.module.css'

export default function Content(){
  return (
    <section className={content}>
      <h1>Busca Cep</h1>
      <p>Não sabe o seu CEP? Veio ao lugar certo!</p>
      <button className={start}>iniciar</button>
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