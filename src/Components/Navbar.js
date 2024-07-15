import React from "react";
import Logo from "../Images/logo1.png";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <div className="p-3 bg-black-900 shadow-sm flex w-full h-full items-center justify-between border-b-yellow1 border-b-2">
        <div>
        <div
          className="text-textColor"
          end
        >
          <a href="#home">
          <motion.div whileHover={{ scale: 1.2 }}>
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={Logo}
                className="w-10 h-10 object-cover"
                alt="Logo img"
              />
              <p className="text-white-400 text-xl font-bold">Car Care</p>
            </div>
          </motion.div>
          </a>
        </div>
        </div>

        <div>
          <motion.div className="flex gap-4 items-center justify-center border-2 bg-black-900 rounded-lg border-none p-2">
            <div
              className={({ isActive }) =>
                isActive ? `bg-yellow-600 rounded-full` : undefined
              }
              id="nav"
              end
            >
              <a href="#home">
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="rounded-full hover:bg-cardOverlay p-2 items-center justify-center cursor-pointer"
              >
                <div className="navbarText">Home </div>
              </motion.div>
              </a>
            </div>
            <div
              className={({ isActive }) =>
                isActive ? `bg-yellow-600 rounded-full` : undefined
              }
              id="nav"
              end
            >
              <a href="#product">
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="rounded-full hover:bg-cardOverlay p-2 items-center justify-center cursor-pointer"
              >
                <div className="navbarText">Products </div>
              </motion.div>
              </a>
            </div>
            <div
              className={({ isActive }) =>
                isActive ? `bg-yellow-600 rounded-full` : undefined
              }
              id="nav"
              end
            >
              <a href="#about">
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="rounded-full hover:bg-cardOverlay p-2 items-center justify-center cursor-pointer"
              >
                <div className="navbarText">About </div>
              </motion.div>
              </a>
            </div>
            <div
              className={({ isActive }) =>
                isActive ? `bg-yellow-600 rounded-full` : undefined
              }
              id="nav"
              end
            >
              <a href="#contact">
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="rounded-full hover:bg-cardOverlay p-2 items-center justify-center cursor-pointer"
              >
                <div className="navbarText">Contacts </div>
              </motion.div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    );
}
export default Navbar;