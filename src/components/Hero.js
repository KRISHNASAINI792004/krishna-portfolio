import React, { useEffect, useState } from "react";

const words = ["Data Scientist", "Full Stack Developer", "Open Source Lover"];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let fullText = words[index];
      setText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? 80 : 150);

    return () => clearTimeout(timeout);
  }, [text, index, isDeleting]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-900">
      
      {/* 👤 Profile Image */}
      <img
        src="/test.JPG"
        alt="Krishna"
        className="w-40 h-40 rounded-full shadow-lg border-4 border-cyan-400 mb-6 object-cover"
      />

      <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4">
        Hi, I'm Krishna
      </h1>

      <h2 className="text-3xl md:text-4xl text-gray-300 mb-8 h-12">
        <span>{text}</span>
        <span className="border-r-2 border-cyan-400 animate-pulse ml-1"></span>
      </h2>

      <p className="max-w-xl text-gray-400">
        Passionate about building scalable web applications and interactive experiences.
      </p>

      <div className="mt-8 flex space-x-6 text-cyan-400 text-2xl">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37...z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5...z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
