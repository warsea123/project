import React from "react";
import { motion } from "framer-motion";
import { FaCreditCard } from "react-icons/fa";

function Project() {
    const projects = [
        { 
            title: "Credit Card Generator", 
            description: "Generate and design virtual credit cards with animations.",
            link: "https://warsea123.github.io/project/",
            icon: <FaCreditCard />
        },
        { 
            title: "Birthday Countdown", 
            description: "Countdown timer with a message-sending feature.",
            link: " https://warsea123.github.io/b-day/",
            icon: <FaCreditCard /> // Replace with an appropriate icon
        }
    ];

    return (
        <div className="flex flex-wrap justify-center items-center min-h-screen bg-white dark:bg-gray-900 p-4 gap-4">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg border-t-4 border-blue-500 dark:border-blue-400 w-64 h-72 flex flex-col justify-between p-4 text-center transform transition duration-500 hover:scale-105"
                >
                    <motion.div
                        className="text-4xl text-blue-600 dark:text-blue-400"
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                    >
                        {project.icon}
                    </motion.div>

                    <motion.h2
                        className="text-lg font-bold text-gray-900 dark:text-white"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        {project.title}
                    </motion.h2>

                    <p className="text-gray-700 dark:text-gray-300 text-xs">
                        {project.description}
                    </p>

                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-medium shadow-md transition duration-300 hover:bg-blue-700 hover:shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        View Project
                    </motion.a>
                </motion.div>
            ))}
        </div>
    );
}

export default Project;
