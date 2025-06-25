import { useState } from "react";
// import { myProjects } from "./myProjects";
import "./Main.css";
import { AnimatePresence, motion } from "framer-motion";
// @ts-ignore
import Capture from "../../img/Capture41.png";
// @ts-ignore
import amzaon from "../../img/amazon.png";
// @ts-ignore
import tec from "../../img/teco.png";
// @ts-ignore
import shop from "../../img/shop.png";
// @ts-ignore
import cal from "../../img/cal.png";
// @ts-ignore
import Quran from "../../img/Quran.png";
// @ts-ignore
import trvel from "../../img/trvel.jpg";
// @ts-ignore
import wether from "../../img/wether.jpg";
const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");

  // const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    // const newArr = myProjects.filter((item) => {
    // const ZZZ = item.category.find((myItem) => {
    //   return myItem === buttonCategory;
    // });
    // return ZZZ === buttonCategory;
    // });
    // setArr(newArr);
  };

  return (
    <main className="flex">
      {/* <section className="  flex left-section">
        <button
          onClick={() => {
            handleClick("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML& CSS
        </button>
        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            handleClick("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node &Express
        </button>
      </section> */}

      <section className=" flex   right-section">
        <AnimatePresence>
          {/* {arr.map((item) => { */}
          <a href="https://task-nine-liard.vercel.app/" target="_blank">
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              className=" card"
            >
              <img width={245} src={tec} alt="" />
              <div style={{ width: "245px" }} className="box">
                <h1 className="title">{}</h1>
                <p className="subtitle">
                  Techco provides innovative IT services, consulting, and custom
                  software to boost business growth and digital efficiency.
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <a
                      href="https://github.com/DevnityCode/DevnityCode-Thehco"
                      target="_blank"
                    >
                      {" "}
                      <div className="icon-github"></div>
                    </a>
                  </div>

                  {/* <a className="link flex" href="qqqq">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a> */}
                </div>
              </div>
            </motion.article>
          </a>
          <a
            href="https://asmaylmr117-ecommerce-furniture-store-main.vercel.app/"
            target="_blank"
          >
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              className=" card"
            >
              <img width={245} src={Capture} alt="" />
              <div style={{ width: "245px" }} className="box">
                <h1 className="title">{}</h1>
                <p className="subtitle">
                  A modern furniture e-commerce site with user-friendly design,
                  built using HTML5, CSS3, Tailwind, TypeScript, and Next.js.
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <a
                      href="https://github.com/DevnityCode/DevnityCode-furniture"
                      target="_blank"
                    >
                      <div className="icon-github"></div>
                    </a>
                  </div>
                  {/* 
                <a className="link flex" href="qqqq">
                  more
                  <span
                    style={{ alignSelf: "end" }}
                    className="icon-arrow-right"
                  ></span>
                </a> */}
                </div>
              </div>
            </motion.article>
          </a>
          <a href="https://amazon-clone-theta-dun.vercel.app/" target="_blank">
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              className=" card"
            >
              <img width={245} src={amzaon} alt="" />
              <div style={{ width: "245px" }} className="box">
                <h1 className="title">{}</h1>
                <p className="subtitle">
                  An Amazon-inspired e-commerce site with smooth shopping
                  experience, built using React, Redux, Tailwind, and validation
                  tools.
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <a
                      href="https://github.com/DevnityCode/DevnityCode-Amazon"
                      target="_blank"
                    >
                      <div className="icon-github"></div>
                    </a>
                  </div>

                  {/* <a className="link flex" href="qqqq">
                  more
                  <span
                    style={{ alignSelf: "end" }}
                    className="icon-arrow-right"
                  ></span>
                </a> */}
                </div>
              </div>
            </motion.article>
          </a>
          <a href="https://shop-co-front.vercel.app/" target="_blank">
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              className=" card"
            >
              <img width={245} src={shop} alt="" />
              <div style={{ width: "245px" }} className="box">
                <h1 className="title">{}</h1>
                <p className="subtitle">
                  A stylish online clothing store offering easy browsing and
                  secure shopping, built with React, Redux, and Tailwind CSS.
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <a
                      href="https://github.com/DevnityCode/DevnityCode-shop"
                      target="_blank"
                    >
                      {" "}
                      <div className="icon-github"></div>
                    </a>
                  </div>
                  {/* 
                <a className="link flex" href="qqqq">
                  more
                  <span
                    style={{ alignSelf: "end" }}
                    className="icon-arrow-right"
                  ></span>
                </a> */}
                </div>
              </div>
            </motion.article>
          </a>
          
          <a href="https://devnitycode.github.io/Quran/" target="_blank">
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              className=" card"
            >
              <img width={245} height={150} src={Quran} alt="" />
              <div style={{ width: "245px" }} className="box">
                <h1 className="title">{}</h1>
                <p className="subtitle">
                  A peaceful platform for spiritual growth with Quran
                  recitations, prayers, and digital rosary using .
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <a
                      href="https://github.com/DevnityCode/Quran"
                      target="_blank"
                    >
                      <div className="icon-github"></div>
                    </a>
                  </div>
                  {/* 
                <a className="link flex" href="qqqq">
                  more
                  <span
                    style={{ alignSelf: "end" }}
                    className="icon-arrow-right"
                  ></span>
                </a> */}
                </div>
              </div>
            </motion.article>
          </a>
          <a href="https://devnitycode.github.io/travel-site/" target="_blank">
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              className=" card"
            >
              <img width={245} height={140} src={trvel} alt="" />
              <div style={{ width: "245px" }} className="box">
                <h1 className="title">{}</h1>
                <p className="subtitle">
                  Tourism Site inspires users to explore top global destinations
                  through a visually stunning and engaging website experience.
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <a
                      href="https://github.com/DevnityCode/travel-site"
                      target="_blank"
                    >
                      {" "}
                      <div className="icon-github"></div>
                    </a>
                  </div>
                  {/* 
                <a className="link flex" href="qqqq">
                  more
                  <span
                    style={{ alignSelf: "end" }}
                    className="icon-arrow-right"
                  ></span>
                </a> */}
                </div>
              </div>
            </motion.article>
          </a>
          <a href=" https://devnitycode.github.io/Weather-App/" target="_blank">
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              className=" card"
            >
              <img width={245} height={157} src={wether} alt="" />
              <div style={{ width: "245px" }} className="box">
                <h1 className="title">{}</h1>
                <p className="subtitle">
                  The Weather App teaches web learners to use HTML, CSS, and
                  JavaScript to display real-time weather data via APIs.
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <a
                      href="https://github.com/DevnityCode/Weather-App"
                      target="_blank"
                    >
                      {" "}
                      <div className="icon-github"></div>
                    </a>
                  </div>
                  {/* 
                <a className="link flex" href="qqqq">
                  more
                  <span
                    style={{ alignSelf: "end" }}
                    className="icon-arrow-right"
                  ></span>
                </a> */}
                </div>
              </div>
            </motion.article>
          </a>
          <a href="https://devnitycode.github.io/calculator/" target="_blank">
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              className=" card"
            >
              <img width={245} height={140} src={cal} alt="" />
              <div style={{ width: "245px" }} className="box">
                <h1 className="title">{}</h1>
                <p className="subtitle">
                  The Calculator Project teaches beginners to build an
                  interactive calculator using HTML, CSS, and JavaScript in a
                  practical way.
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <a
                      href="https://github.com/DevnityCode/calculator"
                      target="_blank"
                    >
                      <div className="icon-github"></div>
                    </a>
                  </div>

                  {/* <a className="link flex" href="qqqq">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a> */}
                </div>
              </div>
            </motion.article>
          </a>
        
          ); )
        </AnimatePresence>
      </section>
    </main>
  );
};
export default Main;
