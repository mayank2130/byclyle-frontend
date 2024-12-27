import Car1 from "../assets/bike1.png";
import Car4 from "../assets/bike4.png";
import Car5 from "../assets/bike5.png";
import Info from "../components/Info";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";

const Home = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [currentCar, setCurrentCar] = useState(Car5);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 200, opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0, delay: 0.1 }}
      className="relative bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#919191] via-[#BFBFBD] to-[#EEEEEB] h-screen overflow-hidden a"
    >
      <Navbar />

      {/* Stats and car image */}
      <div className="relative w-full">
        <div className="flex md:flex-row mt-20 md:mt-32 flex-col-reverse justify-center z-10">
          <motion.img
            style={{
              scale:
                dimensions.width > 768 ? dimensions.width / 1440 : undefined,
            }}
            initial={{ y: 200, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0, delay: 0.1 }}
            className="md:w-2/5 transform"
            src={currentCar}
            alt="Car"
          />
        </div>

        <div className="fixed bottom-80 right-64 w-96 h-96 border-r-4 border-t-4 border-gray-400 rounded-tr-full bg-transparent transform rotate-45">
          <button
            className="absolute top-0 right-[70%] transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-black via-gray-800 to-red-600 border-4 rounded-full shadow-md outline-2 outline outline-offset outline-gray-400 transition-colors"
            onClick={() => setCurrentCar(Car5)}
          />
          <button
            className="absolute top-[0%] right-20 transform -translate-x-10 translate-y-14 w-12 h-12 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-black via-gray-600 to-orange-400 border-4 rounded-full shadow-md outline-2 outline outline-offset outline-gray-400 transition-colors"
            onClick={() => setCurrentCar(Car4)}
          />
          <button
            className="absolute top-[60%] right-[-5%] transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-500 via-orange-800 to-black border-4 rounded-full shadow-md outline-2 outline outline-offset outline-gray-400 transition-colors"
            onClick={() => setCurrentCar(Car1)}
          />
        </div>
      </div>
      <Info />
      <div className="hidden md:block">
        <BottomBar />
      </div>
    </motion.div>
  );
};

export default Home;
