"use client"

import type React from "react"
import { useState } from "react"
import { Home } from "./components/Home"
import { Quiz } from "./components/Quiz"
import { Results } from "./components/Results"
import { GameState } from "./types"

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.INTRO)
  const [playerName, setPlayerName] = useState("")
  const [finalScore, setFinalScore] = useState(0)
  const [language, setLanguage] = useState("en")

  const handleStart = (name: string) => {
    setPlayerName(name)
    setGameState(GameState.PLAYING)
  }

  const handleFinish = (score: number) => {
    setFinalScore(score)
    setGameState(GameState.RESULTS)
  }

  const handleRestart = () => {
    setPlayerName("")
    setFinalScore(0)
    setGameState(GameState.INTRO)
  }

  return (
    <div
      className="min-h-screen w-full overflow-hidden relative font-sans text-foreground selection:bg-accent selection:text-accent-foreground"
      style={{ backgroundColor: "#0E172B" }}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Stadium background image */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: "url('/professional-football-stadium-night-lights.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Dark overlay to ensure readability */}
        <div className="absolute inset-0 bg-[#0E172B]/70" />

        {/* Stadium light effects - vertical beams */}
        <div className="absolute top-0 left-1/4 w-1 h-96 bg-gradient-to-b from-[#00E7FF] to-transparent blur-md animate-stadium-light-1" />
        <div className="absolute top-0 right-1/4 w-1 h-96 bg-gradient-to-b from-[#00E7FF] to-transparent blur-md animate-stadium-light-2" />
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-[#00E7FF] to-transparent blur-lg animate-stadium-light-3" />

        {/* Football field pattern overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10 animate-field-glow"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="football-field" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="40" fill="none" stroke="#00E7FF" strokeWidth="2" opacity="0.6" />
              <circle cx="100" cy="100" r="3" fill="#00E7FF" opacity="0.8" />
              <line x1="100" y1="0" x2="100" y2="200" stroke="#00E7FF" strokeWidth="2" opacity="0.4" />
              <line x1="0" y1="100" x2="200" y2="100" stroke="#00E7FF" strokeWidth="2" opacity="0.4" />
              <rect x="60" y="10" width="80" height="40" fill="none" stroke="#00E7FF" strokeWidth="2" opacity="0.3" />
              <rect x="60" y="150" width="80" height="40" fill="none" stroke="#00E7FF" strokeWidth="2" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#football-field)" />
        </svg>

        {/* Floating soccer balls with animation */}
        <div className="absolute top-[15%] left-[12%] w-12 h-12 opacity-15 animate-float-slow-bounce">
          <svg viewBox="0 0 24 24" fill="none" stroke="#00E7FF" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2 L14 8 L20 8 Z" />
            <path d="M12 2 L10 8 L4 8 Z" />
            <path d="M22 12 L16 14 L16 10 Z" />
            <path d="M2 12 L8 14 L8 10 Z" />
          </svg>
        </div>

        <div className="absolute bottom-[25%] right-[18%] w-16 h-16 opacity-10 animate-float-slower-bounce">
          <svg viewBox="0 0 24 24" fill="none" stroke="#00E7FF" strokeWidth="1">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" opacity="0.5" />
            <line x1="6" y1="12" x2="18" y2="12" />
            <line x1="12" y1="6" x2="12" y2="18" />
          </svg>
        </div>

        <div className="absolute top-[55%] left-[75%] w-10 h-10 opacity-12 animate-float-medium-bounce">
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="#00E7FF">
            <circle cx="12" cy="12" r="10" opacity="0.8" />
          </svg>
        </div>

        {/* Hexagon pattern overlay - subtle accent */}
        <div className="absolute inset-0 opacity-5 animate-hex-pulse">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
                <polygon
                  points="28,0 50,14 50,42 28,56 6,42 6,14"
                  fill="none"
                  stroke="#00E7FF"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        {/* Dot grid pattern */}
        <div className="absolute inset-0 bg-dots opacity-10 animate-pulse-medium" />

        {/* Floating particles for depth */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#00E7FF] rounded-full opacity-20 animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Vignette effect */}
      <div className="fixed inset-0 pointer-events-none z-[5] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(14,23,43,0.8)_100%)]" />

      {/* Main Content Area */}
      <main className="relative z-10 min-h-screen flex flex-col">
        {gameState === GameState.INTRO && (
          <Home onStart={handleStart} language={language} onLanguageChange={setLanguage} />
        )}
        {gameState === GameState.PLAYING && <Quiz onFinish={handleFinish} language={language} />}
        {gameState === GameState.RESULTS && (
          <Results score={finalScore} currentName={playerName} onRestart={handleRestart} language={language} />
        )}
      </main>

      {/* Custom Styles */}
      <style>{`
        @keyframes float-slow-bounce {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          25% { transform: translateY(-15px) translateX(5px) rotate(10deg); }
          50% { transform: translateY(-25px) translateX(-8px) rotate(20deg); }
          75% { transform: translateY(-10px) translateX(3px) rotate(10deg); }
        }

        @keyframes float-slower-bounce {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(-8px) rotate(-15deg); }
          50% { transform: translateY(-35px) translateX(10px) rotate(-25deg); }
          75% { transform: translateY(-15px) translateX(-5px) rotate(-15deg); }
        }

        @keyframes float-medium-bounce {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(8deg); }
          66% { transform: translateY(-20px) rotate(-8deg); }
        }

        @keyframes pulse-medium {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.65; transform: scale(1.08); }
        }

        @keyframes stadium-light-1 {
          0%, 100% { opacity: 0.4; filter: blur(8px); }
          50% { opacity: 0.7; filter: blur(12px); }
        }

        @keyframes stadium-light-2 {
          0%, 100% { opacity: 0.35; filter: blur(6px); }
          50% { opacity: 0.65; filter: blur(10px); }
        }

        @keyframes stadium-light-3 {
          0%, 100% { opacity: 0.5; filter: blur(10px); }
          50% { opacity: 0.8; filter: blur(14px); }
        }

        @keyframes field-glow {
          0%, 100% { opacity: 0.08; filter: drop-shadow(0 0 8px rgba(0, 231, 255, 0.2)); }
          50% { opacity: 0.12; filter: drop-shadow(0 0 16px rgba(0, 231, 255, 0.4)); }
        }

        @keyframes hex-pulse {
          0%, 100% { opacity: 0.04; }
          50% { opacity: 0.08; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.5); }
        }

        .animate-float-slow-bounce { animation: float-slow-bounce 5s ease-in-out infinite; }
        .animate-float-slower-bounce { animation: float-slower-bounce 7s ease-in-out infinite; }
        .animate-float-medium-bounce { animation: float-medium-bounce 6s ease-in-out infinite; }
        .animate-pulse-medium { animation: pulse-medium 3s ease-in-out infinite; }
        .animate-stadium-light-1 { animation: stadium-light-1 3s ease-in-out infinite; }
        .animate-stadium-light-2 { animation: stadium-light-2 3.5s ease-in-out infinite; }
        .animate-stadium-light-3 { animation: stadium-light-3 2.5s ease-in-out infinite; }
        .animate-field-glow { animation: field-glow 4s ease-in-out infinite; }
        .animate-hex-pulse { animation: hex-pulse 5s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }

        .bg-dots {
          background-image: radial-gradient(circle, rgba(0,231,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  )
}

export default App
