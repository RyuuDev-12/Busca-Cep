import '../css/Form.module.css'
import {start} from '../css/Content.module.css'
import {resultClass} from '../css/Form.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Input from './Input'

export default function Form(){
  const [value, setValue] = useState()
  const [result, setResult] = useState()

  function buscar(event){
    event.preventDefault()    
    if(value.length != 8){
      alert('CEP Inválido')
    }

    fetch(`https://viacep.com.br/ws/45051040/json`)
    .then((resp) => resp.json())
    .then((data) => {
      setResult(data)
    })
    .catch(err => console.log(err))
  }

  return (
    <section>
      <form onSubmit={buscar}>
        <Link to="/Busca-Cep" className={start}>Voltar</Link>
        <Input
          handleOnChange={(e)=>{setValue(e.target.value)}}
          type="number"
          name="CEP"
          placeholder="Digite seu CEP"
        />
        <input type="submit" value="Buscar" className={start}/>
      </form>
        {result &&(
          <div className={resultClass}>
            <p>Logradouro: {result.logradouro}</p>
            <p>Bairro: {result.bairro}</p>
            <p>Localidade: {result.localidade}</p>
            <p>Estado: {result.uf}</p>
            <p>DDD: {result.ddd}</p>
          </div>
        )}
    </section>
  )
}