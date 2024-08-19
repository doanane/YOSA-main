import React, { useState } from 'react';
import '../Styles/Testimonial.css';

const testimonials = [
  {
    name: "Cameron Williamson",
    role: "Founder",
    text: "Sea Chub Demoiselle Whalefish Zebra Lionfish Mud Cat Pelican Eel. Minnow Snoek Icefish Velvet-Belly Shark, California Halibut Round Stingray Northern Sea Robin. Southern Grayling Trout-Perch Sharksucker Sea Toad Candiru Rocket Danio Tilefish Stingray Deepwater Stingray Sacramento Splittail, Canthigaster Rostrata."
  },
  {
    name: "Jane Doe",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "John Smith",
    role: "CTO",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-section">
      <h2>Our Testimonials</h2>
      <h3>What People Say</h3>
      <div className="testimonial">
        <p className="quote">“{testimonials[currentIndex].text}”</p>
        <p className="author">{testimonials[currentIndex].name}</p>
        <p className="role">{testimonials[currentIndex].role}</p>
      </div>
      <div className="navigation">
        <button onClick={prevTestimonial} className="nav-button">❮</button>
        <button onClick={nextTestimonial} className="nav-button">❯</button>
      </div>
    </div>
  );
};

export default Testimonials;
