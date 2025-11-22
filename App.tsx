import React, { useState } from "react";
import { Home } from "./components/Home";
import { Quiz } from "./components/Quiz";
import { Results } from "./components/Results";
import { GameState } from "./types";

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.INTRO);
  const [playerName, setPlayerName] = useState("");
  const [finalScore, setFinalScore] = useState(0);
  const [language, setLanguage] = useState("en");

  const handleStart = (name: string) => {
    setPlayerName(name);
    setGameState(GameState.PLAYING);
  };

  const handleFinish = (score: number) => {
    setFinalScore(score);
    setGameState(GameState.RESULTS);
  };

  const handleRestart = () => {
    setPlayerName("");
    setFinalScore(0);
    setGameState(GameState.INTRO);
  };

  return (
    <div className="min-h-screen w-full bg-brand-dark overflow-hidden relative font-sans text-white selection:bg-brand-accent selection:text-brand-dark">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 bg-dots pointer-events-none z-0"></div>
      <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[30vw] h-[30vw] bg-purple-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      {/* Main Content Area */}
      <main className="relative z-10 min-h-screen flex flex-col">
        {gameState === GameState.INTRO && <Home onStart={handleStart} language={language} onLanguageChange={setLanguage} />}

        {gameState === GameState.PLAYING && <Quiz onFinish={handleFinish} language={language} />}

        {gameState === GameState.RESULTS && <Results score={finalScore} currentName={playerName} onRestart={handleRestart} language={language} />}
      </main>
    </div>
  );
};

export default App;
