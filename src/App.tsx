import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { EpisodeProvider } from './context/EpisodeContext';
import Header from './components/Header';
import Home from './pages/Home';
import Series from './pages/Series';
import Episode from './pages/Episode';
import Movement from './pages/Movement';
import EchoLinkHome from './pages/EchoLinkHome';
import EchoLink from './pages/EchoLink';
import Login from './pages/Login';
import ChatHelp from './components/ChatHelp';

function App() {
  return (
    <AuthProvider>
      <EpisodeProvider>
        <Router>
          <div className="min-h-screen bg-background text-light">
            <Header />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/series" element={<Series />} />
                <Route path="/episode/:id" element={<Episode />} />
                <Route path="/movement" element={<Movement />} />
                <Route path="/echolink-home" element={<EchoLinkHome />} />
                <Route path="/echolink" element={<EchoLink />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
            <ChatHelp />
          </div>
        </Router>
      </EpisodeProvider>
    </AuthProvider>
  );
}

export default App;