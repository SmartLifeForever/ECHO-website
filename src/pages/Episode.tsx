import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Maximize2, Info } from 'lucide-react';
import { useEpisode } from '../context/EpisodeContext';

// Sample video data
const sampleVideos = {
  "1": {
    title: "La Nature et l'Homme",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    duration: 596, // in seconds
    thematicUnlockTime: 580, // when to unlock thematic content (in seconds)
    description: "Dans cet épisode, nous explorons la relation entre l'humanité et la nature à travers les âges, et comment cette relation a évolué avec le développement technologique et industriel.",
    themes: [
      {
        title: "Écosystèmes Fragiles",
        content: "Les écosystèmes sont des réseaux complexes d'organismes interdépendants. Leur fragilité est souvent sous-estimée, et les perturbations humaines peuvent avoir des conséquences en cascade imprévues."
      },
      {
        title: "Développement Durable",
        content: "Le concept de développement durable vise à répondre aux besoins du présent sans compromettre la capacité des générations futures à répondre à leurs propres besoins."
      },
      {
        title: "Biodiversité",
        content: "La biodiversité est essentielle à la résilience des écosystèmes. Chaque espèce joue un rôle unique dans le maintien de l'équilibre écologique."
      },
      {
        title: "Empreinte Carbone",
        content: "L'empreinte carbone mesure la quantité totale de gaz à effet de serre émise directement ou indirectement par une activité humaine, un produit, une entreprise ou un individu."
      }
    ]
  }
};

function Episode() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [thematicsUnlocked, setThematicsUnlocked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { markEpisodeCompleted, isEpisodeCompleted, saveProgress, getProgress } = useEpisode();
  
  const episodeData = sampleVideos[id as keyof typeof sampleVideos];
  
  useEffect(() => {
    // Check if thematics are already unlocked from previous viewing
    if (id && isEpisodeCompleted(id)) {
      setThematicsUnlocked(true);
    }
    
    // Set video to saved progress position
    if (id && videoRef.current) {
      const savedProgress = getProgress(id);
      if (savedProgress > 0) {
        videoRef.current.currentTime = savedProgress;
      }
    }
  }, [id, isEpisodeCompleted, getProgress]);
  
  const handleTimeUpdate = () => {
    if (!videoRef.current || !id) return;
    
    const currentVideoTime = videoRef.current.currentTime;
    setCurrentTime(currentVideoTime);
    
    // Save progress every 5 seconds
    if (Math.floor(currentVideoTime) % 5 === 0) {
      saveProgress(id, currentVideoTime);
    }
    
    // Unlock thematics when reaching the specified time
    if (episodeData && currentVideoTime >= episodeData.thematicUnlockTime && !thematicsUnlocked) {
      setThematicsUnlocked(true);
      markEpisodeCompleted(id);
    }
  };
  
  const handleVideoEnded = () => {
    if (id) {
      markEpisodeCompleted(id);
      setThematicsUnlocked(true);
    }
  };
  
  if (!episodeData) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-16rem)]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Épisode non trouvé</h2>
          <button 
            onClick={() => navigate('/series')}
            className="bg-primary text-dark px-4 py-2 rounded-lg hover:bg-accent transition-colors"
          >
            Retour aux séries
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] eco-blur-bg">
      <div className="flex flex-1">
        {/* Main content */}
        <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'mr-80' : ''}`}>
          <div className="relative">
            <div className={`w-full bg-black ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
              <video
                ref={videoRef}
                className="w-full h-auto"
                controls
                poster="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnded}
              >
                <source src={episodeData.src} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
              {isFullscreen && (
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="absolute top-4 right-4 bg-dark/80 p-2 rounded-lg text-light hover:bg-dark"
                >
                  <Maximize2 size={20} />
                </button>
              )}
            </div>
            {!isFullscreen && (
              <button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 right-4 bg-dark/80 p-2 rounded-lg text-light hover:bg-dark"
              >
                <Maximize2 size={20} />
              </button>
            )}
          </div>
          
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-light">Episode {id} : {episodeData.title}</h1>
            <p className="text-gray-300">
              {episodeData.description}
            </p>
            
            {!thematicsUnlocked && (
              <div className="mt-6 p-4 bg-dark/30 rounded-lg border border-accent/20">
                <div className="flex items-center">
                  <Info className="text-primary mr-2" />
                  <p className="text-light">Les explications thématiques seront débloquées à la fin de l'épisode.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className={`fixed right-0 top-0 h-full transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute -left-8 top-1/2 -translate-y-1/2 bg-dark/80 p-2 rounded-l-lg text-light hover:bg-dark"
          >
            {sidebarOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>

          <div className="w-80 glass-card h-full p-4 border-l border-accent/20">
            <h2 className="text-xl font-bold mb-4 text-light">Explications thématiques</h2>
            
            {thematicsUnlocked ? (
              <div className="space-y-4 h-[calc(100%-4rem)] overflow-y-auto">
                {episodeData.themes.map((theme, index) => (
                  <div key={index} className="bg-dark/50 p-4 rounded-lg border border-accent/10">
                    <h3 className="font-bold mb-2 text-light">{theme.title}</h3>
                    <p className="text-sm text-gray-300">
                      {theme.content}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[calc(100%-4rem)]">
                <div className="text-center p-6 bg-dark/30 rounded-lg border border-accent/10">
                  <Info className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-light mb-2">Contenu verrouillé</p>
                  <p className="text-sm text-gray-400">
                    Terminez de regarder l'épisode pour débloquer les explications thématiques.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Episode;