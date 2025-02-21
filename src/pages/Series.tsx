import React from 'react';
import { Link } from 'react-router-dom';

function Series() {
  return (
    <div className="flex gap-6 p-6">
      {/* Sidebar with seasons and episodes */}
      <div className="w-64 bg-gray-800 rounded-lg p-6">
        <div className="mb-6">
          <h3 className="text-xl mb-4">Saison 1</h3>
          <div className="space-y-2 pl-4">
            <Link to="/episode/1" className="block text-gray-300 hover:text-white">
              épisode 1
            </Link>
            {/* Add more episodes */}
            <Link to="/episode/11" className="block text-gray-300 hover:text-white">
              épisode 11
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl mb-4">Images</h2>
          {/* Add images grid */}
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mt-6">
          <h2 className="text-2xl mb-4">Explications</h2>
          {/* Add explanations */}
        </div>
      </div>
    </div>
  );
}

export default Series;