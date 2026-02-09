// ContactButton.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ContactButton = ({ icon: Icon, url, label }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        rotate: [0, -15, 15, -15, 15, 0], // Keyframes cho hiệu ứng rung lắc
      }}
      transition={{
        duration: 0.6, // Thời gian cho 1 chu kỳ rung
        repeat: Infinity, // Lặp vô hạn
        repeatDelay: 0.5, // Thời gian chờ giữa các lần lặp
        ease: "easeInOut", // Hiệu ứng mượt
      }}
      className="flex items-center justify-center w-12 h-12 bg-black/80 rounded-full shadow-lg text-white mb-4"
      title={label}
    >
      <Icon size={24} />
    </motion.a>
  );
};

export default ContactButton;