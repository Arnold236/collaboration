import React from 'react'

const Gift = () => {
    return (
        <div className="p-6 max-w-lg mx-auto bg-gray-100 shadow-lg rounded-lg">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-extrabold text-gray-800">Mamarara Gift</h1>
                <p className="text-md text-gray-600">Software engineer/Developer at UnitacSolution</p>
            </div>
            <div className="mb-8">
                <p className="text-gray-700">
                    I am proficient in Java, JavaScript, and Python, HTML, CSS and currently expanding my skills in React  and Spring Boot.
                </p>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Skills & Technologies</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Java</strong> - Experienced in backend development with Spring Boot.</li>
                    <li><strong>JavaScript</strong> - Currently learning React</li>
                    <li><strong>Python</strong> - I can build a fully functioning web app using Django.</li>
                    <li><strong>React Native</strong> - Currently learning to build cross-platform mobile applications.</li>
                    <li><strong>PostgreSQL</strong> - Experience with database design and management.</li>
                </ul>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Current Projects</h3>
                <p className="text-gray-700">
                    I am currently working on the SafeAuth app, it is a password manager. I am building this to learn more about security in software development.
                </p>
            </div>
        </div>
    );
};

export default Gift