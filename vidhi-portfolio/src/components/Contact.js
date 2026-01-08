import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
	  return (
		      <section id="contact" className="contact section">
		        <Container>
		          <motion.div
		            initial={{ opacity: 0, y: 50 }}
		            animate={{ opacity: 1, y: 0 }}
		            transition={{ duration: 1 }}
		          >
		            <h2 className="text-center mb-5">Contact</h2>
		            <Row>
		              <Col md={6} className="mb-4">
		                <h4>Get in Touch</h4>
		                <p><FaEnvelope /> vidhijadhav91@gmail.com</p>
		                <p><FaPhone /> +91-9096993039</p>
		                <p><FaMapMarkerAlt /> Mumbai, India</p>
		              </Col>
		              <Col md={6}>
		                <Form action="mailto:vidhijadhav91@gmail.com" method="post" encType="text/plain">
		                  <Form.Group className="mb-3">
		                    <Form.Label>Name</Form.Label>
		                    <Form.Control type="text" name="name" placeholder="Your Name" />
		                  </Form.Group>
		                  <Form.Group className="mb-3">
		                    <Form.Label>Email</Form.Label>
		                    <Form.Control type="email" name="email" placeholder="Your Email" />
		                  </Form.Group>
		                  <Form.Group className="mb-3">
		                    <Form.Label>Message</Form.Label>
		                    <Form.Control as="textarea" name="message" rows={3} placeholder="Your Message" />
		                  </Form.Group>
		                  <Button variant="primary" type="submit">Send Message</Button>
		                </Form>
		              </Col>
		            </Row>
		          </motion.div>
		        </Container>
		      </section>
		    );
};

export default Contact;
