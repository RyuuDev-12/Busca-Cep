import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Form from './components/Form'
import FormCep from './components/FormCep'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

function App() {

  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route path="/Busca-Cep/" element={<Content/>}/>
          <Route path="/Busca-Cep/Form" element={<Form/>}/>
          <Route path="/Busca-Cep/FormCep" element={<FormCep/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
