import React from 'react';
import About from './About';
import './App.css';
import Contacts from './Contacts';
// import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';

function App() {
  return (
    
    <>
      <div className="home-page-component">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contacts />
      {/* <Footer /> */}
      </div>
    </>

  );
}

export default App;
