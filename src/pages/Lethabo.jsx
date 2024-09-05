import React from 'react';

const Lethabo = () => {
    return (
        <div className="p-4 max-w-md mx-auto bg-white shadow-md">
            <div className="flex items-center mb-4">
                <h1 className="text-xl font-bold">Lethabo Rabutla</h1>
            </div>
            <div>
                <p className="mb-6">
                    I am a Software Developer at UnitacSolution. I am improving my skills in React Native, Node.js, Python, and MySQL, working to become a better developer.
                </p>
            </div>
            <div>
                <h2 className="text-lg font-bold mb-3">Technology Stack</h2>
                <table className="w-full border text-left">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="border p-2">Technology</th>
                            <th className="border p-2">Proficiency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2">React Native</td>
                            <td className="border p-2">Improving</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Node.js</td>
                            <td className="border p-2">Improving</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Python</td>
                            <td className="border p-2">Improving</td>
                        </tr>
                        <tr>
                            <td className="border p-2">MySQL</td>
                            <td className="border p-2">Improving</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Lethabo;
