import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Maximize2 } from 'lucide-react';

function Episode() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'explanations' | 'chat'>('explanations');
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex flex-1">
        {/* Main content */}
        <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'mr-80' : ''}`}>
          <div className="relative">
            <div className={`aspect-video bg-black ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
              {/* Video player will go here */}
              {isFullscreen && (
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="absolute top-4 right-4 bg-gray-800 p-2 rounded-lg"
                >
                  <Maximize2 size={20} />
                </button>
              )}
            </div>
            {!isFullscreen && (
              <button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 right-4 bg-gray-800 p-2 rounded-lg"
              >
                <Maximize2 size={20} />
              </button>
            )}
          </div>
          
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Episode {id} : Résumé</h1>
            <p className="text-gray-300">
              Description et résumé de l'épisode...
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className={`fixed right-0 top-0 h-full transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute -left-8 top-4 bg-gray-800 p-2 rounded-l-lg"
          >
            {sidebarOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>

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
        </div>
      </div>

      {/* Forum button */}
      <div className="fixed bottom-4 right-4">
        <button 
          onClick={() => navigate('/forum/episode-1')}
          className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg"
        >
          Message Forum
        </button>
      </div>
    </div>
  );
}

export default Episode;