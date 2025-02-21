import React from 'react';
import { Link } from 'react-router-dom';

function EchoLinkHome() {
  return (
    <div className="max-w-4xl mx-auto text-center py-12 px-4">
      <h1 className="text-4xl font-bold mb-12">Présentation de l'outil</h1>
      
      <div className="flex justify-center gap-4 mb-16">
        <Link 
          to="/echolink" 
          className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-full text-lg font-medium flex items-center"
        >
          <span className="transform rotate-45 mr-2">↗</span>
          TRY ECHO LINK
        </Link>
        <button className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-full text-lg font-medium">
          TELECHARGER
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-full text-lg font-medium">
          EN SAVOIR PLUS
        </button>
      </div>

      <div className="space-y-12 text-left">
        <section>
          <h2 className="text-3xl font-bold mb-6">Genèse du projet</h2>
          <p className="text-gray-300">
            Description de la genèse du projet...
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Fonctionnalités</h2>
          <p className="text-gray-300">
            Description des fonctionnalités...
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Partenaires</h2>
          <p className="text-gray-300">
            Liste des partenaires...
          </p>
        </section>
      </div>
    </div>
  );
}

export default EchoLinkHome;