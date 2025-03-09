import React from 'react';
import { Link } from 'react-router-dom';
import { Play, BookOpen } from 'lucide-react';
import { useEpisode } from '../context/EpisodeContext';

// Sample episodes data
const episodes = [
  {
    id: "1",
    title: "La Nature et l'Homme",
    thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Dans cet épisode, nous explorons la relation entre l'humanité et la nature à travers les âges."
  },
  {
    id: "2",
    title: "Écosystèmes en Danger",
    thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Découvrez les écosystèmes les plus menacés de notre planète et les efforts pour les préserver."
  },
  {
    id: "3",
    title: "Solutions Durables",
    thumbnail: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Exploration des innovations et solutions pour un avenir plus durable et respectueux de l'environnement."
  },
  {
    id: "4",
    title: "L'Eau, Source de Vie",
    thumbnail: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "L'importance de l'eau dans nos écosystèmes et les défis liés à sa préservation."
  }
];

function Series() {
  const { isEpisodeCompleted } = useEpisode();

  return (
    <div className="eco-blur-bg py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-light">Série ECHO</h1>
      
      {/* Episodes navigation */}
      <div className="mb-12 overflow-x-auto">
        <div className="flex space-x-4 pb-4 px-4">
          {episodes.map((episode) => (
            <Link 
              key={episode.id}
              to={`/episode/${episode.id}`}
              className="flex-shrink-0 text-center"
            >
              <div className={`w-32 h-1 mb-2 ${isEpisodeCompleted(episode.id) ? 'eco-blur-bg py-8'}`}></div>
              <span className={`text-sm ${isEpisodeCompleted(episode.id) ? 'text-primary' : 'text-gray-400'}`}>
                Épisode {episode.id}
              </span>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Episodes grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
        {episodes.map((episode) => (
          <div key={episode.id} className="glass-card rounded-lg overflow-hidden">
            <Link to={`/episode/${episode.id}`} className="block relative group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={episode.thumbnail} 
                  alt={episode.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary text-dark p-3 rounded-full">
                    <Play size={24} />
                  </div>
                </div>
                {isEpisodeCompleted(episode.id) && (
                  <div className="absolute top-2 right-2 bg-primary text-dark text-xs px-2 py-1 rounded-full">
                    Visionné
                  </div>
                )}
              </div>
            </Link>
            <div className="p-4">
              <Link to={`/episode/${episode.id}`} className="block">
                <h2 className="text-xl font-bold mb-2 text-light hover:text-primary transition-colors">
                  Épisode {episode.id}: {episode.title}
                </h2>
              </Link>
              <p className="text-gray-300 text-sm mb-4">
                {episode.description}
              </p>
              <div className="flex justify-between items-center">
                <Link 
                  to={`/episode/${episode.id}`}
                  className="bg-primary/20 hover:bg-primary/30 text-primary px-4 py-2 rounded-lg transition-colors flex items-center"
                >
                  <Play size={16} className="mr-2" />
                  Regarder
                </Link>
                {isEpisodeCompleted(episode.id) && (
                  <Link 
                    to={`/episode/${episode.id}`}
                    className="text-accent hover:text-primary transition-colors flex items-center"
                  >
                    <BookOpen size={16} className="mr-1" />
                    <span className="text-sm">Thématiques</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 glass-card rounded-lg p-6">
        <div className="flex items-center mb-4">
          <BookOpen className="w-5 h-5 text-primary mr-2" />
          <h2 className="text-2xl text-light">À propos de la série</h2>
        </div>
        <div className="text-gray-300">
          <p>ECHO est une série documentaire qui explore notre relation avec l'environnement et propose des solutions pour un avenir plus durable. Chaque épisode aborde une thématique différente et s'accompagne d'explications détaillées pour approfondir votre compréhension des enjeux écologiques actuels.</p>
        </div>
      </div>
    </div>
  );
}

export default Series;