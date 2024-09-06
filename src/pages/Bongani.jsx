import React from 'react';

const Bongani = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            {/* Introduction Section */}
            <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Bongani Maduna</h1>
                <p className="text-gray-600 mb-4">Software Developer at UnitacSolution</p>
                <p className="text-gray-700">
                    I am focused on upskilling in various backend and frontend technologies, including Java (Spring Boot), Python (Flask), JavaScript (Node.js and React), MySQL, Git, APIs, and GUI development. My aim is to broaden my expertise and take on more complex projects in software development.
                </p>
            </div>

            {/* Skills & Technologies Section */}
            <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Equipment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700">Backend Development</h3>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                            <li><strong>Java</strong> - Spring Boot for robust backend applications.</li>
                            <li><strong>Python</strong> - Flask for lightweight and efficient backend services.</li>
                            <li><strong>APIs</strong> - RESTful API design and integration.</li>
                            <li><strong>MySQL</strong> - Database design, management, and queries.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700">Frontend & GUI Development</h3>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                            <li><strong>JavaScript</strong> - React for building modern web interfaces.</li>
                            <li><strong>GUI Development</strong> - PyQt for cross-platform desktop applications.</li>
                            <li><strong>Version Control</strong> - Git for collaborative development and version management.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Current Projects Section */}
            <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Current Projects</h2>
                <p className="text-gray-700">
                    I am currently involved in projects that focus on backend development with Java (Spring Boot) and Python (Flask), creating user-friendly web applications using React, and enhancing database management with MySQL. Additionally, I am developing desktop applications with PyQt, focusing on intuitive GUI designs.
                </p>
            </div>
        </div>
    );
};

export default Bongani;
