import React, { useState } from 'react';
import { Github, Mail } from 'lucide-react';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState<'initial' | 'verification'>('initial');
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      
      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-96">
        {step === 'initial' ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              {isLogin ? 'connexion' : 'créer un compte'}
            </h2>

            {isLogin && (
              <div className="mb-6">
                <div className="flex justify-center space-x-4 mb-4">
                  <button className="p-2 bg-white rounded-full">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
                  </button>
                  <button className="p-2 bg-[#5865F2] rounded-full">
                    <img src="https://discord.com/assets/favicon.ico" alt="Discord" className="w-6 h-6" />
                  </button>
                  <button className="p-2 bg-gray-800 rounded-full">
                    <Github className="w-6 h-6" />
                  </button>
                </div>
                <div className="text-center text-gray-400 mb-4">ou</div>
              </div>
            )}

            <div className="space-y-4">
              <input
                type="text"
                placeholder="pseudo"
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700"
              />
              <input
                type="password"
                placeholder="mot de passe"
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700"
              />
              {!isLogin && (
                <>
                  <input
                    type="password"
                    placeholder="confirmer le mot de passe"
                    className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700"
                  />
                  <div className="flex items-center justify-center bg-gray-800 p-2 rounded-lg">
                    <div className="g-recaptcha" data-sitekey="your-site-key"></div>
                  </div>
                </>
              )}

              <button 
                onClick={() => setStep('verification')}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                {isLogin ? 'CONNEXION' : 'SUIVANT'}
              </button>

              <button
                onClick={() => setIsLogin(!isLogin)}
                className="w-full text-center text-gray-400 hover:text-white"
              >
                {isLogin ? 'Créer un compte' : 'Déjà inscrit ?'}
              </button>
            </div>
          </>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              Code de confirmation
            </h2>
            <div className="flex justify-center space-x-2 mb-4">
              {verificationCode.map((code, index) => (
                <input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  maxLength={1}
                  value={code}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  className="w-12 h-12 text-center bg-gray-800 text-white rounded-lg border border-gray-700"
                />
              ))}
            </div>
            <p className="text-sm text-gray-400 text-center mb-4">
              Le code a été envoyé à votre email/téléphone
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              CONNEXION
            </button>
            <button className="w-full text-center text-gray-400 hover:text-white mt-2">
              Renvoyer le code (1:59)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;