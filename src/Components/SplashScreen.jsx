import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import "./SplashScreen.css";

const SplashScreen = ({ onFinish }) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExit(true);
      setTimeout(onFinish, 1000); // Calls onFinish() after animation
    }, 4000);
  }, [onFinish]);

  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: exit ? 0 : 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="logo-container"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0.5, 1.2, 1], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/3.png" alt="PAKTECH" className="logo" />
      </motion.div>

      {/* <motion.h1
        className="brand-name"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        PAKTECH
      </motion.h1> */}

      <motion.div
        className="tagline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <ReactTyped
          strings={[
            "We provide top-notch digital marketing solutions.",
          ]}
          typeSpeed={40}
          backSpeed={30}
          showCursor={false}
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
