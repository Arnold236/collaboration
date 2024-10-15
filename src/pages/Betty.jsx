import React from 'react';

const Betty = () => {
    
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-white mb-4">Betty Sithole</h1>
      <h2 className="text-2xl text-yellow-200 mb-8">The Coolest Coder</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">About Myself</h3>
        <p className="text-gray-600 mb-4">
          An aspiring software developer who is enthusiastic about coding and enjoys finding solutions to complex problems.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills And Technologies</h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>C++</li>
          <li>JavaScript</li>
          <li>SQL</li>
          <li>TypeScript</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Interests</h3>
        <p className="text-gray-600 mb-4">
          When I am not coding, I am cooking. My passion for food preparation goes beyond basic meal-making and extends to exploring new flavors, techniques, and recipes.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Current Project</h3>
        <p className="text-gray-600 mb-4">
          I am currently working on the Day Care Smart System. A platform designed to streamline day-to-day operations, improve communication, and enhance the safety and well-being of children in a daycare environment.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect with Me</h3>
        <p className="text-gray-600 mb-4">
          Find me on <a href="https://github.com/Sitholeb" target="_blank" className="text-blue-500">GitHub</a> and <a href="https://linkedin.com/in/Sitholeb" target="_blank" className="text-blue-500">LinkedIn</a>.
        </p>
      </div>
    </div>
  );
}

export default Betty;

