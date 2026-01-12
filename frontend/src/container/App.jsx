import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/organisms/Navbar/Navbar';
import Hero from '../components/organisms/Hero/Hero';
import Features from '../components/organisms/Features/Features';
import About from '../components/organisms/About/About';
import Opportunities from '../components/organisms/Opportunities/Opportunities';
import Blog from '../components/organisms/Blog/Blog';
import ContactForm from '../components/organisms/ContactForm/ContactForm';
import Footer from '../components/organisms/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <About />
                <ContactForm />
                <Footer />
              </>
            } />
            <Route path="/oportunidades" element={
              <>
                <Opportunities />
                <Footer />
              </>
            } />
            <Route path="/blog" element={
              <>
                <Blog />
                <Footer />
              </>
            } />
            <Route path="*" element={
              <>
                <Hero />
                <Features />
                <About />
                <ContactForm />
                <Footer />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
