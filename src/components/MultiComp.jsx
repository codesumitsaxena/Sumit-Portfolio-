import React from 'react'

export const AvailableWork = () => {
  return (
    <div className="container my-5">
      <div className="available-work d-flex flex-column align-items-center justify-content-center text-center rounded-5 shadow bg-white px-3 px-sm-5 py-5">
        <p className="mb-2 fs-5 text-muted">Available for work</p>
        <h2 className="fw-bold fs-3 fs-md-1">
          Let’s build something <br /> amazing together.
        </h2>
        <a
          href="#contact"
          className="btn btn-dark rounded-pill mt-4 px-4 py-2"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export const MiniFooter = () => (
  <footer className="bg-light py-3">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 text-center text-lg-start mb-3 mb-lg-0">
          <p className="mb-0 text-muted">
            © 2025 Sumit Saxena — Let’s build something great together.
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <ul className="d-flex justify-content-center justify-content-lg-end gap-3 list-unstyled mb-0">
            <li>
              <a href="#" className="text-decoration-none text-dark" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/codesumitsaxena" className="text-decoration-none text-dark" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-dark" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-dark" aria-label="Email">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-dark" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);



export const ProjectArrow = ({ viewlink, viewLive }) => (
  <div className="d-flex justify-content-between me-5 mt-2">
    <a
      href={viewlink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none text-dark"
    >
      View Code <i className="bi bi-arrow-up-right ms-1 fw-bold"></i>
    </a>
    <a
      href={viewLive}
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none text-dark"
    >
      View Live <i className="bi bi-arrow-up-right ms-1 fw-bold"></i>
    </a>
  </div>
);




