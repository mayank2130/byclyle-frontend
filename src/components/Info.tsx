import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Info = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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
    <div
      style={{
        marginTop:
          dimensions.width > 768 ? (-dimensions.height / 812) * 160 : undefined,
      }}
      className="md:w-2/5 md:absolute bottom-6 left-4 md:px-10 md:-mt-40 flex flex-col"
    >
      <motion.h1
        initial={{ y: 200, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0, delay: 0.55 }}
        style={{
          fontSize:
            dimensions.width > 768 ? (dimensions.width / 1440) * 36 : 24,
        }}
        className="md:text-start text-center md:text-4xl font-semibold z-10 a"
      >
        Innovating the Future of Spots Bicycles
      </motion.h1>
      <div className="my-2 mt-6 flex gap-8">
        <motion.p
          initial={{ y: 200, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0, delay: 0.6 }}
          style={{
            fontSize:
              dimensions.width > 768
                ? (dimensions.width / 1440) * 16
                : undefined,
          }}
          className="z-10 a"
        >
          Sporting bicycles are designed for high performance
          <br /> and efficiency, making them ideal for competitive cycling and 
          long-distance rides. Offering advanced gearing systems, aerodynamic
          designs, and high-quality components to enhance speed.
        </motion.p>
      </div>
    </div>
  );
};

export default Info;
