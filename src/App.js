import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services';
import { LanguageProvider } from './components/LanguageContext'; // Import LanguageProvider

const App = () => {
  return (
    <LanguageProvider> {/* Wrap the entire app with LanguageProvider */}
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
};

export default App;