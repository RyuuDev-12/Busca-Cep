import '../css/Form.module.css'
import {btns} from '../css/Content.module.css'
import {resultClass, voltar} from '../css/Form.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Input from './Input'

export default function FormCep(){
  const [estado, setEstado] = useState()
  const [cidade, setCidade] = useState()
  const [rua, setRua] = useState()
  const [result, setResult] = useState()

  function search(e){
    e.preventDefault()

    fetch(`https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json`)
    .then((resp) => resp.json())
    .then((data) => {
      setResult(data[0].cep)
    })
  }

  const copy = async () => {
    await navigator.clipboard.writeText(result)
    alert('Copiado para a Aréa de Transferência!')
  }

  return (
    <section>
      <Link className={`${btns} ${voltar}`} to="/Busca-Cep">Voltar</Link>
      <div className={resultClass}>
        <form onSubmit={(e)=>{search(e)}}>
          <Input
            type="text"
            name="Estado"
            placeholder="Exemplo: RJ"
            handleOnChange={(e)=> setEstado(e.target.value)}
          />
          <Input
            type="text"
            name="Município"
            placeholder="Exemplo: Rio de Janeiro"
            handleOnChange={(e)=> setCidade(e.target.value)}
          />
          <Input
            type="text"
            name="Lougradouro"
            placeholder="Exemplo: Paulista"
            handleOnChange={(e)=> setRua(e.target.value)}
          />
          <input type="submit" value="Buscar" className={btns}/>
        </form>
        {result &&(
          <div className={resultClass}>
            <h2>Seu CEP é {result}</h2>
            <button className={btns} onClick={copy}>Copiar</button>
          </div>
        )}
      </div>
    </section>
  )
}