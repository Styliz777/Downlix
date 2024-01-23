import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.jpeg'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down (you can adjust the threshold)
      const scrolled = window.scrollY > 50;

      // Update the state based on the scroll position
      setIsScrolled(scrolled);
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 p-3 transition border bg-bg z-10 ${
        isScrolled ? 'shadow-md rounded-lg' : ''
      }`}
    >
      <a href="/">
      <div className="w-full h-full flex flex-col items-center content-center">
        <img src={logo} alt="" className='w-[10em]'/>
      </div>
      </a>
    </header>
  );
};

export default Header;
