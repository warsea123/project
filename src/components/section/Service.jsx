import React from 'react'
import { motion } from 'framer-motion';
import { FaRegSadTear } from 'react-icons/fa';


function Service() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-100 dark:bg-gray-800 py-12 shadow-lg rounded-lg border-t-4 border-gray-300 dark:border-gray-700 max-w-md mx-auto text-center"
    >
      <div className="mt-5 flex justify-center items-center">
        <motion.div
          className="text-6xl text-gray-600 dark:text-gray-300 mb-4"
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaRegSadTear />
        </motion.div>
      </div>
      <h2 className="text-xl font-semibold text-gray-950 dark:text-white mb-4">
        Sorry, this project is not available at the moment.
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        Please check back later. We apologize for the inconvenience.
      </p>
    </motion.div>
  </div>
  )
}

export default Service