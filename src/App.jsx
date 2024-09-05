import { useState } from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Arnold from './pages/Arnold'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Mpho from './pages/Mpho';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arnold" element={<Arnold />} />
        <Route path='/mpho' element={<Mpho/>}/>
        <Route path="/contact" element={<Arnold />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
