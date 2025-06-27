import React, { useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import chaiImg from '../assets/Chai sutta bar img.png'
import MidTown from '../assets/MidTown.png'
import SunDownStudio from '../assets/SunDown_Studio.png'
import PortfolioImg from '../assets/Portfolio.png'
import Footer from './Footer';
import Airbnb from '../assets/Airbnb.png'
import { ProjectArrow } from './MultiComp';
import Hostinza from '../assets/Hostinza.png'

const ProjectData = [
  {
    heading: "Airbnb Clone working",
    para: "Currently Developed a full-featured Airbnb clone using React, Redux, Bootstrap, API integration, routing, and Node.js for backend logic and data flow.",
    arrow: <ProjectArrow />,
    img: Airbnb,
    viewlink: "https://github.com/codesumitsaxena/Airbnb_Json",
    viewLive: "https://airbnb-json-vert.vercel.app/"
  },  
  {
    heading: "ilanding (01)",
    para: "Built a responsive ilanding website using React, Bootstrap, and Material UI. Focused on clean design, smooth user interaction, and modern component-based architecture.",
    arrow: <ProjectArrow />,
    img: "https://bootstrapmade.com/content/templatefiles/iLanding/iLanding-bootstrap-website-template.webp",
    viewlink: "https://github.com/codesumitsaxena/ilanding",
    viewLive: "https://ilanding-phi.vercel.app/"
  },
  {
    heading: "MidTown Clone (02)",
    para: "Built a responsive MidTown website clone using React and Bootstrap. Emphasized clean layout, component-based structure, and smooth navigation to replicate a modern and user-friendly interface.",
    arrow: <ProjectArrow />,
    img: MidTown,
    viewlink: "https://github.com/codesumitsaxena/midtown",
    viewLive: "https://midtown-eta.vercel.app/"
  },
  {
    heading: "Hostinza Clone (03)",
    para: "Cloned the Hostinza hosting website using React and Bootstrap. Customized design components and layout for improved responsiveness and performance.",
    arrow: <ProjectArrow />,
    img: Hostinza,
    viewlink: "https://github.com/codesumitsaxena/hostinza",
    viewLive: "https://hostinza-topaz.vercel.app/"
  },
];



const animatedProject =[
  {
    heading: "SunDown Studio Clone",
    para: "Crafted a visually rich SunDown Studio landing page using only HTML and CSS. Focused heavily on animations and transitions to replicate the original site’s interactive and dynamic user experience. ",
    arrow: <ProjectArrow />,
    img: SunDownStudio,
    viewlink: "https://github.com/codesumitsaxena/Sundown-Studio",
    viewLive: "https://sundown-studio-qug8.vercel.app/"
  },
  {
    heading: "Portfolio Website",
    para: "Developed a dynamic and responsive portfolio website using HTML, CSS, React, Bootstrap, and Material UI. The site showcases my projects, skills, and experience with a clean, modern UI and mobile-friendly design.",
    arrow: <ProjectArrow />,
    img: PortfolioImg,
    viewlink: "https://github.com/codesumitsaxena/Sumit-Portfolio-",
    viewLive: "https://sundown-studio-qug8.vercel.app/"
  },
  {
    heading: "Chai Sutta Bar",
    para: "A fully responsive multi-page clone of the popular Chai Sutta Bar website, built with HTML, CSS, Bootstrap, and JavaScript. Designed to replicate the original site’s look and feel with smooth navigation and mobile-friendly layout.",
    arrow: <ProjectArrow />,
    img: chaiImg,
    viewlink: "https://github.com/codesumitsaxena/chai-sutta-bar",
    viewLive: "https://raw.githack.com/codesumitsaxena/chai_sutta_bar/main/index.html"
  },
]

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
        className="mb-3 my-5 justify-content-center text-dark"
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
        <div className="p-4 bg-light rounded shadow-sm">
    <div className="row gap-2">
      {animatedProject.map((item, index) => (
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

        <Tab eventKey="js" title="JavaScript Projects">
          <div className="p-4 bg-light rounded shadow-sm" data-aos="fade-up">
            <p>Projects focused on JavaScript logic and DOM manipulation.</p>
          </div>
        </Tab>

        <Tab eventKey="react" title="React Projects">
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
      </Tabs>
      <Footer />
    </div>
  );
}

export default Project;
