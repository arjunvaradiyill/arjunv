'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiInstagram } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import SectionContainer from './SectionContainer';

// Initialize EmailJS with your public key
emailjs.init("Q6v1YzpDR9rdQvDQV");

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Using sendForm method which is more reliable
      await emailjs.sendForm(
        'service_pq8kcsc', // Your EmailJS service ID
        'template_4s4uyrb', // Your EmailJS template ID
        formRef.current,
        'Q6v1YzpDR9rdQvDQV' // Your EmailJS public key
      );
      
      setStatus('success');
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <SectionContainer
      id="contact"
      title="Get in Touch"
      subtitle="Feel free to reach out for collaborations or just a friendly chat."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-start gap-4 group">
            <div className="p-3 bg-yellow-900/30 dark:bg-yellow-900/30 rounded-xl group-hover:bg-yellow-900/50 dark:group-hover:bg-yellow-900/50 transition-colors">
              <FiMail className="w-6 h-6 text-yellow-400 dark:text-yellow-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-100 dark:text-yellow-100 mb-1 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors">
                Email
              </h3>
              <a 
                href="mailto:arjunvaradiyil203@gmail.com" 
                className="text-yellow-200 dark:text-yellow-200 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
              >
                arjunvaradiyil203@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="p-3 bg-yellow-900/30 dark:bg-yellow-900/30 rounded-xl group-hover:bg-yellow-900/50 dark:group-hover:bg-yellow-900/50 transition-colors">
              <FiPhone className="w-6 h-6 text-yellow-400 dark:text-yellow-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-100 dark:text-yellow-100 mb-1 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors">
                Phone
              </h3>
              <a 
                href="tel:+919946642065" 
                className="text-yellow-200 dark:text-yellow-200 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
              >
                +91 9946642065
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="p-3 bg-yellow-900/30 dark:bg-yellow-900/30 rounded-xl group-hover:bg-yellow-900/50 dark:group-hover:bg-yellow-900/50 transition-colors">
              <FiMapPin className="w-6 h-6 text-yellow-400 dark:text-yellow-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-100 dark:text-yellow-100 mb-1 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors">
                Location
              </h3>
              <p className="text-yellow-200 dark:text-yellow-200">
                Malappuram, Kerala
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8">
            <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent mb-4">
              Let's Connect
            </h3>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/arjunvaradiyill"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black dark:bg-black border border-yellow-900 dark:border-yellow-900 rounded-xl hover:bg-yellow-900/30 dark:hover:bg-yellow-900/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 text-yellow-400 dark:text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.166 8.839 21.489C9.339 21.581 9.5 21.27 9.5 21.006C9.5 20.742 9.5 20.134 9.5 19.311C6.73 19.91 6.14 17.937 6.14 17.937C5.68 16.916 5.03 16.609 5.03 16.609C4.12 15.971 5.1 15.987 5.1 15.987C6.08 16.06 6.63 17.034 6.63 17.034C7.5 18.467 8.97 17.985 9.54 17.721C9.63 17.06 9.89 16.577 10.17 16.319C7.95 16.061 5.62 15.271 5.62 11.5C5.62 10.39 6.01 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C17.99 9.5 18.38 10.39 18.38 11.5C18.38 15.282 16.04 16.06 13.82 16.31C14.17 16.62 14.5 17.24 14.5 18.18C14.5 19.5 14.5 20.65 14.5 21C14.5 21.27 14.66 21.59 15.17 21.49C19.138 20.164 22 16.419 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/arjunvaradiyill/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black dark:bg-black border border-yellow-900 dark:border-yellow-900 rounded-xl hover:bg-yellow-900/30 dark:hover:bg-yellow-900/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 text-yellow-400 dark:text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="currentColor"/>
                  <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="currentColor"/>
                  <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13.5V18C16 18.5523 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V13.5C19 9 13 9.00001 11 13V10C11 9.44772 10.5523 9 10 9H9C8.44771 9 8 9.44772 8 10V18C8 18.5523 8.44771 19 9 19H10C10.5523 19 11 18.5523 11 18V13.5" fill="currentColor"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="https://www.instagram.com/_arjuo__/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black dark:bg-black border border-yellow-900 dark:border-yellow-900 rounded-xl hover:bg-yellow-900/30 dark:hover:bg-yellow-900/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiInstagram className="w-6 h-6 text-yellow-400 dark:text-yellow-400" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-black dark:bg-black rounded-2xl p-8 shadow-xl border border-yellow-900 dark:border-yellow-900 relative overflow-hidden"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-yellow-300 dark:text-yellow-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black dark:bg-black border border-yellow-900 dark:border-yellow-900 focus:border-yellow-500 dark:focus:border-yellow-400 text-yellow-200 dark:text-yellow-200 rounded-lg focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="from_email" className="block text-sm font-medium text-yellow-300 dark:text-yellow-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black dark:bg-black border border-yellow-900 dark:border-yellow-900 focus:border-yellow-500 dark:focus:border-yellow-400 text-yellow-200 dark:text-yellow-200 rounded-lg focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-yellow-300 dark:text-yellow-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-black dark:bg-black border border-yellow-900 dark:border-yellow-900 focus:border-yellow-500 dark:focus:border-yellow-400 text-yellow-200 dark:text-yellow-200 rounded-lg focus:outline-none transition-colors"
                placeholder="How can I help you?"
              />
            </div>

            <input type="hidden" name="to_name" value="Arjun V" />
            <input type="hidden" name="reply_to" value={formData.from_email} />

            <div className="text-right">
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium rounded-lg hover:from-yellow-500 hover:to-yellow-700 focus:outline-none transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>

            {status === 'success' && (
              <div className="mt-4 p-3 bg-black border border-yellow-500 text-yellow-400 rounded-lg">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 p-3 bg-black border border-red-500 text-red-400 rounded-lg">
                Failed to send message. Please try emailing me directly.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Contact; 