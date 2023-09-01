import Layout from "./Layout";
import contactStyles from "../styles/Contact.module.css";
import { motion } from "framer-motion";

import { Parallax } from "react-parallax";
import Footer from "./Footer";
const Contact = () => {
  return (
    <div className={contactStyles.wrapper}>
      <Parallax
        strength={500}
        bgImage="images/drums.webp"
        className={contactStyles.banner}
      >
        <Layout />{" "}
        <div className={contactStyles.textWrapper}>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            Get in Touch
          </motion.h1>

          <h2 className={contactStyles.email}>booking@runaway.com</h2>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
};
export default Contact;
