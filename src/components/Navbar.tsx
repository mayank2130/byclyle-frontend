import Button from "./shared/Button";

import { IoIosHelpCircleOutline } from "react-icons/io";
import { BsGlobe2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import {motion} from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
    initial={{y: -200, opacity: 0, scale: 0.5}}
    animate={{y: 0, opacity: 1, scale: 1}}
    transition={{duration: 0, delay: 0.1}}
    className=" rounded-3xl px-6 a flex justify-between align-middle h-12">
        <p className="pt-2 text-2xl font-gowun font-bold tracking-widest">CRUZ</p>
        <div className="my-auto hidden md:flex gap-24">
            <Button factor={1} text="Explore" />
            <Button factor={1} text="Brands" />
            <Button factor={1} text="Models" />
            <Button factor={1} text="Discover" />
        </div>

        <div className="flex my-auto justify-center align-middle gap-2">
            <IoIosHelpCircleOutline size={24} className="my-auto select-none cursor-pointer" />
            <BsGlobe2 size={19} className="my-auto select-none cursor-pointer" />
            <CgProfile size={20} className="my-auto select-none cursor-pointer" />
        </div>
    </motion.div>
  )
}

export default Navbar