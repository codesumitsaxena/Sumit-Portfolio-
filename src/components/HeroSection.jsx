import React, { useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import Sumit from '../assets/Sumit Saxena.jpg'
import 'aos/dist/aos.css';
import Airbnb from '../assets/Airbnb.png'
import MidtownImg from '../assets/MidTown.png'
import IlandingImg from '../assets/IlandingImg.png'




function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className='container my-5 px-3 px-md-5'>
        <div className="row justify-content-around align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <p className='intro-heading'>Hi, I'm Sumit Saxena</p>
            <h2 className='heroHeading fw-bold fs-sm-lg'>Frontend</h2>
            <h2 className='heroPreheading fw-bold fs-sm-lg'>Developer</h2>
            <p>
              Shaping the future of web interactions with clean, efficient, and engaging designs{' '}
              <span className='span-heading'>Frontend</span> development.
            </p>
            <hr />
            <div className="link-area d-flex gap-3 flex-wrap">
              <a href="https://github.com/codesumitsaxena" className='text-decoration-none text-dark d-flex align-items-center'>
                Github <i className="bi bi-arrow-up-right ms-1 text-dark fw-bold font-icon"></i>
              </a>
              <a href="https://www.linkedin.com/in/engineersumitsaxena" className='text-decoration-none text-dark d-flex align-items-center'>
                Linkdin <i className="bi bi-arrow-up-right ms-1 text-dark fw-bold font-icon"></i>
              </a>
              <a href="mailto:engineersumitsaxena@gmail.com" className='text-decoration-none text-dark d-flex align-items-center'>
                Gmail <i className="bi bi-arrow-up-right arrow-s ms-1 text-dark font-icon"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0 d-flex justify-content-around " data-aos="fade-left">
            <img
              src={Sumit}
              className='img-fluid rounded-pill'
              alt=""
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Scroller Marque Text */}
      <div className="scroll-container ">
  <div className="scroll-content">
    <div className="scroll-row">
      <div className="scroll-item">Performance Optimization <i className="bi bi-asterisk"></i></div>
      <div className="scroll-item">Version Control (Git, GitHub) <i className="bi bi-asterisk"></i></div>
      <div className="scroll-item">Community <i className="bi bi-asterisk"></i></div>
      <div className="scroll-item">Development <i className="bi bi-asterisk"></i></div>
      <div className="scroll-item">Web Animation <i className="bi bi-asterisk"></i></div>
    </div>
    {/* Duplicate for seamless loop */}
    <div className="scroll-row">
      <div className="scroll-item">Performance Optimization <i className="bi bi-asterisk"></i></div>
      <div className="scroll-item">Version Control (Git, GitHub) <i className="bi bi-asterisk"></i></div>
      <div className="scroll-item">Community <i className="bi bi-asterisk"></i></div>
      <div className="scroll-item">Development <i className="bi bi-asterisk"></i></div>
      <div className="scroll-item">Web Animation <i className="bi bi-asterisk"></i></div>
    </div>
  </div>
</div>




      {/* About Us */}
      <div className="container my-5 d-flex flex-column align-items-center px-3 px-md-5" data-aos="zoom-in">
        <p className='about-preheading'><i className="bi bi-asterisk"></i> ABOUT ME</p>
        <p className='fw-bold fs-5 text-center'>
          I'm Sumit Saxena, an aspiring Frontend Developer currently diving deep into the world of modern web development. With a growing skill set in HTML, CSS, Bootstrap, JavaScript, React, and GSAP, I specialize in building responsive and visually engaging web interfaces that deliver smooth and interactive user experiences.
        </p>
      </div>

      {/* Featured  */}
      <div className="container my-3 px-3 px-md-5">
        <h2 className="fs-1 fw-bold text-sm-center" data-aos="fade-up">FEATURED WORK</h2>
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap">
            <p className="featured-para mb-0">
              As a front-end developer, I bring modern ideas, simplicity, and universal <br className="d-none d-md-block" />
              design to create impactful digital experiences.
            </p>
            <a className="text-decoration-none rounded-pill arrow-btn ms-3 my-3 d-flex align-items-center" href="#">
              Let's Discuss <i className="bi bi-arrow-up-right ms-1 text-dark fw-bold font-icon"></i>
            </a>
          </div>
        </div>

    
  
{/* Project 1 */}
<div className="row project" data-aos="fade-up" data-aos-delay="150">
  <div className="d-flex flex-wrap justify-content-between align-items-center g-4">
    <div className="col-lg-4 py-5">
      <h4>ilanding (01)</h4>
      <p className="mb-0">
        Built a responsive ilanding website using React, Bootstrap, and Material UI. Focused on clean design, smooth user interaction, and modern component-based architecture.
      </p>
    </div>
    <div className="col-lg-4 text-center">
      <img src={IlandingImg} alt="IlandingImg" className="img-fluid rounded project-img-hover" />
    </div>
    <div className="col-lg-4 py-5 d-flex justify-content-end">
      <a className="text-decoration-none d-flex align-items-center" href="https://ilanding-phi.vercel.app/">
        View Project
        <i className="bi bi-arrow-up-right ms-2 text-dark fw-bold font-icon"></i>
      </a>
    </div>
  </div>
</div>


{/* Project 2 */}
<div className="row project " data-aos="fade-up" data-aos-delay="200">
  <div className="d-flex flex-wrap py-5 justify-content-between align-items-center g-4">
    <div className="col-lg-4 ">
      <h4>Airbnb Clone working (02)</h4>
      <p className="mb-0">
        Currently Developed a full-featured Airbnb clone using React, Redux, Bootstrap, API integration, routing, and Node.js for backend logic and data flow.
      </p>
    </div>
    <div className="col-lg-4 text-center">
    <img src={Airbnb} alt="Airbnb" className="img-fluid rounded project-img-hover" />
    </div>
    <div className="col-lg-4 d-flex justify-content-end">
      <a className="text-decoration-none d-flex align-items-end" href="#">
        View Project
        <i className="bi bi-arrow-up-right ms-2 text-dark fw-bold font-icon"></i>
      </a>
    </div>
  </div>
</div>

{/* Project 3 */}
<div className="row project " data-aos="fade-up" data-aos-delay="250">
  <div className="d-flex flex-wrap py-5 justify-content-between align-items-center g-4">
    <div className="col-lg-4">
      <h4>MidTown Clone (03)</h4>
      <p className="mb-0">
        Built a responsive MidTown website clone using React and Bootstrap. Emphasized clean layout, component-based structure, and smooth navigation to replicate a modern and user-friendly interface.
      </p>
    </div>
    <div className="col-lg-4 text-center">
    <img src={MidtownImg} alt="MidtownImg" className="img-fluid rounded project-img-hover" />
    </div>
    <div className="col-lg-4 d-flex justify-content-end">
      <a className="text-decoration-none d-flex align-items-center" href="https://midtown-clone.vercel.app/">
        View Project
        <i className="bi bi-arrow-up-right ms-2 text-dark fw-bold font-icon"></i>
      </a>
    </div>
  </div>
</div>
</div>
      <div className="container-fluid">
        <hr />
      </div>
    </>
  )
}

export default HeroSection
