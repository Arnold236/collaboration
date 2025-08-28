import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techStack = [
  { name: "Java", level: "Advanced" },
  { name: "Python", level: "Beginner" },
  { name: "Kotlin", level: "Beginner" },
  { name: "PHP", level: "Advanced" },
  { name: "Laravel", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "React.js", level: "Advanced" },
  { name: "Express.js", level: "Intermediate" },
  { name: "MySQL", level: "Intermediate" },
  { name: "Git & GitHub", level: "Proficient" },
];

const funFacts = [
  "Coffee enthusiast – code runs smoother with caffeine! (highkey wish that was true)",
  "Tried coding blindfolded once, lol I'd love to not talk about it.",
  "I love debugging more than pizza (It's the other way around)",
  "I get really excited when code works first try.",
  "I secretly talk to my code sometimes, especially when it goes opposite ways, like 'Chelsea come on now!'-that's a Tiktok reference, senior.",
  "My favourite colour is blue 💙",
];

const emojis = ["💙","🎉", "🚀", "✨", "💻", "😍", "🌈"];

const Lisakhanya = () => {
  const [clicks, setClicks] = useState([]);
  const [confetti, setConfetti] = useState([]);

  const handleClick = (e) => {
    //Floating emoji
    const newEmoji = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    };
    setClicks((prev) => [...prev, newEmoji]);
    setTimeout(() => {
      setClicks((prev) => prev.filter((c) => c.id !== newEmoji.id));
    }, 1000);

    //Confetti
    const confettiPieces = Array.from({ length: 30 }).map(() => ({
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
      color: `hsl(${Math.random() * 360}, 80%, 60%)`,
      size: Math.random() * 8 + 4,
      rotate: Math.random() * 360,
    }));
    setConfetti((prev) => [...prev, ...confettiPieces]);
    setTimeout(() => {
      setConfetti((prev) => prev.filter((c) => !confettiPieces.includes(c)));
    }, 1500);
  };

  //Stars
  const [stars, setStars] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      setStars((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          opacity: Math.random(),
        },
      ]);
      if (stars.length > 50) setStars((prev) => prev.slice(1));
    }, 300);
    return () => clearInterval(interval);
  }, [stars]);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 flex flex-col items-center justify-center p-6 space-y-8 relative overflow-hidden"
      onClick={handleClick}
    >
      {/*Stars*/}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
        />
      ))}

      {/*Emojis*/}
      <AnimatePresence>
        {clicks.map((c) => (
          <motion.span
            key={c.id}
            initial={{ opacity: 1, y: 0, scale: 0 }}
            animate={{ y: -80, opacity: 0, scale: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ position: "absolute", left: c.x, top: c.y, pointerEvents: "none" }}
          >
            {c.emoji}
          </motion.span>
        ))}
      </AnimatePresence>

      {/* Confetti*/}
      <AnimatePresence>
        {confetti.map((c) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 1, y: 0, rotate: c.rotate }}
            animate={{ y: 200 + Math.random() * 200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: c.x,
              top: c.y,
              width: c.size,
              height: c.size,
              backgroundColor: c.color,
            }}
          />
        ))}
      </AnimatePresence>

      {/*About Card*/}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-3xl shadow-2xl max-w-3xl w-full text-center border-2 border-indigo-200 cursor-pointer hover:scale-105 transform transition"
      >
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-3">
          Lisakhanya Dyosi
        </h1>
        <p className="text-gray-700 mb-4 text-lg">
          Hi I’m <span className="font-semibold text-pink-600">Lisa</span>, a
          fun-loving software developer intern. I enjoy building scalable,
          user-friendly applications and sprinkling some personality in my code.
        </p>
        <motion.p
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="text-indigo-500 font-medium cursor-pointer"
        >
          Click anywhere for confetti & emojis!
        </motion.p>
      </motion.div>

      {/*Tech Stack*/}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            className="bg-gradient-to-br from-indigo-300 to-pink-300 p-5 rounded-2xl shadow-lg text-center cursor-pointer border border-indigo-400"
          >
            <h3 className="font-bold text-lg text-white">{tech.name}</h3>
            <p className="text-white/90">{tech.level}</p>
          </motion.div>
        ))}
      </motion.div>

      {/*Career Vision*/}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-2xl shadow-xl p-6 max-w-3xl w-full border-l-8 border-pink-400"
      >
        <h2 className="text-2xl font-semibold text-pink-600 mb-2">Career Vision</h2>
        <p className="text-gray-700">
          I aim to keep improving my skills in modern web technologies,
          collaborate with other developers, and eventually lead
          projects where I can design innovative solutions that make a
          difference in society. I also believe coding should be fun, so I sprinkle
          creativity wherever I can!
        </p>
      </motion.div>

      {/*Fun Facts*/}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="bg-blue-200 p-6 rounded-3xl shadow-2xl max-w-3xl w-full"
      >
        <h2 className="text-2xl font-semibold text-teal-700 mb-3">Fun Facts</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          {funFacts.map((fact, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.05, x: 5 }}
              className="cursor-pointer"
            >
              {fact}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Lisakhanya;
