import React, { useState } from 'react';
import { Search, Plus, Send, Bold, Italic, Underline, AlignLeft, Link as LinkIcon, List, Image, MessageSquare } from 'lucide-react';

interface Thread {
  id: string;
  title: string;
  description: string;
  category?: string;
  isPinned: boolean;
  path?: string[];
}

function Forum() {
  const [threads, setThreads] = useState<Thread[]>([
    {
      id: 'episode-1',
      title: 'Episode 1',
      description: 'Discussion sur l\'épisode 1',
      isPinned: true,
      path: ['Saison 1', 'Episode 1']
    }
  ]);
  const [selectedThread, setSelectedThread] = useState<Thread | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [newThread, setNewThread] = useState({
    title: '',
    description: '',
    category: ''
  });

  const categories = ['💬', '❓', '💡', '🎮', '🌿'];

  const filteredThreads = threads.filter(thread => 
    thread.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateThread = () => {
    const thread: Thread = {
      id: Date.now().toString(),
      title: newThread.title,
      description: newThread.description,
      category: newThread.category,
      isPinned: false
    };
    setThreads([...threads, thread]);
    setIsCreating(false);
    setNewThread({ title: '', description: '', category: '' });
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 eco-blur-bg">
      {/* Main discussion area */}
      <div className="flex-1 glass-card rounded-lg p-4">
        {selectedThread ? (
          <>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-light">{selectedThread.title}</h2>
              <p className="text-gray-400">{selectedThread.description}</p>
            </div>
            <div className="h-[calc(100vh-24rem)] bg-dark/30 rounded-lg p-4 mb-4 overflow-y-auto border border-accent/10">
              {/* Messages will go here */}
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex">
                    <div className="w-10 h-10 rounded-full bg-dark/80 flex items-center justify-center text-primary mr-2 flex-shrink-0">
                      U
                    </div>
                    <div className="bg-dark/50 p-3 rounded-lg flex-1 border border-accent/10">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-light">User{i}</span>
                        <span className="text-xs text-gray-400">il y a 2h</span>
                      </div>
                      <p className="text-gray-300">Exemple de message dans le forum...</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2 bg-dark/50 p-2 rounded-lg border border-accent/10">
                <button className="p-2 hover:bg-dark rounded text-light"><Bold size={18} /></button>
                <button className="p-2 hover:bg-dark rounded text-light"><Italic size={18} /></button>
                <button className="p-2 hover:bg-dark rounded text-light"><Underline size={18} /></button>
                <button className="p-2 hover:bg-dark rounded text-light"><AlignLeft size={18} /></button>
                <button className="p-2 hover:bg-dark rounded text-light"><LinkIcon size={18} /></button>
                <button className="p-2 hover:bg-dark rounded text-light"><List size={18} /></button>
                <button className="p-2 hover:bg-dark rounded text-light"><Image size={18} /></button>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="ENVOYER UN MESSAGE"
                  className="flex-1 bg-dark/50 text-light px-4 py-3 rounded-lg border border-accent/20 focus:outline-none focus:border-primary"
                />
                <button className="bg-primary text-dark p-3 rounded-lg hover:bg-accent transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400">
            <div className="text-center">
              <MessageSquare className="w-16 h-16 mx-auto mb-4 text-primary/30" />
              <p>Sélectionnez un fil de discussion</p>
            </div>
          </div>
        )}
      </div>

      {/* Right sidebar */}
      <div className="w-full md:w-80 space-y-6">
        {/* Search and Create */}
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Recherches"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark/50 text-light pl-10 pr-4 py-2 rounded-lg border border-accent/20 focus:outline-none focus:border-primary"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <button 
            onClick={() => setIsCreating(true)}
            className="bg-primary text-dark px-4 py-2 rounded-lg hover:bg-accent transition-colors flex items-center gap-1 font-medium"
          >
            <Plus size={18} />
            Créer
          </button>
        </div>

        {/* Threads list */}
        <div className="glass-card rounded-lg p-4">
          <div className="space-y-2">
            {filteredThreads.map(thread => (
              <div 
                key={thread.id}
                className="p-2 hover:bg-dark/50 rounded cursor-pointer transition-colors border border-transparent hover:border-accent/10"
                onClick={() => setSelectedThread(thread)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  const updatedThreads = threads.map(t => 
                    t.id === thread.id ? { ...t, isPinned: !t.isPinned } : t
                  );
                  setThreads(updatedThreads);
                }}
              >
                <div className="flex items-center gap-2">
                  {thread.category && <span>{thread.category}</span>}
                  <span className="font-medium text-light">{thread.title}</span>
                  {thread.isPinned && <span className="text-primary">📌</span>}
                </div>
                {thread.path && (
                  <div className="text-sm text-gray-400">
                    {thread.path.join(' ► ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create thread modal */}
      {isCreating && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="glass-card p-6 rounded-lg w-96 border border-accent/20">
            <h2 className="text-xl font-bold mb-4 text-light">Créer un nouveau fil</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Titre"
                value={newThread.title}
                onChange={(e) => setNewThread({ ...newThread, title: e.target.value })}
                className="w-full bg-dark/50 px-4 py-2 rounded-lg text-light border border-accent/20 focus:outline-none focus:border-primary"
              />
              <textarea
                placeholder="Description"
                value={newThread.description}
                onChange={(e) => setNewThread({ ...newThread, description: e.target.value })}
                className="w-full bg-dark/50 px-4 py-2 rounded-lg h-32 text-light border border-accent/20 focus:outline-none focus:border-primary"
              />
              <div className="flex gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setNewThread({ ...newThread, category })}
                    className={`p-2 rounded ${newThread.category === category ? 'bg-primary text-dark' : 'bg-dark/50 text-light hover:bg-dark'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsCreating(false)}
                  className="px-4 py-2 rounded-lg bg-dark/50 text-light hover:bg-dark"
                >
                  Annuler
                </button>
                <button
                  onClick={handleCreateThread}
                  className="px-4 py-2 rounded-lg bg-primary text-dark hover:bg-accent font-medium"
                >
                  Créer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Forum;