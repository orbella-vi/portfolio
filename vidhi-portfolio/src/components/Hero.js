import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="about" className="hero section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1 className="display-4 fw-bold">Vidhi Ramesh Jadhav</h1>
              <h2 className="lead">Aspiring Full-Stack Web Developer | Mumbai, India</h2>
              <p className="mt-4">
                Passionate about building scalable web applications with modern technologies. Skilled in frontend and backend development, always eager to learn and contribute to innovative projects.
              </p>
              <div className="mt-4">
                <a href="mailto:vidhijadhav91@gmail.com" className="me-3"><FaEnvelope size={24} /> vidhijadhav91@gmail.com</a>
                <a href="tel:+919096993039"><FaPhone size={24} /> +91-9096993039</a>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;