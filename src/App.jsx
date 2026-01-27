import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Certificates />
            <Footer />
        </div>
    );
}

export default App;
