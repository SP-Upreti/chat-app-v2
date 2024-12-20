import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Login from './components/auth/login'
import { useAppContext } from './context/appcontext'

function App() {
  const { loggedIn } = useAppContext()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/auth' element={<Login />} />
          <Route path='/' element={loggedIn ? <Home /> : <Navigate to={'/auth'} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
