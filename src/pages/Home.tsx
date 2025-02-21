import React from 'react';

function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] relative">
      <img 
        src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

export default Home;