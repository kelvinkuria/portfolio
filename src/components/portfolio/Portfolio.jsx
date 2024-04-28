import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: " S29-BR Water Resistant ",
    img: "https://th.bing.com/th/id/OIP.so3TS7tDOW_b7VskhbxHFgAAAA?rs=1&pid=ImgDetMain  ",
    desc:" Introducing a compact 25mm LCD display encased in stainless steel with a breathable knob design. Switch effortlessly between kg/g units and enjoy up to 70 hours of battery life (without backlight). Add versatility with an optional rear display. Perfect for precise weighing in any setting.  ",
  },
  {
    id: 2,
    title: "Drum Stacker",
    img: "https://5.imimg.com/data5/KW/LD/MY-2713106/drum-and-roll-lifter-500x500.jpg ",
    desc:  "Introducing TRIZ Systems Drum Transporter, designed for versatile drum handling. With a lifting height ranging from 1000 to 3000 mm and a lifting capacity of 100-150 kg, it ensures efficient lifting operations. Equipped with 80x50/150x50 mm wheels and boasting a lifting speed of 120 mm/s, it offers smooth and swift maneuverability. Ideal for various industrial applications requiring reliable drum transportation.  ",
  },
  {
    id: 3,
    title: "Multi Axle Weighbridge",
    img: " https://th.bing.com/th/id/OIP.HZ-VgtLOGYegMmYNEtJIdQHaHa?rs=1&pid=ImgDetMain  ",
    desc: "Mainly used in Mines, Factories, Ware House, & temporary Sites, where installations are required to be quick. Shifting axle weigh bridge can be done quickly and needs only a small pickup truck for transportation. Axle weigh bridges are the very cost-effective solution, the user benefits from the low equipment cost, low cost of civil work & installation and hence rapid recovery on investment. Civil work takes only 3 to 4 days’ time and the installation can be done in just one day   ",
  },
  {
    id: 4,
    title: "Standard checkweigher",
    img: "https://v2-hk-01-1251009151.file.myqcloud.com/online-checkweigher.com/shop_imgs/2021-8-13-16288433125300.jpg   ",
    desc:"The primary application of a standard checkweigher is for inspecting packed products such as bags, pouches, cans, bottles, and similar items.A checkweigher, whether automatic or manual, is employed to verify if the weight of a packaged item falls within predetermined parameters. Typically positioned at the conclusion of a production or packaging line, it serves to guarantee compliance with net weight regulations.",
  },
  {
    id: 5,
    title: "Generic 100Kgs Heavy Duty Industrial Digital Platform Weigh Scale",
    img: "https://caletechventures.co.ke/wp-content/uploads/2021/07/1-31-600x600.jpg",
    desc:"100Kgs Heavy Duty Industrial Digital Platform Weigh Scale! Price Computing Digital Weight Scale!20g Precision, 50g DivisionsDisplays Weight, Unit Price and Total Price LED/LCD Display ",
  },


  {
    id: 6,
    title: "100Kg WEIGHING SCALE",
    img: "https://caletechventures.co.ke/wp-content/uploads/2021/07/1-1-1.jpg",
    desc:"This heavy duty portable hanging scale can be used for weighing your luggage or any item with a maximum weight of (100kg). It is a useful tool for home, travel and outdoor activities.features an easy to read large displays weight in kgs/lbs and combines tare data lock functions. It has a accuracy of 10gm with multiple weighing units in kg/lb. /oz.It can hold automatic reading and indicates over load weighing with auto shut off functionRound spring balancesMaximum wight 100kgSuspended weighing scale.   ",
  },
  {
    id: 7,
    title: "Generic Digital Baby Scale Maximum Weight 25kgs ",
    img: " https://caletechventures.co.ke/wp-content/uploads/2021/07/2-13.jpg ",
    desc: "Model Number:Digital Baby Pet ScalePower Supply:2*AAA batteryDisplay Type:HD LCD displayAccuracy:1g Size:18*29cm Capacity:1g-10kgType:pet scaleRated Load:10kg   ",
  },

  {
    id: 8,
    title: "Portable Mini Crane – Digital Hanging Scale 200kg",
    img: "https://caletechventures.co.ke/wp-content/uploads/2021/07/1-61.jpg ",
    desc:"Max weight : 200Kg Portable LCD Display Auto off option Tare option Mode can be changed from Kg/Lb Power 2 AAA battery Heavy steel hook Range: 200kg/50g Color: Units: kg, lb, Liquid crystal size: 40*25mm/1.57*0.98″Overall size: 28.5*8*4cm/11.22*3.15*1.57″With tare in/tare out, hold, low voltage auto power-off, battery supervision, overload alarm functions "  
  },




];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See More</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Fast Sellers</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;