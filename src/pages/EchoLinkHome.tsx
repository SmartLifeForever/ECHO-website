import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Download, Info, Leaf, Sprout, Users } from 'lucide-react';

function EchoLinkHome() {
  return (
    <div className="max-w-4xl mx-auto text-center py-12 px-4 eco-blur-bg">
      <h1 className="text-4xl font-bold mb-12 text-light">Présentation de l'outil</h1>
      
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <Link 
          to="/echolink" 
          className="bg-primary text-dark hover:bg-accent px-8 py-3 rounded-full text-lg font-medium flex items-center transition-colors"
        >
          <ExternalLink className="w-5 h-5 mr-2 transform rotate-45" />
          TRY ECHO LINK
        </Link>
        <button className="bg-dark/50 hover:bg-dark text-light px-8 py-3 rounded-full text-lg font-medium flex items-center border border-accent/20 transition-colors">
          <Download className="w-5 h-5 mr-2" />
          TELECHARGER
        </button>
        <button className="bg-dark/50 hover:bg-dark text-light px-8 py-3 rounded-full text-lg font-medium flex items-center border border-accent/20 transition-colors">
          <Info className="w-5 h-5 mr-2" />
          EN SAVOIR PLUS
        </button>
      </div>

      <div className="space-y-12 text-left">
        <section className="glass-card p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <Sprout className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-light">Genèse du projet</h2>
          </div>
          <p className="text-gray-300">
            Description de la genèse du projet...
          </p>
        </section>

        <section className="glass-card p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <Leaf className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-light">Fonctionnalités</h2>
          </div>
          <p className="text-gray-300">
            Description des fonctionnalités...
          </p>
        </section>

        <section className="glass-card p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-light">Partenaires</h2>
          </div>
          <p className="text-gray-300">
            Liste des partenaires...
          </p>
        </section>
      </div>
    </div>
  );
}

export default EchoLinkHome;