'use client';

import { useState } from 'react';
import LandingPage from '../components/LandingPage';
import GameBoard from '../components/GameBoard';

export default function HomePage() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => setGameStarted(true);
  const handleBackToHome = () => setGameStarted(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-100 to-blue-100">
      {!gameStarted ? (
        <LandingPage onStartGame={handleStartGame} />
      ) : (
        <GameBoard onBackToHome={handleBackToHome} />
      )}
    </div>
  );
}
