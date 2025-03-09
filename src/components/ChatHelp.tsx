import React, { useState } from 'react';
import { MessageCircle, X, Send, Leaf } from 'lucide-react';

function ChatHelp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-20">
      {isOpen ? (
        <div className="glass-card rounded-lg shadow-xl w-80 h-96 flex flex-col border border-accent/20">
          <div className="bg-dark/80 text-light p-4 rounded-t-lg flex justify-between items-center border-b border-accent/10">
            <div className="flex items-center">
              <Leaf className="w-5 h-5 text-primary mr-2" />
              <h3>Tchat Help</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Chat messages will go here */}
            <div className="space-y-3">
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-dark mr-2 flex-shrink-0">
                  E
                </div>
                <div className="bg-dark/30 p-2 rounded-lg max-w-[80%] text-sm">
                  <p className="text-light">Bonjour ! Comment puis-je vous aider aujourd'hui ?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-accent/10">
            <div className="relative">
              <input
                type="text"
                placeholder="Écrivez votre message..."
                className="w-full px-3 py-2 bg-dark/50 border border-accent/20 rounded-lg focus:outline-none focus:border-primary text-light pr-10"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-accent text-dark p-3 rounded-full shadow-lg transition-colors"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}

export default ChatHelp;