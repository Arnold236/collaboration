//import image from '/src/assets/images/mpho.jpg'
const Mpho = () => {
  return (
    <div className="grid grid-cols-2 p-5">
        <div className="left-content space-y-4">
        <div className="mb-4">
            <p className='text-1g font-semibold'>Name : <span className='text-gray-600'>Radzilani Mpho</span></p>
            <p className='text-1g font-semibold'>Role:<span className='text-gray-600'>jnr Software developer</span></p>
        </div>
        <div>
            <h2 className="font-semibold mb-5 text-2xl mr-2">Skills and Technologies</h2>
          <div>
            <h2 className='font-semibold'>graphic design</h2>
           <p className='text-gray-600'> Skills: Photoshop</p>
          </div>
           <div>
            <h2 className='font-semibold'>Animation </h2>
            <p className='text-gray-600'>Skills: Adobe After Effects, Blender, Unity for 2D/3D animation</p>
           </div>
           <div>
            <h2 className='font-semibold'>software developer</h2>
            <p className='text-gray-600'>Skills:React,nodejs,spring</p>
           </div>
           </div>
        </div>
        <div className="right-content">
            <h2 className="font-semibold">ABOUT ME </h2>
            <p className='text-gray-800'>I'm a final-year student studying Multimedia Computing<br></br> at Tshwane University of Technology.<br></br> I'm a 
             creative problem-solver who works well in teams.<br></br> I have skills in programming, web development, 
             and design</p>
             <p className=''>
                <img src={image} alt="MPhO" className='w-32 h-32 rounded-none mb3'/>
             </p>
        </div>
      
    </div>
  )
}

export default Mpho
