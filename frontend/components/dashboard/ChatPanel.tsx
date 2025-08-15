import React, { useState } from 'react';
import Card from '../Card';
import Modal from '../common/Modal';
import { motion } from 'framer-motion';
import ChatBubbleIcon from '../icons/ChatBubbleIcon';

const ChatPanel: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Card className="flex flex-col items-center justify-center text-center h-full">
        <ChatBubbleIcon className="w-12 h-12 text-primary mb-4" />
        <h3 className="text-2xl font-bold text-text_primary">Connect & Share</h3>
        <p className="text-text_secondary mt-2 mb-6">
          Share your thoughts and connect with friends in a safe space.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setModalOpen(true)}
          className="px-6 py-2 bg-primary text-background font-bold rounded-full shadow-lg hover:shadow-primary/50"
        >
          Chat with Friends
        </motion.button>
      </Card>
      
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Friend Connections">
        <div className="text-left">
            <p className="text-text_secondary mb-4">This is where you'll be able to see your friends, manage requests, and start new chats.</p>
            {/* Placeholder for user list and inputs */}
            <div className="space-y-3">
                <input type="text" placeholder="Enter friend's name" className="w-full p-2 rounded bg-background_light border border-white/10 text-text_primary focus:ring-2 focus:ring-primary focus:outline-none"/>
                <div>
                    <label className="block text-sm font-medium text-text_secondary mb-1">Upload profile picture</label>
                    <input type="file" className="w-full text-sm text-text_secondary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/20 file:text-primary hover:file:bg-primary/30"/>
                </div>
            </div>
        </div>
      </Modal>
    </>
  );
};

export default ChatPanel;
