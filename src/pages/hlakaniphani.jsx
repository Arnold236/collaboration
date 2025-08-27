const Hlakaniphani = () => {
  return (
    <div className="grid grid-cols-2 p-5">
      {/* Left Side Content */}
      <div className="left-content space-y-4">
        <div className="mb-4">
          <p className="text-lg font-semibold">
            Name: <span className="text-gray-600">Hlakaniphani</span>
          </p>
          <p className="text-lg font-semibold">
            Role: <span className="text-gray-600">Frontend Developer Intern at Unitac Solutions</span>
          </p>
        </div>

        <div>
          <h2 className="font-semibold mb-5 text-2xl">Skills and Technologies</h2>

          <div>
            <h2 className="font-semibold">Frontend Development</h2>
            <p className="text-gray-600">
              Skills: JavaScript, React, HTML5, CSS3, Tailwind CSS
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Programming</h2>
            <p className="text-gray-600">
              Skills: Python, Java, JEE Framework, Flask
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Creative Tools</h2>
            <p className="text-gray-600">Skills: Adobe Premiere Pro (Video Editing)</p>
          </div>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="right-content">
        <h2 className="font-semibold">ABOUT ME</h2>
        <p className="text-gray-800">
          I am a Frontend Developer Intern at Unitac Solutions with a passion
          for building clean, responsive, and user-friendly web applications.
          I enjoy solving problems with code and combining design with
          functionality. I’m also skilled in programming, databases, and
          creative media like video editing.
        </p>
      </div>
    </div>
  );
};

export default Hlakaniphani;
