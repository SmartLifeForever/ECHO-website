import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

function ChatHelp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen ? (
        <div className="bg-gray-800 rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="bg-gray-900 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3>Chat Help</h3>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 p-4 bg-gray-800">
            {/* Chat messages will go here */}
          </div>
          <div className="p-4 border-t border-gray-700">
            <input
              type="text"
              placeholder="Écrivez votre message..."
              className="w-full px-3 py-2 bg-gray-700 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg shadow-lg transition-colors"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}

export default ChatHelp;