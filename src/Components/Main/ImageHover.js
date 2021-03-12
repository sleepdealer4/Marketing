import "./ImageHover.css";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ImageHover(props) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "none", duration: 2 });

    const tl = gsap.timeline();
    tl.from(".img1", { yPercent: 100 }).from(".img2", { yPercent: -100 });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".imageHover_container",
      start: "-80px top",
      end: "+=1400",
      scrub: true,
      pin: true,
      anticipatePin: true,
      pinSpacing: false,
    });
  }, []);

  return (
    <div style={{ textAlign: props.align }} className="section_wrapper">
      <div className="imageHover_container">
        <img className="img1" src={props.source} alt="model" />
        <img className="img2" src={props.source} alt="model" />
        <img className="img3" src={props.source} alt="model" />
      </div>
    </div>
  );
}
