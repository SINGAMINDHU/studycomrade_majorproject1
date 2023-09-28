import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul>
        {/* Navigation links */}
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#pricing">Request a Quote</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
