import React, { useRef } from "react";
import "./Hero.css";
import Lottie from "lottie-react";
import deveAnimation from "../animation/deve.json";
import { motion } from "framer-motion";
// export { default as FontAwesomeIcon } from ''
const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="../../../icon.co.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">Programming Company </h1>
        <p className="subtitle">
          We are a full-stack web development and Flutter application
          development company, with robust data analytics support. Our team
          combines technical expertise with analytical insights to deliver
          smart, integrated solutions that help our clients grow with
          confidence.{" "}
        </p>
        <div className="icons  flex">
          {/* <i className="icon fa-brands fa-facebook"></i>  */}
          <a
            href="https://www.facebook.com/profile.php?id=61576445654539&locale=ar_AR"
            target="_blank" 
            className="icon"
          >
            {" "}
            <div className=" icon fa-brands fa-facebook"></div>
          </a>
          <a
            href="https://www.tiktok.com/@devnity.code?_t=ZS-8wtsbYwr2ng&_r=1"
            target="_blank"
          >
            {" "}
            <div className="icon fab fa-tiktok"></div>{" "}
          </a>
          <a href="https://www.instagram.com/devnitycode/" target="_blank">
            {" "}
            <div className="icon icon-instagram"></div>
          </a>
          <a href="https://github.com/DevnityCode" target="_blank">
            {" "}
            <div className="icon icon-github"></div>
          </a>
          <a
            href="https://www.linkedin.com/in/devnity-code-2a2787371/"
            target="_blank"
          >
            {" "}
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>
      <div className="right-section animation  ">
        <Lottie
          className=""
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // @ts-ignore
            lottieRef.current.setSpeed(0.5);
          }}
          // style={{ height: 350,width: 400 }}
          animationData={deveAnimation}
        />
      </div>
    </section>
  );
};
export default Hero;
