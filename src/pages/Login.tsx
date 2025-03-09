import React, { useState } from 'react';
import { Github, Leaf, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState<'initial' | 'verification'>('initial');
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      
      if (value && index < 3) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleSubmit = async () => {
    if (isLogin) {
      await login(username, password);
    } else {
      if (step === 'initial') {
        setStep('verification');
      } else {
        await register(username, password);
      }
    }
    navigate('/');
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center eco-blur-bg">
      <div className="glass-card p-8 rounded-lg shadow-xl w-96">
        <div className="auth-container">
          <div className={`auth-panel ${isLogin ? 'login' : 'login slide-out'}`}>
            <div className="flex justify-center mb-6">
              <Leaf className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-center text-light">
              connexion
            </h2>

            <div className="mb-6">
              <div className="flex justify-center space-x-4 mb-4">
                <button className="p-2 bg-white rounded-full">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
                </button>
                <button className="p-2 bg-[#5865F2] rounded-full">
                  <img src="https://discord.com/assets/favicon.ico" alt="Discord" className="w-6 h-6" />
                </button>
                <button className="p-2 bg-dark rounded-full">
                  <Github className="w-6 h-6" />
                </button>
              </div>
              <div className="text-center text-gray-400 mb-4">ou</div>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="pseudo"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-dark/50 text-light px-4 py-2 rounded-lg border border-accent/20 focus:outline-none focus:border-primary"
              />
              <input
                type="password"
                placeholder="mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-dark/50 text-light px-4 py-2 rounded-lg border border-accent/20 focus:outline-none focus:border-primary"
              />

              <button 
                onClick={handleSubmit}
                className="w-full bg-primary text-dark py-2 rounded-lg hover:bg-accent transition-colors font-semibold"
              >
                CONNEXION
              </button>

              <button
                onClick={toggleAuthMode}
                className="w-full text-center text-gray-400 hover:text-light flex items-center justify-center group"
              >
                <span>Créer un compte</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className={`auth-panel register ${!isLogin ? 'slide-in' : ''}`}>
            <div className="flex justify-center mb-6">
              <Leaf className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-center text-light">
              créer un compte
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="pseudo"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-dark/50 text-light px-4 py-2 rounded-lg border border-accent/20 focus:outline-none focus:border-primary"
              />
              <input
                type="password"
                placeholder="mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-dark/50 text-light px-4 py-2 rounded-lg border border-accent/20 focus:outline-none focus:border-primary"
              />
              <input
                type="password"
                placeholder="confirmer le mot de passe"
                className="w-full bg-dark/50 text-light px-4 py-2 rounded-lg border border-accent/20 focus:outline-none focus:border-primary"
              />

              <button 
                onClick={handleSubmit}
                className="w-full bg-primary text-dark py-2 rounded-lg hover:bg-accent transition-colors font-semibold"
              >
                SUIVANT
              </button>

              <button
                onClick={toggleAuthMode}
                className="w-full text-center text-gray-400 hover:text-light flex items-center justify-center group"
              >
                <span>Déjà inscrit ?</span>
                <ArrowRight className="w-4 h-4 ml-2 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;