import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Swal from "sweetalert2";

const inputVariants = {
  focused: { scale: 1.05, boxShadow: "0 0 8px rgba(59, 130, 246, 0.6)" },
  unfocused: { scale: 1, boxShadow: "none" },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)" },
  tap: { scale: 0.95 },
};

export default function ContactPage() {
 
 
 
  const handleMessage = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill out all fields before submitting.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Submitted Successfully",
      text: "Your request has been sent!",
    });

    form.reset(); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center py-16 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-blue-700 mb-8"
      >
        Get In Touch
      </motion.h1>

      <Helmet>
        <title>eShop | Contact</title>
      </Helmet>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white p-8 rounded-xl shadow-lg"
          onSubmit={handleMessage}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileFocus="focused"
              variants={inputVariants}
              initial="unfocused"
              transition={{ type: "spring", stiffness: 300 }}
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileFocus="focused"
              variants={inputVariants}
              initial="unfocused"
              transition={{ type: "spring", stiffness: 300 }}
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileFocus="focused"
              variants={inputVariants}
              initial="unfocused"
              transition={{ type: "spring", stiffness: 300 }}
              placeholder="Write your message here..."
            ></motion.textarea>
          </div>

          <motion.button
            type="submit"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-blue-600 text-white font-semibold py-3 rounded-md w-full shadow-md"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info & Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col justify-between"
        >
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Contact Info</h2>
            <div className="flex items-center mb-6 space-x-4 text-gray-700">
              <FiPhone className="text-blue-600 w-6 h-6" />
              <p className="text-lg">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center mb-6 space-x-4 text-gray-700">
              <FiMail className="text-blue-600 w-6 h-6" />
              <p className="text-lg">contact@yourdomain.com</p>
            </div>
            <div className="flex items-center mb-6 space-x-4 text-gray-700">
              <FiMapPin className="text-blue-600 w-6 h-6" />
              <p className="text-lg">123 Main Street, City, Country</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg h-64 bg-gray-200">
            <iframe
              title="Company Location"
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
