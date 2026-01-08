import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaLightbulb } from 'react-icons/fa';

const Resume = () => {
	  return (
		      <section id="resume" className="resume section">
		        <Container>
		          <motion.div
		            initial={{ opacity: 0 }}
		            animate={{ opacity: 1 }}
		            transition={{ duration: 1 }}
		          >
		            <h2 className="text-center mb-5">Resume</h2>
		            <Row>
		              <Col md={6} className="mb-4">
		                <Card className="p-3">
		                  <h4><FaGraduationCap /> Education</h4>
		                  <ul>
		                    <li>Bachelor of Computer Applications (BCA) - Tilak Maharashtra Vidyapeeth, Mumbai</li>
		                    <li>Expected Graduation: May 2026</li>
		                  </ul>
		                </Card>
		              </Col>
		              <Col md={6} className="mb-4">
		                <Card className="p-3">
		                  <h4><FaCertificate /> Certifications</h4>
		                  <ul>
		                    <li>IBM Certified MySQL Developer | IBM, 2025</li>
		                    <li>IBM Certified Web Development Professional | IBM, 2025</li>
		                    <li>Graphic Design</li>
		                    <li>ITVEDANT Core Web Designing | ITVEDANT, 2024</li>
		                    <li>IBM Certified Python Web Development | IBM, 2025</li>
		                  </ul>
		                </Card>
		              </Col>
		              <Col md={12}>
		                <Card className="p-3">
		                  <h4><FaLightbulb /> Additional Skills & Interests</h4>
		                  <ul>
		                    <li>Technical Skills: Connecting APIs, Team-Based Development, Designing User-Friendly Interfaces</li>
		                    <li>Hobbies: Reading, Chess, Exploring Open-Source Projects, Sketching</li>
		                    <li>Languages: English (Conversational), Hindi (Conversational), Marathi (Native)</li>
		                  </ul>
		                </Card>
		              </Col>
		            </Row>
		          </motion.div>
		        </Container>
		      </section>
		    );
};

export default Resume;
