import './App.css'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ContextProvider } from './components/Context/Context'
function App() {

  return (
    <>
    <ContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Header/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </ContextProvider>
    </>
  )
}

export default App
