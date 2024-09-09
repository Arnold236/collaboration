import React from 'react';
import ProfileImage from '../assets/imagesCarswell/profile.png';
import GifImange from '../assets/imagesCarswell/nature.gif';
import GifImange2 from '../assets/imagesCarswell/122Back.jpeg';

const Carswell = () => {
  return (
    <>
      <section className="bg-gray-300 rounded-sm p-4">
        <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4">
          
          <img
            src={ProfileImage} alt="profile"
             className="w-24 h-24 rounded-full object-cover"
          />
         
          <div>
            <h2 className="text-lg font-bold text-gray-900">Carswell Bonane</h2>
            <h3 className="text-gray-700">Makhamo</h3>
            <p className="text-gray-500">0723414358</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-300 rounded-sm p-4">
        <div className="bg-blue-100 rounded-sm shadow-md p-6">
          <h3 className="text-center font-bold text-lg mb-4">About Myself</h3>
          
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm " style={{backgroundImage:`url(${GifImange2})`, backgroundSize: 'cover' }}>
              <h4 className="font-bold text-gray-800">My Address:</h4>
              <p className="text-gray-600">soshanguve block L</p>
              <h1 className='text-black font-serif'>I will tell you more about specific location in private</h1>
            </div>

           
            <div className="bg-gray-400 hover:bg-slate-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
  <h4 className="font-bold text-xl text-gray-800 mb-2">Interests</h4>
  <p className="text-amber-300 leading-relaxed">
    I am deeply passionate about coding and always eager to engage in large, complex projects. 
    I find fulfillment in the challenge of long tasks and problem-solving. Music is my go-to 
    for clearing my mind when I encounter frustrations in my work. There's truly nothing more 
    exciting to me than the world of coding.
  </p>
</div>

            
            <div className="bg-white p-4 rounded-md shadow-sm " style={{backgroundImage:`url(${GifImange})`, backgroundSize: 'cover' }}>
              <h4 className="font-semibold text-gray-800">Favorite Foods:</h4>
              <p className="text-black font-bold p-6 align-bottom">I'm not too picky when it comes to food, I love anything that's tasty, as long as it's not sour. I enjoy foods that most people like, 
                and it's important to me that they are healthy too.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carswell;
