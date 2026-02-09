import React from 'react';
import { motion } from 'framer-motion';
import ContactButton from './ContactButton';

import { FaPhone, FaEnvelope } from 'react-icons/fa';

const FloatingContact = () => {
  return (
    <motion.div
      className="fixed bottom-20 right-8 md:bottom-1 md:right-1 z-50 flex flex-col gap-1"
    >
      <ContactButton 
        icon={FaPhone} 
        url="tel:+84903165150" 
        label="Call us" 
      />
      <ContactButton 
        icon={FaEnvelope} 
        url="mailto:hanvani0808@gmail.com" 
        label="Email us" 
      />
    </motion.div>
  );
};

export default FloatingContact;
