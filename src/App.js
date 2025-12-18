import './App.css';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Theme from './components/Theme';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />

     
      <div className="pt-20">
        
        <Hero />
        <Services/>
        <About/>
        <Theme />
        <Gallery/>
        <Contact />
      </div>
    </div>
  );
}

export default App;
