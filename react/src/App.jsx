
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Page2Section from './components/Page2Section';
import Page3Section from './components/Page3Section';
import Page4Section from './components/Page4Section';
import CoreServices from './components/CoreServices';
import KnowledgeBase from './components/KnowledgeBase';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';
import useScroll from './hooks/useScroll';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [refs, scrollTo] = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      if (window.scrollY > heroHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showNavbar && <Navbar />}
      <Hero ref={el => refs.current[0] = el} nextSection={() => scrollTo(1)} />
      <Page2Section ref={el => refs.current[1] = el} nextSection={() => scrollTo(2)} />
      <Page3Section ref={el => refs.current[2] = el} nextSection={() => scrollTo(3)} />
      <Page4Section ref={el => refs.current[3] = el} nextSection={() => scrollTo(4)} />
      <CoreServices ref={el => refs.current[4] = el} nextSection={() => scrollTo(5)} />
      <KnowledgeBase ref={el => refs.current[5] = el} nextSection={() => scrollTo(6)} />
      <Contact ref={el => refs.current[6] = el} />
      <Footer /> {/* Render the Footer component */}
    </>
  );
}

export default App;

