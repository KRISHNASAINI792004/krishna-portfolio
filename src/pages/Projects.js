import React from "react";

const projects = [
  {
    title: "Project One",
    description: "A React app that does amazing things.",
    tech: ["React", "Tailwind", "Node.js"],
    link: "#",
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with seamless UX.",
    tech: ["Next.js", "Stripe", "MongoDB"],
    link: "#",
  },
  {
    title: "Project Three",
    description: "Portfolio website with dark theme and animations.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    link: "#",
  },
];

const Projects = () => (
  <div className="max-w-6xl mx-auto px-6 py-20">
    <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">Projects</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map(({ title, description, tech, link }) => (
        <a
          key={title}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 rounded-lg p-6 hover:bg-cyan-700 transition-shadow shadow-md flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tech.map((techItem) => (
              <span
                key={techItem}
                className="text-cyan-400 text-xs font-medium border border-cyan-400 rounded px-2 py-1"
              >
                {techItem}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Projects;
