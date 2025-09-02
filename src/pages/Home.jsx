import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col my-10 p-5 justify-center items-center">
      <h1 className="text-3xl font-bold underline my-10">
        Unitac Dev Team
      </h1>
      <div className="flex flex-col gap-2">
        <Link className='text-2xl text-gray-500' to="/arnold">Arnold</Link>
        <Link className='text-2xl text-teal-500' to="/Bongani">Bongani</Link>
        <Link className='text-2xl text-violet-500' to="/Carswel">Carswel</Link>
        <Link className='text-2xl text-lime-500' to="/Gift">Gift</Link>
        <Link className='text-2xl text-red-500' to="/Karabo">Karabo</Link>
        <Link className='text-2xl text-black' to="/Lethabo">Lethabo</Link>
        <Link className='text-2xl text-green-500' to="/Mpho">Mpho</Link>
        <Link className='text-2xl text-sky-700' to="/Ntsako">Ntsako</Link>
        <Link className='text-2xl text-pink-500' to="/Priscilla">Priscilla</Link>
        <Link className='text-2xl text-blue-500' to="/Siya">Siya</Link>
        <Link className='text-2xl text-purple-400' to="/Unarine">Unarine</Link>
        <Link className='text-2xl text-orange-500' to="/betty">Betty</Link>
        <Link className='text-2xl text-blue-400' to="/Lisakhanya">Lisakhanya</Link>
        <Link className='text-2xl text-indigo-500' to="/Mukona">Mukona</Link>
        <Link className='text-2xl text-gray-600' to="/hlakaniphani">Hlakaniphani</Link>
      </div>
    </div>
  )
}

export default Home
