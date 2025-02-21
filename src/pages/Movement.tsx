import React from 'react';

function Movement() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">MOUVEMENT ECHO</h1>
      <h2 className="text-2xl mb-12 text-center">Présentation de l'association :</h2>
      
      <div className="space-y-12">
        <section>
          <h3 className="text-2xl mb-4">Notre Histoire</h3>
          <div className="text-gray-300">...</div>
        </section>

        <section>
          <h3 className="text-2xl mb-4">Notre Mission</h3>
          <div className="text-gray-300">...</div>
        </section>

        <section>
          <h3 className="text-2xl mb-4">Remerciements</h3>
          <div className="text-gray-300">...</div>
        </section>

        <section>
          <h3 className="text-2xl mb-4">Ressources</h3>
          <div className="text-gray-300">...</div>
        </section>
      </div>
    </div>
  );
}

export default Movement;