import React from "react";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind CSS", level: 75 },
  { name: "TypeScript", level: 70 },
];

const Skills = () => (
  <div className="max-w-4xl mx-auto px-6 py-20">
    <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">Skills</h2>
    <div className="space-y-6">
      {skills.map(({ name, level }) => (
        <div key={name}>
          <div className="flex justify-between mb-1 text-gray-300">
            <span>{name}</span>
            <span>{level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded h-4">
            <div
              className="bg-cyan-400 h-4 rounded"
              style={{ width: `${level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
