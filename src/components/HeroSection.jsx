import React, { useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import Sumit from '../assets/Sumit Saxena.jpg'
import 'aos/dist/aos.css';

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
              <a href="#" className='text-decoration-none text-dark d-flex align-items-center'>
                Linkdin <i className="bi bi-arrow-up-right ms-1 text-dark fw-bold font-icon"></i>
              </a>
              <a href="#" className='text-decoration-none text-dark d-flex align-items-center'>
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
      <div className="container my-5 px-3 px-md-5">
        <h2 className="fs-1 fw-bold text-sm-center" data-aos="fade-up">FEATURED WORK</h2>
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
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
        <div className="row project my-5" data-aos="fade-up" data-aos-delay="150">
          <div className="col-12 d-flex justify-content-between align-items-center flex-wrap">
            <div className="mb-2">
              <h4>Web Design (01)</h4>
              <p className="mb-0">Creating engaging modern designs</p>
            </div>
            <div>
              <a className="text-decoration-none ms-3 d-flex align-items-center" href="#">
                View Project <i className="bi bi-arrow-up-right ms-1 text-dark fw-bold font-icon"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="row project my-5" data-aos="fade-up" data-aos-delay="200">
          <div className="col-12 d-flex justify-content-between align-items-center flex-wrap">
            <div className="mb-2">
              <h4>Web Development (02)</h4>
              <p className="mb-0">Building functional, logical websites</p>
            </div>
            <div>
              <a className="text-decoration-none ms-3 d-flex align-items-center" href="#">
                View Project <i className="bi bi-arrow-up-right ms-1 text-dark fw-bold font-icon"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="row project my-5" data-aos="fade-up" data-aos-delay="250">
          <div className="col-12 d-flex justify-content-between align-items-center flex-wrap">
            <div className="mb-2">
              <h4>Web Animations & Effects (03)</h4>
              <p className="mb-0">Enhancing UI with smooth animations and interactive elements</p>
            </div>
            <div>
              <a className="text-decoration-none ms-3 d-flex align-items-center" href="#">
                View Project <i className="bi bi-arrow-up-right ms-1 text-dark fw-bold font-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container d-flex justify-content-center align-items-center my-4" data-aos="fade-up">
          <a href="https://github.com/codesumitsaxena" className='rounded-pill git-btn text-decoration-none px-4 py-2 d-flex align-items-center'>
            More Projects On <i className="bi bi-github ms-1"></i>
          </a>
        </div>

        {/* Services */}
        <div className="container px-0 px-md-5">
          <div className="row my-5" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2>MY SERVICE<br /> EXPERTISE</h2>
            </div>
            <div className="col-lg-6">
              <p>
                As a front-end developer, I use modern ideas, simplicity in design, and universal visual identification tailored to the dedicated and current market.
              </p>
              <a className="text-decoration-none rounded-pill arrow-btn d-inline-flex align-items-center" href="#">
                Let's Discuss <i className="bi bi-arrow-up-right ms-1 text-dark fw-bold font-icon"></i>
              </a>
            </div>
          </div>
          </div>
          <div className="container">
  <div className="row my-5 py-5 g-2">
    <div className="col-lg-4 py-3  border-top border-dark" data-aos="fade-up" data-aos-delay="350">
      <p>(01)</p>
      <h4>UI/UX Implementation</h4>
      <p>Creating intuitive user interfaces with modern design principles, ensuring seamless user experience across devices.</p>
    </div>
    <div className="col-lg-4 py-3 border-top border-dark" data-aos="fade-up" data-aos-delay="400">
      <p>(02)</p>
      <h4>Animations & Performance Optimization</h4>
      <p>Enhancing UI with smooth animations and interactive elements</p>
    </div>
    <div className="col-lg-4 py-3  border-top border-dark" data-aos="fade-up" data-aos-delay="450">
      <p>(03)</p>
      <h4>DEVELOPMENT</h4>
      <p>Proficient in React, JavaScript, and Bootstrap to build responsive and interactive web applications.</p>
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
