import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

function Episode() {
  const { id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'explanations' | 'chat'>('explanations');

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex flex-1">
        {/* Main content */}
        <div className="flex-1">
          <div className="aspect-video bg-black">
            {/* Video player will go here */}
          </div>
          
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Episode {id} : Résumé</h1>
            <p className="text-gray-300">
              Description et résumé de l'épisode...
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="relative">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute -left-8 top-4 bg-gray-800 p-2 rounded-l-lg"
          >
            {sidebarOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>

          {sidebarOpen && (
            <div className="w-80 bg-gray-800 h-full p-4">
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setActiveTab('explanations')}
                  className={`flex-1 py-2 px-4 rounded-lg ${
                    activeTab === 'explanations' ? 'bg-gray-700' : ''
                  }`}
                >
                  Explications thématiques
                </button>
                <button
                  onClick={() => setActiveTab('chat')}
                  className={`flex-1 py-2 px-4 rounded-lg ${
                    activeTab === 'chat' ? 'bg-gray-700' : ''
                  }`}
                >
                  Tchat direct
                </button>
              </div>

              {activeTab === 'explanations' ? (
                <div className="space-y-4">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Thématique 1</h3>
                    <p className="text-sm text-gray-300">
                      Présentation est description de la thématique
                    </p>
                  </div>
                  {/* Add more themes */}
                </div>
              ) : (
                <div className="flex flex-col h-[calc(100%-4rem)]">
                  <div className="flex-1 overflow-y-auto space-y-4">
                    {/* Chat messages */}
                  </div>
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="Nouveau message..."
                      className="w-full bg-gray-700 rounded-lg px-4 py-2"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Forum button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg">
          Message Forum
        </button>
      </div>
    </div>
  );
}

export default Episode;