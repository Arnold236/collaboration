import React from 'react';

const Mukona = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen p-8">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-4xl font-extrabold text-blue-900 mb-2">Nekhubvi Mukona</h1>
                <p className="text-lg text-gray-600 mb-4">Final Year Computer Science Student | Software Developer Intern</p>
                <p className="text-gray-700 leading-relaxed">
                    I am a final year student at Tshwane University of Technology and an intern at Unitac Solution.
                    I enjoy solving real-world problems through coding and see challenges as opportunities to grow.
                    My goal is to improve my skills and build software that makes a positive impact.
                </p>
            </div>

            {/* Skills Section */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                {/* Backend */}
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                    <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">Backend Development</h2>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                        <li><strong>Java & JEE</strong> – Core backend development.</li>
                        <li><strong>Spring Boot</strong> – Building scalable services.</li>
                        <li><strong>MySQL & PostgreSQL</strong> – Database design and management.</li>
                    </ul>
                </div>

                {/* Frontend */}
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                    <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">Frontend Development</h2>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                        <li><strong>HTML & CSS</strong> – Clean and responsive layouts.</li>
                        <li><strong>Bootstrap & Tailwind</strong> – Styling and UI frameworks.</li>
                        <li><strong>React.js & React Native</strong> – Modern web and mobile apps.</li>
                        <li><strong>Node.js</strong> – Server-side JavaScript applications.</li>
                    </ul>
                </div>
            </div>

            {/* Current Focus */}
            <div className="bg-blue-900 text-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Current Focus</h2>
                <p className="text-lg leading-relaxed">
                    At Unitac Solution, I am learning and working with Node.js, React.js, React Native,
                    and Tailwind CSS while applying my background in Java and Spring Boot.
                    This mix of backend and frontend skills is helping me grow into a full-stack developer
                    who can take on real-world projects with confidence.
                </p>
            </div>
        </div>
    );
};

export default Mukona;