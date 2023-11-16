import React from "react";
import Navbar from './components/Navbar';
import Company from "./components/Company";
import Hero from './components/Hero';
import Works from "./components/Works";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Company />
        <Works />
        <Footer />
    </div>
  );
}

export default App;
