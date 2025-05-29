import React, { useEffect, useState } from "react";

const roles = ["Data Scientist", "Full Stack Developer", "Open Source Lover"];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = roles[index];
      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 text-center">
      {/* 👤 Profile Image */}
      <img
        src="/krsna.jpg"
        alt="Krishna Saini"
        className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-cyan-400 shadow-2xl mb-6"
      />

      <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4">
        Hi, I'm Krishna Saini
      </h1>

      <h2 className="text-2xl md:text-4xl text-gray-300 mb-6 h-12">
        <span>{text}</span>
        <span className="ml-1 border-r-2 border-cyan-400 animate-pulse"></span>
      </h2>

      <p className="max-w-2xl text-gray-400 text-lg">
        I love building dynamic, engaging user experiences with modern technologies. Let’s build something amazing!
      </p>

      <div className="mt-8 flex gap-8 text-cyan-400 text-2xl">
        <a
          href="https://github.com/krishnasaini792004"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/krishna-saini-a38253260/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Hero;
