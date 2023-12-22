import React from "react";
import Navbar from './components/Navbar';
import Company from "./components/Company";
import Hero from './components/Hero';
import Works from "./components/Works";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Company />
        <Projects />
        <Works />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
