"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Popup from "./Popup";

const Service = ({ header, details, label, html, button }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);

  return (
    <motion.div
      className={`flex flex-col gap-5 text-lg p-5 rounded-lg shadow-md bg-MutedTeal text-Charcoal`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header className="flex justify-center">
        <h1 className="text-3xl font-semibold">{header}</h1>
      </header>
      <main>
        <p className="font-medium">{details}</p>
      </main>
      <footer className="flex flex-col gap-2 justify-center">
        <h3 className="font-semibold flex justify-center">{label}</h3>

        <div className="relative self-center w-full">
          <button
            onClick={openPopup}
            className="px-4 py-2 bg-Charcoal text-white w-full rounded-lg hover:bg-Yellow hover:text-Charcoal"
          >
            {button}
          </button>
            <Popup isVisible={isPopupVisible} onClose={closePopup}>
              <div className="text-black flex justify-center">{html}</div>
            </Popup>
        </div>
      </footer>
    </motion.div>
  );
};

export default Service;
