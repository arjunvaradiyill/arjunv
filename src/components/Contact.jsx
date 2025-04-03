'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiInstagram } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import SectionContainer from './SectionContainer';

// No need to initialize here - will be handled in the component

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  // Initialize EmailJS when the component mounts
  useEffect(() => {
    // This ensures EmailJS is only initialized once in the client
    emailjs.init("Q6v1YzpDR9rdQvDQV");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      // Using send method instead of sendForm to avoid 404 errors
      const result = await emailjs.send(
        'service_pq8kcsc', // Your EmailJS service ID
        'template_4s4uyrb', // Your EmailJS template ID
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
          to_name: "Arjun V",
          reply_to: formData.from_email
        }
      );
      
      console.log('Email sent successfully:', result.text);
      setStatus('success');
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      
      // Create a more detailed error message
      let errorMsg = 'Failed to send message. Please use WhatsApp or email me directly.';
      if (error.text) {
        errorMsg = `Error: ${error.text}`;
      } else if (error.message) {
        errorMsg = `Error: ${error.message}`;
      }
      
      setErrorMessage(errorMsg);
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
              <div className="flex items-center gap-3">
                <a 
                  href="tel:+919946642065" 
                  className="text-yellow-200 dark:text-yellow-200 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
                >
                  +91 9946642065
                </a>
                <a 
                  href="https://wa.me/919946642065" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-2 py-1 bg-green-600/30 text-green-300 rounded-lg hover:bg-green-600/50 transition-colors text-sm"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
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
          className="relative bg-black/60 backdrop-blur-sm rounded-xl p-8 transition-all duration-300 overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(145deg, rgba(45,45,45,0.3), rgba(10,10,10,0.5))',
            boxShadow: '0 10px 30px -15px rgba(234, 179, 8, 0.3)'
          }}
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-yellow-500/30 via-yellow-700/20 to-transparent -z-10"></div>
          
          {/* Background elements */}
          <div className="absolute -right-12 top-0 w-36 h-36 bg-yellow-500/5 rounded-full blur-xl"></div>
          <div className="absolute -left-12 -bottom-12 w-36 h-36 bg-yellow-500/10 rounded-full blur-xl"></div>
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-yellow-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/40 border border-yellow-700/50 focus:border-yellow-500 text-yellow-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500/50 transition-all backdrop-blur-sm"
                placeholder="John Doe"
                style={{boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'}}
              />
            </div>

            <div>
              <label htmlFor="from_email" className="block text-sm font-medium text-yellow-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/40 border border-yellow-700/50 focus:border-yellow-500 text-yellow-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500/50 transition-all backdrop-blur-sm"
                placeholder="john@example.com"
                style={{boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'}}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-yellow-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-black/40 border border-yellow-700/50 focus:border-yellow-500 text-yellow-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500/50 transition-all backdrop-blur-sm"
                placeholder="How can I help you?"
                style={{boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'}}
              />
            </div>

            <div className="text-right flex flex-col md:flex-row justify-end items-center gap-4">
              <motion.a
                href={`https://wa.me/919946642065?text=Hi Arjun, I'm ${encodeURIComponent(formData.from_name)} (${encodeURIComponent(formData.from_email)}). ${encodeURIComponent(formData.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-800 focus:outline-none transition-all shadow-md hover:shadow-green-500/20 flex items-center justify-center"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.5 0C5.149 0 0 5.149 0 11.5c0 2.517.81 4.85 2.187 6.745L.756 22.77c-.124.414.235.773.65.65l4.517-1.428C7.815 23.19 10.148 24 12.666 24c6.35 0 11.5-5.149 11.5-11.5S17.85 0 11.5 0zm0 22C6.36 22 2.186 17.825 2.186 12.687c0-5.139 4.176-9.313 9.314-9.313 5.138 0 9.313 4.174 9.313 9.313 0 5.14-4.174 9.314-9.313 9.314z" fillRule="evenodd"/>
                </svg>
                Message on WhatsApp
              </motion.a>
              
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium rounded-lg hover:from-yellow-500 hover:to-yellow-700 focus:outline-none transition-all shadow-md hover:shadow-yellow-500/20"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(234, 179, 8, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Email'}
              </motion.button>
            </div>
            
            <p className="text-yellow-400/70 text-sm text-center mt-4">
              Choose WhatsApp for instant communication or email for detailed inquiries.
            </p>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-black/60 border border-yellow-500 text-yellow-400 rounded-lg backdrop-blur-sm"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-black/60 border border-red-500 text-red-400 rounded-lg backdrop-blur-sm"
              >
                {errorMessage}
                <div className="mt-3 flex flex-col sm:flex-row gap-3">
                  <a 
                    href={`https://wa.me/919946642065?text=Hi Arjun, I'm ${encodeURIComponent(formData.from_name)} (${encodeURIComponent(formData.from_email)}). ${encodeURIComponent(formData.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600/30 text-green-300 rounded-lg hover:bg-green-600/50 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    </svg>
                    Send via WhatsApp Instead
                  </a>
                  <a 
                    href={`mailto:arjunvaradiyil203@gmail.com?subject=Contact from Portfolio&body=Name: ${formData.from_name}%0D%0AEmail: ${formData.from_email}%0D%0A%0D%0AMessage: ${formData.message}`} 
                    className="inline-flex items-center px-4 py-2 bg-yellow-600/30 text-yellow-300 rounded-lg hover:bg-yellow-600/50 transition-colors"
                  >
                    <FiMail className="mr-2" /> Send via Email Instead
                  </a>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Contact; 