import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Home({ handleType, myProfile }) {
  const [nameText, setName] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  let fullName = "Jammel M. Brona";

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timeOut;

    const interval = setInterval(() => {
      if (!isDeleting) {
        setName(fullName.substring(0, index + 1));
        index++;

        if (index > fullName.length) {
          isDeleting = true;
          timeOut = setTimeout(() => {
            if (handleType) handleType(nameText);
          }, 1000);
        }
      } else {
        setName(fullName.substring(0, index));
        index--;
        if (index === 0) {
          isDeleting = false;
        }
      }
    }, 150);

    return () => {
      clearInterval(interval);
      if (timeOut) clearTimeout(timeOut);
    };
  }, [handleType]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`mt-16 flex flex-col md:flex-row items-center justify-center p-8 md:pt-32 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Left Side: Animated Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-16 mb-8 md:mb-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={myProfile}
          alt="Profile"
          className="w-72 h-72 object-cover rounded-full shadow-lg transform hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* Right Side: Animated Text */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left">
        <h1 className="text-[2rem] uppercase font-bold text-gray-900 dark:text-white mb-4">
          {nameText}
        </h1>
        <motion.p
          className="text-2xl font-bold uppercase text-gray-950 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I am a dedicated IT professional from Albay with a passion for technology and education. I hold a degree in Information Technology and have gained valuable experience as an IT Instructor at STI Legazpi for one year. During this time, I developed and delivered courses, guided students in hands-on projects, and fostered a strong understanding of IT concepts.
          <br /><br />
          With a keen interest in software development, I am continuously expanding my skills in web and application development, particularly in React.js, Node.js, and database management. I thrive on problem-solving, innovation, and staying up to date with the latest industry trends.
          <br /><br />
          I am excited to leverage my knowledge and experience to contribute to impactful projects and help drive technological advancements.
        </motion.p>
      </div>
    </div>
  );
}

export default Home;
