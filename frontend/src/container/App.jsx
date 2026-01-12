import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/organisms/Navbar/Navbar';
import Hero from '../components/organisms/Hero/Hero';
import Features from '../components/organisms/Features/Features';
import About from '../components/organisms/About/About';
import Opportunities from '../components/organisms/Opportunities/Opportunities';
import Blog from '../components/organisms/Blog/Blog';
import ContactForm from '../components/organisms/ContactForm/ContactForm';
import Footer from '../components/organisms/Footer/Footer';

// Componente para manejar scroll suave
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll suave al top cuando cambia la ruta
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  // Manejar scroll suave para anclas
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Agregar event listeners
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null;
};

// Componente de página con animación
const PageTransition = ({ children }) => {
  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <ScrollToTop />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={
              <PageTransition>
                <Hero />
                <Features />
                <About />
                <ContactForm />
                <Footer />
              </PageTransition>
            } />
            <Route path="/oportunidades" element={
              <PageTransition>
                <Opportunities />
                <Footer />
              </PageTransition>
            } />
            <Route path="/blog" element={
              <PageTransition>
                <Blog />
                <Footer />
              </PageTransition>
            } />
            <Route path="*" element={
              <PageTransition>
                <Hero />
                <Features />
                <About />
                <ContactForm />
                <Footer />
              </PageTransition>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
