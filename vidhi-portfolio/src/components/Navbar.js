import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../theme/ThemeContext';

const NavbarCustom = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Navbar bg={isDark ? "dark" : "light"} variant={isDark ? "dark" : "light"} expand="lg" sticky="top" className="px-4 shadow-sm">
      <Navbar.Brand href="#about">Vidhi Jadhav</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Nav className="align-items-center">
          <Nav.Link href="https://github.com/orbella" target="_blank">
            <FaGithub size={24} />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/vidhi-jadhav/" target="_blank">
            <FaLinkedin size={24} />
          </Nav.Link>
          <Nav.Link onClick={toggleTheme} className="d-flex align-items-center">
            {isDark ? <FaSun size={22} title="Light Mode" /> : <FaMoon size={22} title="Dark Mode" />}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarCustom;