 import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Arnold from './pages/Arnold'
import Lethabo from './pages/Lethabo'
import Gift from './pages/Gift'
import Una from './pages/Unarine'
import Karabo from './pages/Karabo'
import Mpho from './pages/Mpho'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Carswell from './pages/Carswell'


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
        <Route path="/Unarine" element={<Una/>}/>
        <Route path="/mpho" element={<Mpho/>}/>
        <Route path="/Karabo" element={<Karabo/>}/>
        <Route path="/contact" element={<Arnold />} />
        <Route path="/carswel" element={<Carswell />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
