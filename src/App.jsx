 import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Arnold from './pages/Arnold'
import Lethabo from './pages/Lethabo'
import Gift from './pages/Gift'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arnold" element={<Arnold />} />
        <Route path="/lethabo" element={<Lethabo />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/contact" element={<Arnold />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
