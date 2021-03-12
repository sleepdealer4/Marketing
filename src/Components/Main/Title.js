import "./Title.css";
import ImageHover from "./ImageHover";
import model from "./2pin.jpg";
import { motion } from "framer-motion";

const textVariants = {
  in: {
    y: "130%",
  },
  animate: {
    y: "0",
  },
  transition: {
    delay: "0.2",
    duration: "2",
    ease: [0.33, 1, 0.44, 1],
  },
};

export default function Title() {
  return (
    <>
      <div className="showreel"></div>
      <motion.div>
        <motion.div className="title_main">
          <motion.div
            variants={textVariants}
            initial="in"
            animate="animate"
            transition={{ duration: 0.6 }}
            className="title_text_little"
          >
            We make it happen
          </motion.div>
        </motion.div>
        <div classNames="title_wrapper">
          <motion.div className="text_delimiter margin_left">
            <motion.div
              variants={textVariants}
              initial="in"
              animate="animate"
              transition={{ delay: 0.3, duration: 0.7 }}
              className="title_moto title_moto1"
            >
              Websites
            </motion.div>

            <motion.div
              variants={textVariants}
              initial="in"
              animate="animate"
              transition={{ delay: 0.3, duration: 1.2 }}
              className="title_moto2 title_moto"
            >
              <span className="advertisment_text">Ads</span>
            </motion.div>

            <motion.div
              variants={textVariants}
              initial="in"
              animate="animate"
              transition={{ delay: 0.3, duration: 1.6 }}
              className="title_moto3 title_moto margin-right"
            >
              Branding
            </motion.div>
          </motion.div>
        </div>
        <Span />
        <Carrousel />
      </motion.div>
      <ImageHover source={model} align="end" />
    </>
  );
}

const Span = () => {
  return (
    <div className="span1">
      Leading digital agency with solid design and development expertise. We
      build readymade websites, mobile applications, and elaborate online
      business services.
    </div>
  );
};

const Carrousel = () => {
  return (
    <div className="carrousel_container">
      <div className="strategy_wrapper">
        <span className="outline">Strategy</span>
        <span>Strategy</span>
        <span className="outline">Strategy</span>
        <span>Strategy</span>
        <span className="outline">Strategy</span>
        <span>Strategy</span>
        <span className="outline">Strategy</span>
        <span>Strategy</span>
        <span className="outline">Strategy</span>
        <span>Strategy</span>
        <span className="outline">Strategy</span>
        <span>Strategy</span>
        <span className="outline">Strategy</span>
        <span>Strategy</span>
        <span className="outline">Strategy</span>
        <span>Strategy</span>
        <span className="outline">Strategy</span>
        <span>Strategy</span>
        <span className="outline">Strategy</span>
        <span>Strategy</span>
        <span className="outline">Strategy</span>
        <span>Strategy</span>
        <span className="outline">Strategy</span>
        <span>Strategy</span>
        <span className="outline">Strategy</span>
        <span>Strategy</span>
        <span className="outline">Strategy</span>
        <span>Strategy</span>
        <span className="outline">Strategy</span>
        <span>Strategy</span>
        <span className="outline">Strategy</span>
        <span>Strategy</span>
        <span className="outline">Strategy</span>
        <span>Strategy</span>
        <span className="outline">Strategy</span>
        <span>Strategy</span>
      </div>

      <div className="design_wrapper">
        <span>Design</span>
        <span className="outline">Design</span>
        <span>Design</span>
        <span className="outline">Design</span>
        <span>Design</span>
        <span className="outline">Design</span>
        <span>Design</span>
        <span className="outline">Design</span>
        <span>Design</span>
        <span className="outline">Design</span>
        <span>Design</span>
        <span className="outline">Design</span>
        <span>Design</span>
        <span className="outline">Design</span>
        <span>Design</span>
      </div>

      <div className="developement_wrapper">
        <span className="outline">Developement</span>
        <span>Developement</span>
        <span className="outline">Developement</span>
        <span>Developement</span>
        <span className="outline">Developement</span>
        <span>Developement</span>
        <span className="outline">Developement</span>
        <span>Developement</span>
        <span className="outline">Developement</span>
        <span>Developement</span>
        <span className="outline">Developement</span>
        <span>Developement</span>
        <span className="outline">Developement</span>
        <span>Developement</span>
        <span className="outline">Developement</span>
      </div>

      <div className="marketing_wrapper">
        <span>Marketing</span>
        <span className="outline">Marketing</span>
        <span>Marketing</span>
        <span className="outline">Marketing</span>
        <span>Marketing</span>
        <span className="outline">Marketing</span>
        <span>Marketing</span>
        <span className="outline">Marketing</span>
        <span>Marketing</span>
        <span className="outline">Marketing</span>
        <span>Marketing</span>
        <span className="outline">Marketing</span>
        <span>Marketing</span>
        <span className="outline">Marketing</span>
      </div>
    </div>
  );
};
