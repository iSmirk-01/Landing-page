import { AnimatePresence, motion } from "framer-motion";
import { FaX } from "react-icons/fa6";

const Popup = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background Overlay */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>

          {/* Popup Content */}
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="relative bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-6 z-10 w-full max-w-md"
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-red-500 hover:text-Yellow"
              onClick={onClose}
            >
              <FaX />
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
