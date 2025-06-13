import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SunToggle } from './Svg';
import Navbtn from './Navbtn'; // Import your mobile bottom nav

function NavbarApp() {
  return (
    <>
      {/* Top Navbar */}
      <div className="navbar-wrapper">
        <Navbar expand="lg" className="py-3" bg="light" variant="light" collapseOnSelect>
          <Container fluid className="px-3 px-md-5">
            <Navbar.Brand as={NavLink} to="/">
              SS
            </Navbar.Brand>

            <Navbar.Collapse id="navbarScroll" className="d-none d-lg-flex">
              <Nav className="mx-auto gap-4 justify-content-center">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
                <NavLink to="/project" className="nav-link">
                  Project
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </Nav>

              <Form className="d-flex justify-content-center mt-3 mt-lg-0 ms-lg-3">
                <SunToggle />
              </Form>
            </Navbar.Collapse>

            {/* Mobile dark mode toggle */}
            <Form className="d-lg-none ms-auto">
              <SunToggle />
            </Form>
          </Container>
        </Navbar>
      </div>

      {/* Bottom Tab Bar (Mobile Only) */}
      <div className="d-lg-none">
        <Navbtn />
      </div>
    </>
  );
}

export default NavbarApp;
