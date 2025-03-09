import React, { createContext, useContext, useState, useEffect } from 'react';

interface EpisodeProgress {
  id: string;
  completed: boolean;
  timestamp: number;
}

interface EpisodeContextType {
  progress: Record<string, EpisodeProgress>;
  markEpisodeCompleted: (id: string) => void;
  isEpisodeCompleted: (id: string) => boolean;
  saveProgress: (id: string, timestamp: number) => void;
  getProgress: (id: string) => number;
}

const EpisodeContext = createContext<EpisodeContextType | null>(null);

export function EpisodeProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<Record<string, EpisodeProgress>>({});

  useEffect(() => {
    const savedProgress = localStorage.getItem('episodeProgress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const saveToLocalStorage = (updatedProgress: Record<string, EpisodeProgress>) => {
    localStorage.setItem('episodeProgress', JSON.stringify(updatedProgress));
  };

  const markEpisodeCompleted = (id: string) => {
    const updatedProgress = {
      ...progress,
      [id]: {
        ...progress[id],
        completed: true,
        timestamp: progress[id]?.timestamp || 0
      }
    };
    setProgress(updatedProgress);
    saveToLocalStorage(updatedProgress);
  };

  const isEpisodeCompleted = (id: string) => {
    return progress[id]?.completed || false;
  };

  const saveProgress = (id: string, timestamp: number) => {
    const updatedProgress = {
      ...progress,
      [id]: {
        ...progress[id],
        id,
        timestamp,
        completed: progress[id]?.completed || false
      }
    };
    setProgress(updatedProgress);
    saveToLocalStorage(updatedProgress);
  };

  const getProgress = (id: string) => {
    return progress[id]?.timestamp || 0;
  };

  return (
    <EpisodeContext.Provider value={{ 
      progress, 
      markEpisodeCompleted, 
      isEpisodeCompleted,
      saveProgress,
      getProgress
    }}>
      {children}
    </EpisodeContext.Provider>
  );
}

export function useEpisode() {
  const context = useContext(EpisodeContext);
  if (!context) {
    throw new Error('useEpisode must be used within an EpisodeProvider');
  }
  return context;
}