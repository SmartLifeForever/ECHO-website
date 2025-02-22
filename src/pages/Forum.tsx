import React, { useState } from 'react';
import { Search, Plus, Send, Bold, Italic, Underline, AlignLeft, Link as LinkIcon, List, Image } from 'lucide-react';

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

  const categories = ['💬', '❓', '💡', '🎮', '🎨'];

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
    <div className="flex gap-6 p-6">
      {/* Main discussion area */}
      <div className="flex-1 bg-gray-800 rounded-lg p-4">
        {selectedThread ? (
          <>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">{selectedThread.title}</h2>
              <p className="text-gray-400">{selectedThread.description}</p>
            </div>
            <div className="h-[calc(100vh-24rem)] bg-gray-700 rounded-lg p-4 mb-4 overflow-y-auto">
              {/* Messages will go here */}
            </div>
            <div className="space-y-4">
              <div className="flex gap-2 bg-gray-700 p-2 rounded-lg">
                <button className="p-2 hover:bg-gray-600 rounded"><Bold size={20} /></button>
                <button className="p-2 hover:bg-gray-600 rounded"><Italic size={20} /></button>
                <button className="p-2 hover:bg-gray-600 rounded"><Underline size={20} /></button>
                <button className="p-2 hover:bg-gray-600 rounded"><AlignLeft size={20} /></button>
                <button className="p-2 hover:bg-gray-600 rounded"><LinkIcon size={20} /></button>
                <button className="p-2 hover:bg-gray-600 rounded"><List size={20} /></button>
                <button className="p-2 hover:bg-gray-600 rounded"><Image size={20} /></button>
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
          </>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400">
            Sélectionnez un fil de discussion
          </div>
        )}
      </div>

      {/* Right sidebar */}
      <div className="w-80 space-y-6">
        {/* Search and Create */}
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Recherches"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <button 
            onClick={() => setIsCreating(true)}
            className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center gap-1"
          >
            <Plus size={20} />
            Créer
          </button>
        </div>

        {/* Threads list */}
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="space-y-2">
            {filteredThreads.map(thread => (
              <div 
                key={thread.id}
                className="p-2 hover:bg-gray-700 rounded cursor-pointer"
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
                  <span className="font-medium">{thread.title}</span>
                  {thread.isPinned && <span>📌</span>}
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Créer un nouveau fil</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Titre"
                value={newThread.title}
                onChange={(e) => setNewThread({ ...newThread, title: e.target.value })}
                className="w-full bg-gray-700 px-4 py-2 rounded-lg"
              />
              <textarea
                placeholder="Description"
                value={newThread.description}
                onChange={(e) => setNewThread({ ...newThread, description: e.target.value })}
                className="w-full bg-gray-700 px-4 py-2 rounded-lg h-32"
              />
              <div className="flex gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setNewThread({ ...newThread, category })}
                    className={`p-2 rounded ${newThread.category === category ? 'bg-gray-600' : 'bg-gray-700'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsCreating(false)}
                  className="px-4 py-2 rounded-lg bg-gray-700"
                >
                  Annuler
                </button>
                <button
                  onClick={handleCreateThread}
                  className="px-4 py-2 rounded-lg bg-blue-600"
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