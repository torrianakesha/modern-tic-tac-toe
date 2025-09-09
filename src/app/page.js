'use client';

import { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import GameBoard from '@/components/GameBoard';

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <>
      {!gameStarted ? (
        <LandingPage onStartGame={() => setGameStarted(true)} />
      ) : (
        <GameBoard onBackToHome={() => setGameStarted(false)} />
      )}
    </>
  );
}
