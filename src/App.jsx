import './App.css'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Header/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
