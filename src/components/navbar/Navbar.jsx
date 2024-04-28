
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion}  from "framer-motion"

import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}

      <Sidebar />
      <div className="wrapper">
       
          <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>

<img src="/logo.png" alt="" /> Serving you to Satisfaction!

          </motion.span>
        
        <div className="social">
          <a href="#">
            <img src="/rsz_1facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/rsz_1instagram.png" alt="" />
          </a>

        </div>
      </div>
    </div>
  )
}

export default Navbar

