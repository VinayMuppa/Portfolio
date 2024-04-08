// IMPORT LIBRARIES

import React from "react";

// IMPORT STYLES

import "../styles/resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="download-section">
        <a href="/resume.pdf" className="resume-download">
          Download CV
        </a>
      </div>

      <div className="timeline-section resume-experience">
        <div className="heading-section">
          <div className="heading">EXPERIENCE</div>
        </div>

        <div className="timeline-container">
          <ul
            className="vertical-scrollable-timeline"
            id="vertical-scrollable-timeline"
          >
            <div className="list-progress">
              <div className="inner"></div>
            </div>

            <li className="resume-item active">
              <div className="title">
                <a
                  href="https://www.linkedin.com/company/accenture/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  Accenture, Hyderabad, India
                </a>
              </div>

              <div className="sub-title">Associate Software Engineer</div>

              <div className="sub-sub-title">June 2021 - June 2022</div>

              <div className="content">
                <p>
                  <b>Skills</b>: (Java, Spring Boot, MySQL, React, Kubernetes,
                  Cloud, Distributed Systems)
                </p>

                <p>
                  {" "}
                  - Worked as a backend developer writing efficient and scalable
                  RESTful APIs using java (Spring){" "}
                </p>

                <p>
                  {" "}
                  - Extensively worked with Spring Data JPA to implement a
                  module and used business logic to perform CRUD operations on
                  the database{" "}
                </p>

                <p>
                  {" "}
                  - Developed Hibernate ORM mappings using Hibernate and JPA
                  annotations to map java classes to database tables{" "}
                </p>

                <p>
                  {" "}
                  - Developed Single Page Applications using ReactJS components,
                  and JavaScript{" "}
                </p>

                <p>
                  {" "}
                  - Design and development of Microservices using Spring Boot,
                  Java, Kafka, and other Java/J2EE development technologies.{" "}
                </p>

                <p>
                  {" "}
                  - Involved in writing the Unit test cases for code quality and
                  automated scripts using Junit, Mockito and PowerMockito
                </p>

                <p>
                  {" "}
                  - Experience in Kubernetes, EKS, ECS, Docker, Helm chart, and
                  Fargate orchestration technologies.
                </p>
              </div>

              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              <div className="title">
                <a
                  href="https://www.linkedin.com/company/amazon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  Amazon, Hyderabad, India
                </a>
              </div>

              <div className="sub-title">Transaction Risk Investigator</div>

              <div className="sub-sub-title">November 2020 - April 2021</div>

              <div className="content">
                <p>
                  {" "}
                  - Worked as a product authentication specialist evaluating
                  documents, images, and other evidence to determine product
                  authenticity{" "}
                </p>

                <p>
                  {" "}
                  - Conducted investigations and deep dives (including
                  open-source web investigations and phone calls) to solve the
                  challenging cases{" "}
                </p>

                <p>
                  {" "}
                  - Identified trends and patterns to drive improvements in
                  policies, decision-making, and tools{" "}
                </p>

                <p>
                  {" "}
                  - Independent Judgement, Problem-solving and analytical skills
                  were used to eliminate bad actors and protect our customers
                  and sellers{" "}
                </p>
              </div>

              <div className="pointer"></div>
            </li>
          </ul>
        </div>
      </div>

      <div className="timeline-section resume-education">
        <div className="heading-section">
          <div className="heading">EDUCATION</div>
        </div>

        <div className="timeline-container">
          <ul
            className="vertical-scrollable-timeline"
            id="vertical-scrollable-timeline"
          >
            <div className="list-progress">
              <div className="inner"></div>
            </div>

            <li className="resume-item">
              <div className="title">
                <a
                  href="https://www.ucmo.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  University of Central Missouri, Lee's Summit, MO, USA
                </a>
              </div>

              <div className="sub-title">
                Master of Science,{" "}
                <a
                  href="https://cse.ucsd.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  Computer Science
                </a>
              </div>

              <div className="sub-sub-title">August 2022 - December 2023</div>

              <div className="content">
                {/* <p>
                  <b>CGPA</b>: 3.4/4.0
                </p> */}
              </div>

              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              <div className="title">
                <a
                  href="https://www.bitmesra.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  Vignan's University, Andhra Pradesh, India
                </a>
              </div>

              <div className="sub-title">
                Bachelor of Technology,{" "}
                <a
                  href="https://www.vignan.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  Electronics and Communication Engineering
                </a>
              </div>

              <div className="sub-sub-title">July 2016 - June 2020</div>

              {/* <div className="content">
                
                
              </div> */}

              <div className="pointer"></div>
            </li>
          </ul>
        </div>
      </div>

      <div className="timeline-section resume-experience">
        <div className="heading-section">
          <div className="heading">PROJECTS</div>
        </div>

        <div className="timeline-container">
          <ul
            className="vertical-scrollable-timeline"
            id="vertical-scrollable-timeline"
          >
            <div className="list-progress">
              <div className="inner"></div>
            </div>

            <li className="resume-item">
              <div className="title">
                Ecommerce Application
                <a
                  href="https://github.com/VinayMuppa/angular-ecommerce"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="resume-links"
                  style={{ padding: "10px", color: "#0000EE" }}
                >
                  (Github Link)
                </a>
              </div>

              <div className="content">
                <p>
                  <b>Tech Stack</b>: (Typescirpt, Angular, Bootstrap, Spring
                  Boot, Okta, Stripe)
                </p>

                <p>
                  {" "}
                  - Developed a full-stack web application using Spring Boot and
                  Angular. A web application where one can create an account and
                  order the different items listed on the application{" "}
                </p>

                <p>
                  {" "}
                  - Users can search for a product and get a detailed
                  description of the product. Enabled Form validation and has
                  Shopping cart functionality to add, remove, and manage
                  selected items{" "}
                </p>

                <p>
                  {" "}
                  - Enabled Okta integration for secure user authentication and
                  authorization{" "}
                </p>

                <p> - Order History to track previous orders </p>

                <p> - Enabled Secure Payment processing with Stripe </p>
              </div>

              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              <div className="title">
                Travel Companion API
                <a
                  href="https://github.com/VinayMuppa/Travel-Companion"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="resume-links"
                  style={{ padding: "10px", color: "#0000EE" }}
                >
                  (Github Link)
                </a>
              </div>

              <div className="content">
                <p>
                  <b>Tech Stack</b>: (Java, Spring Boot, JavaMailSender,
                  MongoDB)
                </p>
                <p>
                  {" "}
                  - Developed a REST API where passengers can register and be
                  able to connect with like-minded travelers on exciting
                  journeys{" "}
                </p>

                <p>
                  {" "}
                  - Used JavaMailSender to send an email when a new user gets
                  registered in the applicaiton{" "}
                </p>

                <p>
                  {" "}
                  - The application helps you discover compatible companions
                  based on shared interests, destinations, and travel dates.{" "}
                </p>
              </div>

              <div className="pointer"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
