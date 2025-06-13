import React, { useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import chaiImg from '../assets/Chai sutta bar img.png'

import Footer from './Footer';
import { ProjectArrow } from './MultiComp';

const ProjectData = [
  {
    heading: "Rejouice (01)",
    para: "Developed a pixel-perfect UI clone of Rejouice.com, featuring GSAP animations, scroll-trigger effects and Lenis smooth scrolling.",
    arrow: <ProjectArrow />,
    img: "https://bootstrapmade.com/content/templatefiles/iLanding/iLanding-bootstrap-website-template.webp",
    viewlink: "https://github.com/codesumitsaxena/chai_sutta_bar.git",
    viewLive: "https://raw.githack.com/codesumitsaxena/chai_sutta_bar/main/index.html"
  },
  {
    heading: "Chai Sutta Bar",
    para: "A fully responsive multi-page clone of the popular Chai Sutta Bar website, built with HTML, CSS, Bootstrap, and JavaScript. Designed to replicate the original site’s look and feel with smooth navigation and mobile-friendly layout.",
    arrow: <ProjectArrow />,
    img: chaiImg,
    viewlink: "https://github.com/codesumitsaxena/chai_sutta_bar.git",
    viewLive: "https://raw.githack.com/codesumitsaxena/chai_sutta_bar/main/index.html"
  },
  {
    heading: "JavaScript Game",
    para: "Created an engaging JavaScript quiz game with dynamic scoring, countdown timer, and real-time feedback.",
    arrow: <ProjectArrow />,
    img: "https://bootstrapmade.com/content/templatefiles/Gp/Gp-bootstrap-website-template.webp",
  },
  {
    heading: "React Task Manager",
    para: "Developed a responsive task manager app using React, hooks, and localStorage integration for persistent task tracking.",
    arrow: <ProjectArrow />,
    img: "https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template.webp",
  },
];

function Project() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 120,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="container p-4 my-5">
      <h5
        className="fw-bold arrowhead"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <i className="bi bi-asterisk me-2"></i>My Work
      </h5>
      <h2 data-aos="fade-left" data-aos-delay="200">Projects</h2>
      <p data-aos="fade-left" data-aos-delay="300">
        Explore my projects—where design meets functionality.<br />
        Each one showcases my skills and passion for front-end development.
      </p>

      <Tabs
        defaultActiveKey="latest"
        id="project-tabs"
        className="mb-3 my-5 justify-content-center"
        fill
      >
<Tab eventKey="latest" title="Latest Work">
  <div className="p-4 bg-light rounded shadow-sm">
    <div className="row gap-2">
      {ProjectData.map((item, index) => (
        <div
          className="col-lg-12 mb-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 150 + 100}
        >
          <div className="row align-items-center">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-delay={index * 150 + 200}
            >
              <h5 className="fw-semibold">{item.heading}</h5>
              <p>{item.para}</p>
              <ProjectArrow viewlink={item.viewlink} viewLive={item.viewLive} />
            </div>
            <div
              className="col-md-6 py-5 text-end"
              data-aos="fade-left"
              data-aos-delay={index * 150 + 300}
            >
              <img
                src={item.img}
                alt={item.heading}
                className="img-fluid projectImg rounded shadow-sm"
                style={{ maxHeight: "250px", maxWidth: "350px", objectFit: "cover" }}
              />
            </div>
          </div>
          {index !== ProjectData.length - 1 && <hr className="my-4" />}
        </div>
      ))}
    </div>
  </div>
</Tab>



        <Tab eventKey="animated" title="Animated Design">
          <div className="p-4 bg-light rounded shadow-sm" data-aos="fade-up">
            <p>This section highlights your animation and motion UI-based projects.</p>
          </div>
        </Tab>

        <Tab eventKey="js" title="JavaScript Projects">
          <div className="p-4 bg-light rounded shadow-sm" data-aos="fade-up">
            <p>Projects focused on JavaScript logic and DOM manipulation.</p>
          </div>
        </Tab>

        <Tab eventKey="react" title="React Projects">
          <div className="p-4 bg-light rounded shadow-sm" data-aos="fade-up">
            <p>This section includes React-based UI/UX-rich web apps.</p>
          </div>
        </Tab>
      </Tabs>
      <Footer />
    </div>
  );
}

export default Project;
