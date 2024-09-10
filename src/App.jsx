 import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Arnold from './pages/Arnold'
import Lethabo from './pages/Lethabo'
import Bongani from './pages/Bongani'
import Gift from './pages/Gift'
import Carswel from './pages/Carswel'
import Una from './pages/Unarine'
import Karabo from './pages/Karabo'
import Mpho from './pages/Mpho'
import Siya from './pages/Siya'
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
        <Route path="/bongani" element={<Bongani />} />
        <Route path="/lethabo" element={<Lethabo />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/Carswel" element={<Carswel />} />
        <Route path="/Unarine" element={<Una/>}/>
        <Route path="/mpho" element={<Mpho/>}/>
        <Route path="/Karabo" element={<Karabo/>}/>
        <Route path="/Siya" element={<Siya/>}/>
        <Route path="/contact" element={<Arnold />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
