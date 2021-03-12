import "./App.css";

import Navbar from "../Navbar/Navbar";
import Cursor from "../Cursor/Cursor";
import { motion } from "framer-motion";
import Sandwich from "../Navbar/Sandwich";
import Title from "../Main/Title";
import ImageHover from "../Main/ImageHover";
import { useEffect, useState } from "react";

function App() {
  return (
    <motion.div className="App">
      <Sandwich />
      <Cursor />
      <Navbar />
      <Title />
      <BackgroundChange />
    </motion.div>
  );
}

const BackgroundChange = () => {
  const [color, setColor] = useState("transparent");

  const changeBackground = () => {
    if (window.scrollY >= 650) {
      setColor("#F4EDF5");
    }
    if (window.scrollY === 0) {
      setColor("black");
    }
    if (window.scrollY > 1 && window.scrollY < 650) {
      setColor("#F6F9F0");
    }

    if (window.scrollY > 1400) {
      setColor("#FFC7C0");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  });

  return <div className="background" style={{ backgroundColor: color }}></div>;
};

export default App;
