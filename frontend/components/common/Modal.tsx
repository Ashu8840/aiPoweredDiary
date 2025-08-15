import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const backdrop: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal: Variants = {
  hidden: { y: "-50vh", opacity: 0 },
  visible: { 
    y: "0", 
    opacity: 1, 
    transition: { delay: 0.2, type: 'spring', stiffness: 100 }
  },
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-card w-full max-w-lg mx-4 p-6 rounded-2xl border border-white/10"
            variants={modal}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-text_primary">{title}</h3>
                <button onClick={onClose} className="text-text_secondary hover:text-primary">&times;</button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;