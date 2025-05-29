import React from 'react';

function Experience() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Experience</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Software Engineer </h2>
        <p className="text-sm text-gray-500">Sep 2022 -Sep 2026</p>
        <ul className="list-disc list-inside">
          <li>Developed frontend applications using ReactJS and NextJS.</li>
          <li>Built RESTful APIs with NodeJS and Django.</li>
          <li>Managed databases including PostgreSQL, MySQL, and MongoDB.</li>
          <li>Handled UAT and production deployments on AWS EC2.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Specialist Programmer </h2>
        <p className="text-sm text-gray-500">Oct 2023 - Present</p>
        <ul className="list-disc list-inside">
          <li>Leading frontend development with ReactJS and NextJS.</li>
          <li>Designing and implementing backend services using NodeJS and Django.</li>
          <li>Overseeing database architecture and optimization.</li>
          <li>Deploying applications and services on AWS infrastructure.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
