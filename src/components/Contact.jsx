import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 120,
    });
  }, []);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        'service_3ioxub8',     
        'template_p5vh9mc',    
        form.current,
        '-VGY74-SpVlv9WU9b'    
      )
      .then(
        () => {
          toast.success('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          toast.error('❌ Failed to send message. Please try again later.');
          console.error(error);
        }
      );
  };
  

  return (
    <div className="container my-5 px-3 px-md-5">
      <h5 className="fw-bold arrowhead" data-aos="fade-right" data-aos-delay="100">
        <i className="bi bi-asterisk me-2"></i>Let's talk
      </h5>
      <h2 className="mb-4 fw-bold" data-aos="fade-left" data-aos-delay="200">
        Contact
      </h2>

      <div className="row gx-4 gy-5">
        {/* Left Section */}
        <div className="col-12 col-lg-6" data-aos="fade-up" data-aos-delay="300">
          <p className="mb-2">
            Got a crazy idea or just want to chat about code and creativity?
            Let’s connect and bring it to life.
          </p>
          <p className="text-muted">Sector 58, Noida, India</p>

          {/* Social Icons */}
          <div className="social-area my-3" data-aos="fade-up" data-aos-delay="400">
            <ul className="d-flex flex-wrap gap-3 list-unstyled">
              {['linkedin', 'github', 'instagram', 'envelope-fill', 'whatsapp'].map((icon, idx) => (
                <li key={icon} data-aos="zoom-in" data-aos-delay={500 + idx * 100}>
                  <a href="#" className="text-decoration-none text-dark fs-4">
                    <i className={`bi bi-${icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Google Map */}
          <div className="rounded overflow-hidden mt-4 shadow-sm" data-aos="fade-up" data-aos-delay="700">
            <div className="ratio ratio-16x9">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7827249260504!2d77.35626468151878!3d28.606294314650523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56cf11a7011%3A0x49d7576acb82fa23!2sSector%2058%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1747564691778!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="col-12 col-lg-6" data-aos="fade-up" data-aos-delay="800">
          <form ref={form} onSubmit={sendEmail} className="bg-light p-4 rounded shadow-sm">
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="to_email"
                placeholder="you@example.com"
                required
              />

            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project or question..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />

    </div>
  );
}

export default Contact;
