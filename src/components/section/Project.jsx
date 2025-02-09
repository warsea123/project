import React from 'react';
import { FaCreditCard } from 'react-icons/fa';

function Project() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      {/* Project Card */}
      <div className="bg-white dark:bg-gray-800 py-8 px-6 shadow-lg rounded-lg border-t-4 border-blue-500 dark:border-blue-400 max-w-md w-full text-center transform transition duration-500 hover:scale-105 animate-fadeInScale">
        {/* Icon */}
        <div className="text-6xl text-blue-600 dark:text-blue-400 mb-4 animate-bounce">
          <FaCreditCard />
        </div>

        {/* Project Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Credit Card Generator
        </h2>

        {/* Project Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          A sleek credit card generator with animations and interactive design.
        </p>

        {/* Link Button */}
        <a
          href="https://your-project-link.com" // Replace with your actual project link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium shadow-md transition duration-300 hover:bg-blue-700 hover:shadow-lg"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default Project;
