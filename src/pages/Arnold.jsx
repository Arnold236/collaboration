import React from 'react'

const Arnold = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
      <div className="flex flex-col justify-between space-y-3">
        <p className="text-lg font-semibold">Name: <span className="text-gray-700">Arnold Skhu</span></p>
        <p className="text-lg font-semibold">Role: <span className="text-gray-700">Software Engineer</span></p>
        <div className="">
            <h2 className=' text-xl my-5 font-bold'  > Experience in:</h2>
      
            <li>NodeJS</li>
            <li>React</li>
            <li>Angular</li>
            <li>Kafka</li>
        </div>
      </div>
      <div className="md:ml-10">
        <h2 className="text-2xl font-bold text-center mb-3">About</h2>
        <p className="text-gray-600">
          I have over 10 years of experience in development, with advanced knowledge in designing and building applications.
        </p>
        <img src="" alt="My picture" className='w-full h-full mt-5' />
      </div>
    </div>
  )
}

export default Arnold
