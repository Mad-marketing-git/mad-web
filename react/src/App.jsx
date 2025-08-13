
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import WhyPartnerWithUs from './components/WhyPartnerWithUs';
import CoreServices from './components/CoreServices';
import KnowledgeBase from './components/KnowledgeBase';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhyPartnerWithUs />
      <CoreServices />
      <KnowledgeBase />
      <Contact />
      <Footer /> {/* Render the Footer component */}
    </>
  );
}

export default App;
