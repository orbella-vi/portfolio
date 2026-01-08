import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools, FaPaintBrush, FaUsers } from 'react-icons/fa';

const skillsData = [
  {
    category: 'Frontend',
    icon: <FaCode />,
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Bootstrap', 'Responsive Design', 'Angular Framework']
  },
  {
    category: 'Backend',
    icon: <FaServer />,
    items: ['Python', 'Django', 'RESTful APIs', 'Testing in Python']
  },
  {
    category: 'Database',
    icon: <FaDatabase />,
    items: ['MySQL', 'Stored Procedures', 'MongoDB']
  },
  {
    category: 'Tools',
    icon: <FaTools />,
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'CCNA', 'RHCE Linux', 'AWS Essentials + DevOps']
  },
  {
    category: 'Creative',
    icon: <FaPaintBrush />,
    items: ['Graphic Design']
  },
  {
    category: 'Soft Skills',
    icon: <FaUsers />,
    items: ['Problem-Solving', 'Team Collaboration', 'Time Management']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-center mb-5">Skills</h2>
          <Row>
            {skillsData.map((skill, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card className="h-100 text-center p-3">
                  <div className="mb-3">{skill.icon}</div>
                  <h5>{skill.category}</h5>
                  <ul className="list-unstyled">
                    {skill.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;