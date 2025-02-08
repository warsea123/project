import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/section/Navbar';
import Home from './components/section/Home';
import About from './components/section/About';
import Contact from './components/section/Contact';
import Service from './components/section/Service'
import Project from './components/section/Project';
import Footer from './components/section/Footer';
import LoadingScreen from './components/LoadingScreen';
import myProfile from './assets/profile.jpg';

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-800">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Navbar />
            <div className="flex-grow pt-16">
              <Routes>
                <Route path="/" element={<Home myProfile={myProfile} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Service />} />
                <Route path="/project" element={<Project />} />
              </Routes>
            </div>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
