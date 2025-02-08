import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaPython, FaHtml5, FaCss3Alt, FaPhp } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

// Skills data
const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500" />, percentage: 35, color: 'bg-blue-500' },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, percentage: 45, color: 'bg-green-500' },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, percentage: 57, color: 'bg-yellow-500' },
  { name: 'Python', icon: <FaPython className="text-blue-600" />, percentage: 30, color: 'bg-blue-600' },
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" />, percentage: 80, color: 'bg-orange-500' },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-400" />, percentage: 60, color: 'bg-blue-400' },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600" />, percentage: 55, color: 'bg-blue-600' },
  { name: 'PHP', icon: <FaPhp className="text-purple-500" />, percentage: 50, color: 'bg-purple-500' },
];


// Framer Motion animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="text-center p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900 transition-all transform hover:scale-105 hover:shadow-xl"
    >
      <div className="text-[4rem] mb-4">{skill.icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
      <div className="mt-2">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{skill.name} Skills</span>
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{skill.percentage}%</span>
          </div>
          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${skill.percentage}%` }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className={`h-2 ${skill.color}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
    >
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-semibold text-center mb-10"
        >
         Technologies
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
