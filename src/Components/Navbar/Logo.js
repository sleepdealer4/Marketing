import "./Logo.css";
import Alture from "./Alture.jpg";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="logo_container">
      <motion.img
        whileHover={{ scale: 1.7 }}
        src={Alture}
        alt="alture_logo"
        className="logo"
      />
    </div>
  );
}
