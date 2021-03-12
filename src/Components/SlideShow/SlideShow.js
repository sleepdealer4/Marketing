import "./SlideShow.css";

import { motion } from "framer-motion";

import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";

const variants = {
  hover: {
    width: "auto",
    overflow: "visible",
  },
  initial: {
    overflow: "hidden",
    width: "200px",
  },
  transition: {
    duration: "0.5",
  },
};

export default function SlideShow() {
  return (
    <div className="slideshow_container">
      <motion.div
        variants={variants}
        whileHover="hover"
        transition="transition"
        className="image_wrapper"
      >
        <img src={img1} />
      </motion.div>

      <motion.div
        variants={variants}
        transition="transition"
        whileHover="hover"
        className="image_wrapper"
      >
        <img src={img2} />
      </motion.div>

      <motion.div
        variants={variants}
        transition="transition"
        whileHover="hover"
        className="image_wrapper"
      >
        <img src={img3} />
      </motion.div>

      <motion.div
        variants={variants}
        transition="transition"
        whileHover="hover"
        className="image_wrapper"
      >
        <img src={img4} />
      </motion.div>

      <motion.div
        variants={variants}
        initial="initial"
        transition="transition"
        whileHover="hover"
        className="image_wrapper"
      >
        <img src={img5} />
      </motion.div>
    </div>
  );
}
