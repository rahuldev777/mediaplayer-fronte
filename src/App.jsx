
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Footer from './components.jsx/Footer'
import Header from './components.jsx/Header'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'


function App() {


  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/watchhistory' element={<Watchhistory/>} />
        

      </Routes>
     
      <Footer />
    </>
  )
}

export default App
