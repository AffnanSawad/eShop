import React from "react";
import { motion } from "framer-motion";

const pageFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const headingUnderline = {
  hidden: { width: 0 },
  visible: { width: "2.5rem", transition: { duration: 0.6, ease: "easeOut" } },
};

const cardHover = {
  scale: 1.02,
  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  transition: { duration: 0.25, ease: "easeInOut" },
};

export default function AboutEShop() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={pageFade}
      className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50 flex flex-col items-center py-16 px-6 md:px-16"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-semibold text-indigo-900 mb-12 tracking-tight"
      >
        About eShop
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-3xl w-full space-y-10"
      >
        {/* Who We Are */}
        <motion.div
          variants={fadeUp}
          whileHover={cardHover}
          className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer"
        >
          <motion.h2
            className="text-3xl font-semibold text-indigo-800 mb-4 relative inline-block"
          >
            Who We Are
            <motion.div
              variants={headingUnderline}
              initial="hidden"
              animate="visible"
              className="h-0.5 bg-indigo-600 rounded-full absolute left-0 bottom-0"
            />
          </motion.h2>
          <p className="text-gray-700 text-base font-semibold leading-relaxed tracking-wide">
            eShop is a premier e-commerce platform delivering a curated range of premium products
            with exceptional service. Our innovative technology ensures a seamless and secure
            shopping experience for customers worldwide.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          variants={fadeUp}
          whileHover={cardHover}
          className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer"
        >
          <motion.h2
            className="text-3xl font-semibold text-indigo-800 mb-4 relative inline-block"
          >
            Our Mission & Vision
            <motion.div
              variants={headingUnderline}
              initial="hidden"
              animate="visible"
              className="h-0.5 bg-indigo-600 rounded-full absolute left-0 bottom-0"
            />
          </motion.h2>
          <p className="text-gray-700 text-base font-semibold leading-relaxed tracking-wide mb-3">
            Our mission is to revolutionize online retail by offering curated products, outstanding
            customer service, and innovative shopping solutions.
          </p>
          <p className="text-gray-700 text-base font-semibold leading-relaxed tracking-wide">
            We envision eShop as the trusted digital marketplace where convenience and quality
            empower confident customer choices.
          </p>
        </motion.div>

        {/* Why Choose eShop? */}
        <motion.div
          variants={fadeUp}
          whileHover={cardHover}
          className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer"
        >
          <motion.h2
            className="text-3xl font-semibold text-indigo-800 mb-4 relative inline-block"
          >
            Why Choose eShop?
            <motion.div
              variants={headingUnderline}
              initial="hidden"
              animate="visible"
              className="h-0.5 bg-indigo-600 rounded-full absolute left-0 bottom-0"
            />
          </motion.h2>
          <ul className="list-disc list-inside text-gray-700 text-base font-semibold space-y-3 tracking-wide">
            <li>Wide selection from trusted brands and sellers.</li>
            <li>Secure, encrypted transactions.</li>
            <li>Fast delivery with real-time tracking.</li>
            <li>24/7 dedicated customer support.</li>
            <li>Intuitive interface with personalized recommendations.</li>
            <li>Constant innovation to enhance your experience.</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
