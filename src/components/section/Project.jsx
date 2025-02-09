import React from "react";
import { motion } from "framer-motion";
import { FaCreditCard } from "react-icons/fa";

function Project() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black p-6">
      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white dark:bg-gray-800 py-8 px-6 shadow-2xl rounded-lg border-t-4 border-blue-500 dark:border-blue-400 max-w-md w-full text-center transform transition duration-500 hover:scale-105"
      >
        {/* Icon with bounce animation */}
        <motion.div
          className="text-6xl text-blue-600 dark:text-blue-400 mb-4"
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, yoyo: Infinity }}
        >
          <FaCreditCard />
        </motion.div>

        {/* Project Title with animation */}
        <motion.h2
          className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          Credit Card Generator
        </motion.h2>

        {/* Project Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          Generate and design virtual credit cards with interactive animations.
        </p>

        {/* Animated Button */}
        <motion.a
          href="https://warsea123.github.io/project1/" // Replace with your actual project link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium shadow-lg transition duration-300 hover:bg-blue-700 hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View Project
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Project;
