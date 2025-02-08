import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from 'react-icons/ai';
import { useSpring, animated } from '@react-spring/web';
import emailjs from 'emailjs-com';
import { useInView } from 'react-intersection-observer';  // Import IntersectionObserver

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Intersection observer hook to trigger fade-in when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger only once when it enters the viewport
    threshold: 0.1,     // 10% of the element should be visible
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the email
    emailjs
      .send(
        'service_sbitee8',  // Replace with your EmailJS Service ID
        'template_9k8h0ug',  // Replace with your EmailJS Template ID
        formData,            // The data from the form
        'jammelbrona@gmail.com'       // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log('Message sent successfully:', response);
          setSubmitted(true);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.log('Failed to send message:', error);
        }
      );
  };

  // Animated input styles
  const inputAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { tension: 200, friction: 30 },
  });

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800" ref={ref}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in ${inView ? 'visible' : ''}`}>
        <h2 className="text-4xl font-semibold text-center text-gray-800 dark:text-white mb-10">
          Contact Us
        </h2>

        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
            {submitted ? (
              <div className="text-center text-green-600 font-semibold">
                <p>Thank you for your message! We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name */}
                <animated.div
                  style={inputAnimation}
                  className="flex items-center border border-gray-300 rounded-lg p-3 transition-all duration-300 hover:border-blue-500 hover:scale-105"
                >
                  <AiOutlineUser className="text-gray-500 mr-3" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full bg-transparent outline-none text-gray-700"
                    required
                  />
                </animated.div>

                {/* Email */}
                <animated.div
                  style={inputAnimation}
                  className="flex items-center border border-gray-300 rounded-lg p-3 transition-all duration-300 hover:border-blue-500 hover:scale-105"
                >
                  <AiOutlineMail className="text-gray-500 mr-3" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full bg-transparent outline-none text-gray-700"
                    required
                  />
                </animated.div>

                {/* Message */}
                <animated.div
                  style={inputAnimation}
                  className="flex items-start border border-gray-300 rounded-lg p-3 transition-all duration-300 hover:border-blue-500 hover:scale-105"
                >
                  <AiOutlineMessage className="text-gray-500 mr-3" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="4"
                    className="w-full bg-transparent outline-none text-gray-700"
                    required
                  />
                </animated.div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
