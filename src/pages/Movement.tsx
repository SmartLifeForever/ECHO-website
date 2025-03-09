import React from 'react';
import { Leaf, Sprout, Users, BookOpen, HandHeart } from 'lucide-react';

function Movement() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 eco-blur-bg">
      <h1 className="text-4xl font-bold mb-8 text-center text-light">MOUVEMENT ECHO</h1>
      <h2 className="text-2xl mb-12 text-center text-accent">Présentation de l'association :</h2>
      
      <div className="space-y-12">
        <section className="glass-card p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <Sprout className="w-8 h-8 text-primary mr-3" />
            <h3 className="text-2xl text-light">Notre Histoire</h3>
          </div>
          <div className="text-gray-300">...</div>
        </section>

        <section className="glass-card p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <Leaf className="w-8 h-8 text-primary mr-3" />
            <h3 className="text-2xl text-light">Notre Mission</h3>
          </div>
          <div className="text-gray-300">...</div>
        </section>

        <section className="glass-card p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 text-primary mr-3" />
            <h3 className="text-2xl text-light">Nos Partenaires</h3>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl text-accent mb-3">Partenaires Experts</h4>
              <div className="text-gray-300">...</div>
            </div>
            <div>
              <h4 className="text-xl text-accent mb-3">Partenaires Financiers</h4>
              <div className="text-gray-300">...</div>
            </div>
            <div>
              <h4 className="text-xl text-accent mb-3">Partenaires Audiovisuels</h4>
              <div className="text-gray-300">...</div>
            </div>
            <div>
              <h4 className="text-xl text-accent mb-3">Partenaires Éducation, Culture et Sensibilisation</h4>
              <div className="text-gray-300">...</div>
            </div>
            <div className="flex justify-center mt-8">
              <button className="bg-primary text-dark hover:bg-accent px-6 py-3 rounded-full text-lg font-medium transition-colors flex items-center">
                <HandHeart className="w-5 h-5 mr-2" />
                Devenir Partenaire
              </button>
            </div>
          </div>
        </section>

        <section className="glass-card p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <BookOpen className="w-8 h-8 text-primary mr-3" />
            <h3 className="text-2xl text-light">Ressources</h3>
          </div>
          <div className="text-gray-300">...</div>
        </section>
      </div>
    </div>
  );
}

export default Movement;