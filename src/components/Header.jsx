import { FaHouseUser, FaGithub } from 'react-icons/fa6'
import {navIcon} from '../css/Header.module.css'

export default function Header(){
  return (
    <header>
      <div>
        <FaHouseUser/> 
        <h2>Busca Cep</h2>
      </div>
      <nav>
        <a target="_blank" rel='noreferrer' href="https://github.com/ryuudev-12">
          <FaGithub className={navIcon}/>
        </a>
      </nav>
    </header>
  )
}