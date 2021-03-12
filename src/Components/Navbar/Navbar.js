import "./Navbar.css";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavItems />
    </div>
  );
}

const NavItems = () => {
  return (
    <motion.ul
      initial={{ y: "-70%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ delay: "0.3", duration: "0.4" }}
      className="navitems_container"
    >
      <li>menu</li>
    </motion.ul>
  );
};
