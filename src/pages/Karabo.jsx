import React from 'react'

const Karabo = () => {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-gradient-to-r from-blue-400 to-purple-600 flex flex-col items-center justify-center text-white">
        <div className="bg-gray-800 p-10 text-center rounded-t-lg shadow-lg w-4/5">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
            <img
              src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png"
              alt="about image"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl mb-2">Karabo Tebeila</h2>
          <h3 className="uppercase tracking-widest font-light mb-4">Software Engineer</h3>
        </div>
        <ul className="bg-gray-800 flex justify-center py-3 rounded-b-lg w-4/5 shadow-lg">
          <li className="bg-purple-600 text-white w-10 h-10 mx-2 rounded-full flex justify-center items-center text-xl transition-all duration-500 hover:bg-green-100 hover:text-black">
            <i className="fab fa-facebook-f"></i>
          </li>
          <li className="bg-purple-600 text-white w-10 h-10 mx-2 rounded-full flex justify-center items-center text-xl transition-all duration-500 hover:bg-green-100 hover:text-black">
            <i className="fab fa-twitter"></i>
          </li>
          <li className="bg-purple-600 text-white w-10 h-10 mx-2 rounded-full flex justify-center items-center text-xl transition-all duration-500 hover:bg-green-100 hover:text-black">
            <i className="fab fa-linkedin"></i>
          </li>
          <li className="bg-purple-600 text-white w-10 h-10 mx-2 rounded-full flex justify-center items-center text-xl transition-all duration-500 hover:bg-green-100 hover:text-black">
            <i className="fab fa-instagram"></i>
          </li>
        </ul>
      </div>

      <div className="bg-gray-800 flex flex-col items-center justify-center text-center text-white p-10">
        <h1 className="text-5xl uppercase mb-4">
          Hello<span className="text-purple-600">!</span>
        </h1>
        <h2 className="font-semibold mb-8">Here's who I am & what I do</h2>
        <div className="flex mb-8">
          <button className="btn bg-purple-600 text-white border-2 border-purple-600 hover:bg-transparent hover:border-white hover:text-white px-6 py-2 rounded-full mx-2 transition-all duration-500">
            Resume / CV
          </button>
          <button className="btn border-2 border-white hover:bg-purple-600 hover:border-purple-600 hover:text-white px-6 py-2 rounded-full mx-2 transition-all duration-500">
            Git Hub
          </button>
        </div>
        <div className="space-y-4 opacity-80">
          <p>Ever since I was a little boy I knew I had to do something great with my life, not only for me but for my community and if god allows it.. for humanity... which is why I chose to become a software enginner.</p>
          <p>I have recently gotten the priviledge to learn a lot of technologies in a short period of time, technologies like NodeJS, ReactJS, React Native, .Net and more!</p>
        </div>
        <div className="mt-8">
          <span className="text-sm">Made <span className="text-red-400">❤</span> by <a href="https://www.learningrobo.com/" className="text-purple-600 font-bold">Karabo</a></span>
        </div>
      </div>
    </div>
  )
}

export default Karabo