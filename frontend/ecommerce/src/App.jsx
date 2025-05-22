import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoadingSpinner from './components/LoadingSpinner'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import CategoryPage from './pages/CategoryPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gray-900 text-white relative overflow-hidden'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)]' />
        </div>
      </div>
      <div className='relative z-50 pt-20'>
        <Navbar />
        <Routes>
        <Route path='/admin' element={<AdminPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/category/:category' element={<CategoryPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login'element={<LoginPage />} />

        </Routes>
      </div>

    </div>
  )
}

export default App
