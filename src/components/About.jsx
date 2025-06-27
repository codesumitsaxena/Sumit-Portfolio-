import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import IconSlider from "./IconSlider";
import Footer from "./Footer";

const data = [
  {
    icon: <i className="bi bi-search"></i>,
    heading: "01. Research",
    para: "Gathering insights and understanding goals to create a strong project foundation.",
  },
  {
    icon: <i className="bi bi-pencil"></i>,
    heading: "02. Wireframing",
    para: "Structuring layouts and defining elements to enhance user experience.",
  },
  {
    icon: <i className="bi bi-code-slash"></i>,
    heading: "03. Development",
    para: "Turning wireframes into functional, responsive, and dynamic websites.",
  },
  {
    icon: <i className="bi bi-rocket-takeoff"></i>,
    heading: "04. Launch & Iterate",
    para: "Deploying, testing, and refining to ensure a seamless user experience.",
  },
];

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {/* Intro Section */}
      <div
        className="container px-3 d-flex flex-column align-items-lg-end gap-2 my-5"
        data-aos="fade-left"
      >
        <h1
          className="about-heading fw-bold fs-sm-lg text-center text-lg-end"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          {" "}
          I'm a Frontend Developer with passion to create{" "}
          <span
            className="span-heading"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Interactive Designs
          </span>
        </h1>
        <p
          className="about-para text-center text-lg-end"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          I'm Sumit Saxena, a passionate frontend developer driven by a love for
          crafting clean, intuitive, and engaging web interfaces. I specialize
          in merging design with functionality to deliver smooth, responsive,
          and user-focused digital experiences that not only look great but also
          feel natural to use.
        </p>
        <a
          className="text-decoration-none rounded-pill arrow-btn ms-3"
          href="https://drive.google.com/file/d/1LF53AYoPfn5h2z8h2MRW1bnB-ASEw97A/view"
          data-aos="zoom-in"
          download
          data-aos-delay="600"
        >
          My Resume
        </a>
      </div>

      <hr />

      {/* Icon Slider */}
      <IconSlider className="my-5" />

      {/* Development Process */}
      <div className="container  my-5 development" data-aos="fade-up">
        <h5
          className="fw-bold arrowhead"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <i className="bi bi-asterisk me-2"></i>Steps I follow
        </h5>
        <h2 data-aos="fade-up" data-aos-delay="200">
          My Development Process
        </h2>
        <p data-aos="fade-up" data-aos-delay="300">
          I have built projects that deliver seamless and engaging digital
          experiences.
        </p>

        <div className="container my-5">
          <div className="row g-4">
            {data.map((item, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                key={index}
                data-aos="flip-up"
                data-aos-delay={index * 200 + 100}
              >
                <div className="card-container p-4 rounded-3">
                  <h5 className="card-icon">{item.icon}</h5>
                  <h5>{item.heading}</h5>
                  <p>{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="container px-4 my-5" data-aos="fade-right">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h5
              className="fw-bold arrowhead"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <i className="bi bi-asterisk me-2"></i>Education
            </h5>
            <h2 data-aos="fade-right" data-aos-delay="200">
              My Education
            </h2>
            <p data-aos="fade-up" data-aos-delay="300">
              Learning never exhausts the mind; it fuels innovation and growth.
            </p>
          </div>

          <div className="col-lg-6 ps-lg-5">
            {[
              {
                degree: "B.Tech in Computer Science",
                institution:
                  "Prem Prakash Gupta Institute of Engineering & Management",
                year: "2023",
              },
              {
                degree: "Senior Secondary (12th)",
                institution: "Jain Bal Vidya Mandir Inter College",
                year: "2019",
              },
              {
                degree: "Secondary (10th)",
                institution: "Jain Bal Vidya Mandir Inter College",
                year: "2017",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center border-bottom py-3"
                data-aos="fade-left"
                data-aos-delay={index * 150 + 100}
              >
                <div>
                  <h6 className="mb-1 fw-semibold">{item.degree}</h6>
                  <p className="mb-0 text-muted">{item.institution}</p>
                </div>
                <div className="d-flex align-items-center">
                  <span className="fw-semibold text-dark">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="container px-4 my-5" data-aos="fade-left">
        <div className="row my-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h5
              className="fw-bold arrowhead"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <i className="bi bi-asterisk me-2"></i>Experience
            </h5>
            <h2 data-aos="fade-left" data-aos-delay="200">
              My Experience
            </h2>
            <p data-aos="fade-left" data-aos-delay="300">
              From managing viral campaigns as a Campaign Manager in a meme
              marketing agency to building responsive interfaces as a Frontend
              Developer Intern — my journey blends creativity, strategy, and
              code. Each role has sharpened both my tech and communication
              skills.
            </p>
          </div>

          <div className="col-lg-6 ps-lg-5">
            {[
              {
                position: "Frontend Developer Intern",
                company: "AyanshTech Solution",
                year: "19 Apr 2025 – Present",
              },
              {
                position: "Campaign Manager",
                company: "Marque Berry, Gurgaon",
                year: "Oct 2024 – Jan 2025",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center border-bottom py-3"
                data-aos="fade-left"
                data-aos-delay={index * 150 + 100}
              >
                <div>
                  <h6 className="mb-1 fw-semibold">{item.position}</h6>
                  <p className="mb-0 text-muted">{item.company}</p>
                </div>
                <div className="d-flex align-items-center">
                  <span className="fw-semibold text-dark">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default About;
