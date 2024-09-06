import React from 'react';
import kotlinLogo from '../assets/unaImages/kotlin.jpg'; // Adjust the path as necessary
import javaLogo from '../assets/unaImages/java.jpg';
import postLogo from '../assets/unaImages/post.jpg';
import pythonLogo from '../assets/unaImages/phython.jpg';
import jsLogo from '../assets/unaImages/js.jpg';

const Una = () => (
    <div
        className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg transition-transform duration-300"
    >
        <div className="flex justify-center items-center ">
            <h1 className="text-3xl font-bold" style={{ color: '#391337' }}>
                Unarine Hope Netshizwa
            </h1>
            </div>
        <h2 className="flex justify-center items-center text-l font-bold mb-7" style={{ color: '#c2a8bb' }}> Software Developer Intern</h2>
      
        <p>
            I'm Una, a computer science student and an intern at Unitac Solutions. What excites me the most about technology is its limitless potential. It's a field where there are no boundaries—if I can imagine or dream of something, I know I have the tools to bring it to life. Being able to turn creative ideas into reality is what drives my passion for tech, and every day I’m learning new ways to push those boundaries even further.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-4">
            <img
                src={kotlinLogo}
                alt="Kotlin Logo"
                className="w-20 h-20 rounded-full"
                style={{ border: '2px solid #c9c9ba' }} // Custom border color
            />
            <img
                src={javaLogo}
                alt="Java Logo"
                className="w-20 h-20 rounded-full"
                style={{ border: '2px solid #c9c9ba' }} // Custom border color
            />
            <img
                src={postLogo}
                alt="Postgres Logo"
                className="w-20 h-20 rounded-full"
                style={{ border: '2px solid #c9c9ba' }} // Custom border color
            />
            <img
                src={pythonLogo}
                alt="Python Logo"
                className="w-20 h-20 rounded-full"
                style={{ border: '2px solid #c9c9ba' }} // Custom border color
            />
            <img
                src={jsLogo}
                alt="JS Logo"
                className="w-20 h-20 rounded-full"
                style={{ border: '2px solid #c9c9ba' }} // Custom border color
            />
            <h2 className="text-l font-bold mt-8 text-center">...And more</h2>
        </div>
    </div>
)

export default Una;
