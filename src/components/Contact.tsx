import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [result, setResult] = React.useState("Submit");
  const [isSuccess, setIsSuccess] = React.useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thanks for your feedback!");
      setIsSuccess(true);
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setIsSuccess(false);
    }
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-purple-500" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Email</h4>
                  <a href="mailto:rishigurav143@gmail.com" className="hover:text-purple-500 transition-colors">
                    rishigurav143@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                  <Github size={20} className="text-purple-500" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">GitHub</h4>
                  <a href="https://github.com/rushi-gurav" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
                    github.com/rushi-gurav
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                  <Linkedin size={20} className="text-purple-500" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/rushikesh-gurav-code/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
                    linkedin.com/in/rushikesh-gurav-code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={onSubmit} className="space-y-6">
            <input type="hidden" name="access_key" value="ad71002e-9f65-4c74-9c4b-d50d1026cd1a" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                {result}
              </button>
            </form>
            {isSuccess && (
              <p className="text-green-500 mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">Thanks for your feedback!</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;