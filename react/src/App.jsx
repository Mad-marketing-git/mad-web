
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

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Page2Section />
      <Page3Section />
      <Page4Section />
      <CoreServices />
      <KnowledgeBase />
      <Contact />
      <Footer /> {/* Render the Footer component */}
    </>
  );
}

export default App;
