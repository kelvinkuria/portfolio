import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Your partner in weighing solutions
          <br /> and material handling.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="https://th.bing.com/th/id/R.2d630555374cf483fe05fd5ab06f337f?rik=TaWDYHHYlYHpfQ&pid=ImgRaw&r=0    " alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Weighing</motion.b> Solutions
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Weighing solutions</h2>
          <p>
          We deliver tailored weighing solutions with precision weight scales and systems, catering to diverse industrial and commercial requirements for accurate measurements and efficient operations.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>WeighingSoftware</h2>
          <p>
          
Our company offers sophisticated weighing software, empowering businesses with precise data management and analysis capabilities, enhancing efficiency and accuracy in diverse industrial and commercial settings.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Material Handling Solutions</h2>
          <p>
          Our comprehensive material handling solutions streamline operations, offering versatile equipment and systems to optimize efficiency in industrial settings, ensuring seamless transport, storage, and management of materials for enhanced productivity.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Integration services  </h2>
          <p>
          Our integration services seamlessly incorporate weighing and material handling systems into existing infrastructure, enhancing operational efficiency and data accuracy. Tailored solutions ensure smooth compatibility and optimal performance for diverse industrial and commercial applications.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
