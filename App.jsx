import React from 'react';
import './App.css'; // You can use this for global styles
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Services />
            <Pricing />
            <Testimonials />
            <About />
            <FAQ />
            <Contact />
            <Blog />
            <Footer />
        </div>
    );
}

export default App;
