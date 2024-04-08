import React from "react";

import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-intro">
        <p className="about-details">
          I am a passionate software engineer. I graduated in December 2023 from
          the University of Central Missouri, specializing in Computer Science,
          with a keen interest in web Development and Cloud Computing.
        </p>
        <p className="about-details">
          I have a year of experience as an associate software engineer at
          Accenture and six months of experience as a transaction risk
          investigator at Amazon. At Accenture, I worked as a backend developer
          writing efficient and scalable RESTful APIs using Java (Spring). I
          also wrote JUnit tests, automated scripts, and used Spring JDBC to
          perform CRUD operations on the database. I communicated and
          coordinated with the onsite team and provided daily status updates. At
          Amazon, I worked as a product authentication specialist evaluating
          documents, images, and other evidence to determine product
          authenticity. I conducted investigations and deep dives, identified
          trends and patterns, and used independent judgement, problem-solving,
          and analytical skills to eliminate bad actors and protect customers
          and sellers.
        </p>
        <p className="about-details">
          I am passionate about developing innovative and secure solutions that
          enhance user experience and satisfaction. I value teamwork,
          collaboration, and continuous learning, and I can bring diverse
          perspectives and experiences to the team.
        </p>
        <div className="about-details">
          <h3>What I'm good at</h3>
          <ul style={{ padding: "15px" }}>
            <li>Java</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Spring Boot</li>
            <li>React</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Microservices</li>
            <li>Amazon Web Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
