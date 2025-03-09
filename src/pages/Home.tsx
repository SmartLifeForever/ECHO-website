import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Leaf, ArrowRight } from 'lucide-react';

const news = [
  {
    id: 1,
    title: "Lancement de la série ECHO",
    date: "15 Mars 2024",
    description: "Découvrez notre nouvelle série documentaire sur l'environnement.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 2,
    title: "Partenariat avec des experts environnementaux",
    date: "10 Mars 2024",
    description: "De nouveaux experts rejoignent l'aventure ECHO.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 3,
    title: "Nouveau programme éducatif",
    date: "5 Mars 2024",
    description: "ECHO s'engage dans l'éducation environnementale.",
    image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
];

function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] eco-blur-bg">
      <div className="max-w-4xl mx-auto pt-8 pb-12 px-4">
        <h1 className="text-6xl font-bold text-light text-center mb-12">Projet ECHO</h1>
        <div className="relative overflow-hidden rounded-xl shadow-2xl mb-12">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Nature landscape"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="text-xl text-light mb-4">Découvrez une nouvelle façon de penser notre relation avec la nature</p>
            <Link 
              to="/series" 
              className="inline-flex items-center bg-primary text-dark hover:bg-accent px-6 py-3 rounded-full text-lg font-medium transition-colors"
            >
              <Play className="w-5 h-5 mr-2" />
              Voir les épisodes
            </Link>
          </div>
        </div>

        {/* News Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-light mb-8">Actualités</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item) => (
              <div key={item.id} className="glass-card rounded-xl overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-primary text-sm">{item.date}</span>
                  <h3 className="text-xl font-bold text-light mt-2 mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                  <Link 
                    to="#" 
                    className="text-primary hover:text-accent flex items-center text-sm"
                  >
                    Lire la suite
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-light">Sensibilisation</h3>
            <p className="text-gray-300">
              Des contenus éducatifs pour comprendre les enjeux environnementaux actuels.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m2 12 20 0"></path>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-light">Impact Global</h3>
            <p className="text-gray-300">
              Une perspective mondiale sur les défis écologiques et les solutions innovantes.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path>
                <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path>
                <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path>
                <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-light">Solutions Durables</h3>
            <p className="text-gray-300">
              Des approches concrètes pour un mode de vie plus respectueux de l'environnement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;