import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	  return (
		      <footer className="bg-dark py-4 text-center">
		        <Container>
		          <p>&copy; 2025 Vidhi Ramesh Jadhav. All rights reserved.</p>
		          <div>
		            <a href="https://github.com/orbella" target="_blank" rel="noreferrer" className="me-3"><FaGithub size={24} /></a>
		            <a href="https://www.linkedin.com/in/vidhi-jadhav/" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
		          </div>
		        </Container>
		      </footer>
		    );
};

export default Footer;
