import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between gap-2 w-screen my-2 m-1'>
        <nav className='flex justify-between gap-2 p-5'>
            <Link to="/" className='justify-between mr-10 '>Home</Link>
            <Link to="#">about</Link>
            <Link to="#">contact</Link>
            <Link to="#">services</Link>
        </nav>
        <button className='border text-white border-b-white bg-red-500 rounded-lg p-2 hover:bg-sky-500'>get started</button>
    </div>
  )
}

export default Navbar