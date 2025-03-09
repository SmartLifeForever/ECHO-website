import React from 'react';

function EchoLink() {
  return (
    <div className="min-h-[calc(100vh-5rem)] bg-background eco-blur-bg flex items-center justify-center">
      <div className="glass-card p-8 rounded-xl max-w-2xl w-full text-center">
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0  0 5-5 5-5 0-5-5-5-5z"></path>
            <path d="M12 6c-1.7-1-3-1-5-1a5 5 0 0 0-5 5c0 1.8 0 3 1 5"></path>
            <path d="M17 5c2 0 3.3 0 5 1a5 5 0 0 1 0 10"></path>
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-light">ECHO LINK</h1>
        <p className="text-gray-300 mb-8">
          Interface monochrome écologique pour une expérience immersive et respectueuse de l'environnement.
        </p>
        <div className="h-64 bg-dark/30 rounded-lg border border-accent/10 flex items-center justify-center">
          <p className="text-gray-400">Contenu de l'application ECHO LINK à venir</p>
        </div>
      </div>
    </div>
  );
}

export default EchoLink;