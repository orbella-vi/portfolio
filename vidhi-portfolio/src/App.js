import React, { Suspense } from 'react';
import './App.css';
import NavbarCustom from './components/Navbar';

const Hero = React.lazy(() => import('./components/Hero'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Resume = React.lazy(() => import('./components/Resume'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="app">
      <NavbarCustom />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Hero />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;