import "./Sandwich.css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Sandwich() {
  const [isScrolled, setScroll] = useState(false);
  const [isClicked, setClick] = useState(false);

  useEffect(() => {
    const wrapper1 = document.querySelector(".item_wrapper1");
    const wrapper2 = document.querySelector(".item_wrapper2");
    const wrapper3 = document.querySelector(".item_wrapper3");

    const blur = document.querySelector(".blur");
    const navItems = document.querySelectorAll(".nav_item1");
    const navItems2 = document.querySelectorAll(".nav_item2");
    const navItems3 = document.querySelectorAll(".nav_item3");

    blur.addEventListener("click", () => {
      setClick(false);
    });

    wrapper3.addEventListener("mouseover", () => {
      navItems3.forEach((item) => {
        item.classList.add("translate");
      });
    });

    wrapper3.addEventListener("mouseleave", () => {
      navItems3.forEach((item) => {
        item.classList.remove("translate");
      });
    });

    wrapper2.addEventListener("mouseover", () => {
      navItems2.forEach((item) => {
        item.classList.add("translate");
      });
    });

    wrapper2.addEventListener("mouseleave", () => {
      navItems2.forEach((item) => {
        item.classList.remove("translate");
      });
    });

    wrapper1.addEventListener("mouseover", () => {
      navItems.forEach((item) => {
        item.classList.add("translate");
      });
    });

    wrapper1.addEventListener("mouseleave", () => {
      navItems.forEach((item) => {
        item.classList.remove("translate");
      });
    });

    document.addEventListener("scroll", () => {
      if (document.scrollY > 5) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });

    return () => {
      wrapper3.removeEventListener("mouseover", () => {
        navItems3.forEach((item) => {
          item.classList.add("translate");
        });
      });

      wrapper3.removeEventListener("mouseleave", () => {
        navItems3.forEach((item) => {
          item.classList.remove("translate");
        });
      });

      wrapper2.removeEventListener("mouseover", () => {
        navItems2.forEach((item) => {
          item.classList.add("translate");
        });
      });

      wrapper2.removeEventListener("mouseleave", () => {
        navItems2.forEach((item) => {
          item.classList.remove("translate");
        });
      });

      wrapper1.addEventListener("mouseover", () => {
        navItems.forEach((item) => {
          item.classList.add("translate");
        });
      });

      wrapper1.addEventListener("mouseleave", () => {
        navItems.forEach((item) => {
          item.classList.remove("translate");
        });
      });
    };
  }, []);

  return (
    <>
      <div
        onClick={() => {
          setClick(!isClicked);
        }}
        className="sandwich_container"
      >
        <div className="sandwich_wrapper">
          <motion.div
            initial={{ rotateZ: "0deg", x: "0" }}
            animate={{
              rotateZ: isClicked ? "45deg" : "0deg",
              y: isClicked ? "4.25px" : "0",
            }}
            transition={{ duration: 0.2, type: "keyframess" }}
            className="line1"
            style={{ backgroundColor: isScrolled ? "black" : "white" }}
          ></motion.div>
          <motion.div
            className="line2"
            initial={{ rotateZ: "0deg", x: "0" }}
            animate={{
              rotateZ: isClicked ? "-45deg" : "0deg",
              y: isClicked ? "-4.25px" : "0",
            }}
            transition={{ duration: 0.2, type: "keyframess" }}
            style={{ backgroundColor: isScrolled ? "black" : "white" }}
          ></motion.div>
        </div>
      </div>

      <div
        className="blur"
        style={{ display: isClicked ? "block" : "none" }}
      ></div>

      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: isClicked ? "0" : "100%", opacity: 1 }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="sideBar"
      >
        <div className="social">
          <div className="sidebar_social_title">Social</div>
          <div className="social_link">Facebook</div>

          <div className="social_link">Instagram</div>
          <div className="social_link">LinkedIn</div>
        </div>

        <div className="menu">
          <div className="sidebar_menu_title">Menu</div>
          <div className="item_wrapper1">
            <div className="nav_item1">Contacts</div>
            <div className="nav_item1">Contacts</div>
          </div>
          <div className="item_wrapper2">
            <div className="nav_item2">About</div>
            <div className="nav_item2">About</div>
          </div>
          <div className="item_wrapper3">
            <div className="nav_item3">Services</div>
            <div className="nav_item3">Services</div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
