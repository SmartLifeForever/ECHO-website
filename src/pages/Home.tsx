import React from 'react';

function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <h1 className="text-6xl font-bold text-white text-center py-12">Projet ECHO</h1>
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Background"
          className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}

export default Home;