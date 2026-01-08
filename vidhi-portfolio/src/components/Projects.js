import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-center mb-5">Projects</h2>
          <p className="text-center">Coming soon... Stay tuned for exciting projects!</p>
          {/* You can add project cards here later */}
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;