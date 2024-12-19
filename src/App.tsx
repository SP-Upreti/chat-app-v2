import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Login from './components/auth/login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/auth' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
