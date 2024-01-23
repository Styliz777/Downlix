import React from 'react';
import { motion } from 'framer-motion';
import { PiWarningCircleBold } from "react-icons/pi";
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    const pulsateAnimation = {
        scale: [1, 1.1, 1], // Define the pulsating scale values
        transition: {
          duration: 1,
          repeat: Infinity, // Repeat the animation infinitely
          repeatType: 'reverse', // Reverse the animation on each repeat
        },
      };

  return (
    <motion.div className="min-h-screen p-10 flex flex-col items-center justify-center bg-gray-900 text-white">
    <motion.div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div animate={pulsateAnimation}>
        <PiWarningCircleBold style={{ fontSize: '10em', marginBottom: '0.2em' }} />
      </motion.div>
    </motion.div>

      <motion.h1
        className="text-4xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
      >
        Page Not Found!
      </motion.h1>
      <motion.p
        className="text-sm mb-8 p-7"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4 } }}
      >
        Error 404! Page Not Found. We suggest going back to the home page.
      </motion.p>
      <Link to='/'>
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)' }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-gray-900 px-8 py-3 rounded-md relative overflow-hidden focus:outline-none"
      >
        <span className="z-10">Go! Home</span>
        
        
      </motion.button>
      </Link>
    </motion.div>
  );
};

export default ErrorPage;
