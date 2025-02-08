import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function LoadingScreen({ onComplete }) {
    const [text, setText] = useState("");
    const fullText = "Welcome to my Website";
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let index = 0;
        let timeout;
        
        // Typing effect
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                // Complete loading
                timeout = setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        // Simulate progress bar animation
        const progressInterval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return oldProgress + 5; // Increase progress
            });
        }, 100);

        return () => {
            clearInterval(interval);
            clearInterval(progressInterval);
            if (timeout) clearTimeout(timeout);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: progress === 100 ? 0 : 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="fixed inset-0 z-50 bg-gray-900 text-white flex flex-col items-center justify-center"
        >
            {/* Typing Effect */}
            <div className="mb-6 text-[2rem] font-mono font-bold">
                {text}
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-1"
                >
                    |
                </motion.span>
            </div>

            {/* Animated Progress Bar */}
            <div className="w-[400px] h-2 bg-gray-700 rounded overflow-hidden relative">
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] rounded"
                />
            </div>

            {/* Bouncing Dots Animation */}
            <div className="mt-4 flex space-x-2">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                        className="w-3 h-3 bg-blue-400 rounded-full"
                    />
                ))}
            </div>
        </motion.div>
    );
}

export default LoadingScreen;
