import React, { useEffect, useState } from "react";

const words = ["Data Scientist", "Full Stack Developer", "Open Source Lover"];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = words[index];
    const timeout = setTimeout(() => {
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
      {/* ✅ Profile Image */}
      <img
        src={`${process.env.PUBLIC_URL}/krsna.jpg`}
        alt="Krishna"
        className="w-64 h-64 rounded-full shadow-lg border-4 border-cyan-400 mb-6 object-cover"
      />

      <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4">
        Hi, I'm Krishna Saini
      </h1>

      <h2 className="text-3xl md:text-4xl text-gray-300 mb-8 h-12">
        <span>{text}</span>
        <span className="border-r-2 border-cyan-400 animate-pulse ml-1"></span>
      </h2>

      <p className="max-w-xl text-gray-400">
        Passionate about building scalable web applications and interactive experiences.
      </p>

      <div className="mt-8 flex space-x-6 text-cyan-400 text-2xl">
        {/* ✅ GitHub Link */}
        <a
          href="https://github.com/krishnasaini792004"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0.5C5.5 0.5 0.5 5.5 0.5 12C0.5 17 3.9 21.3 8.4 22.8C8.9 22.9 9.1 22.6 9.1 22.3V20.3C5.9 21 5.2 18.9 5.2 18.9C4.7 17.7 4 17.4 4 17.4C3 16.8 4.1 16.8 4.1 16.8C5.2 16.9 5.8 17.9 5.8 17.9C6.8 19.6 8.4 19.1 9.1 18.8C9.2 18 9.5 17.4 9.9 17.1C7.2 16.8 4.4 15.8 4.4 11.3C4.4 10.1 4.8 9.2 5.5 8.5C5.4 8.2 5 7 5.6 5.3C5.6 5.3 6.6 5 9.1 6.7C10.1 6.4 11.1 6.3 12.1 6.3C13.1 6.3 14.1 6.4 15.1 6.7C17.6 5 18.6 5.3 18.6 5.3C19.2 7 18.8 8.2 18.7 8.5C19.4 9.2 19.8 10.1 19.8 11.3C19.8 15.8 17 16.8 14.3 17.1C14.8 17.5 15.2 18.3 15.2 19.5V22.3C15.2 22.6 15.4 22.9 15.9 22.8C20.4 21.3 23.8 17 23.8 12C23.5 5.5 18.5 0.5 12 0.5Z" />
          </svg>
        </a>

        {/* ✅ LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/krishna-saini-a38253260"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5C1.9 5.5 1 4.6 1 3.5C1 2.4 1.9 1.5 3 1.5C4.1 1.5 4.98 2.4 4.98 3.5ZM0 8.5H6V24H0V8.5ZM9 8.5H14.5V10.5H14.6C15.3 9.2 17 8 19.3 8C24 8 24 11.2 24 15.3V24H18V16.1C18 14.3 18 11.9 15.6 11.9C13.2 11.9 13 13.8 13 16V24H9V8.5Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
