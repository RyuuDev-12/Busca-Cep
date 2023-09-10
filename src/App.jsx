import './css/App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Form from './components/Form'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

function App() {

  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Content/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
