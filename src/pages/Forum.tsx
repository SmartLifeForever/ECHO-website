import React from 'react';
import { Search, Plus, Send } from 'lucide-react';

function Forum() {
  return (
    <div className="flex gap-6 p-6">
      {/* Main discussion area */}
      <div className="flex-1 bg-gray-800 rounded-lg p-4">
        <div className="h-[calc(100vh-16rem)] bg-gray-700 rounded-lg p-4 mb-4">
          {/* Messages will go here */}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="ENVOYER UN MESSAGE"
            className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg"
          />
          <button className="bg-gray-700 p-3 rounded-lg">
            <Send size={20} />
          </button>
        </div>
      </div>

      {/* Right sidebar */}
      <div className="w-80 space-y-6">
        {/* Search and Create */}
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Recherches"
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <button className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center gap-1">
            <Plus size={20} />
            Créer
          </button>
        </div>

        {/* Categories */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Thématiques</h2>
          <div className="space-y-2">
            {/* Add categories here */}
          </div>
        </div>

        {/* Resources */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Ressources</h2>
          <div className="space-y-2">
            {/* Add resources here */}
          </div>
        </div>

        {/* Partners */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Partenaires</h2>
          <div className="space-y-2">
            {/* Add partners here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum;