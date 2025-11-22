import React, { useEffect, useState } from "react";
import { PlayerScore, GameState } from "../types";
import { LOCAL_STORAGE_KEY } from "../constants";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { Language, getTranslation } from "../translations";

interface ResultsProps {
  score: number;
  currentName: string;
  onRestart: () => void;
  language: Language;
}

export const Results: React.FC<ResultsProps> = ({ score, currentName, onRestart, language }) => {
  const t = getTranslation(language);
  const [rank, setRank] = useState<number | null>(null);
  const [leaderboard, setLeaderboard] = useState<PlayerScore[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newEntry: PlayerScore = {
      username: currentName,
      score: score,
      timestamp: Date.now(),
    };

    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    let scores: PlayerScore[] = stored ? JSON.parse(stored) : [];

    scores.push(newEntry);

    scores.sort((a, b) => {
      if (b.score === a.score) return b.timestamp - a.timestamp;
      return b.score - a.score;
    });

    if (scores.length > 100) {
      scores = scores.slice(0, 100);
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(scores));

    const myRankIndex = scores.findIndex((s) => s.timestamp === newEntry.timestamp);

    setRank(myRankIndex + 1);
    setLeaderboard(scores.slice(0, 5));
    setLoading(false);
  }, [score, currentName]);

  if (loading) return <div className="text-center text-brand-accent">{t.calculatingResults}</div>;

  return (
    <div className="w-full max-w-md mx-auto px-4 py-8 text-center animate-fade-in-up">
      <div className="mb-8">
        <Logo className="w-16 h-16 mb-4 mx-auto" />
        <h2 className="text-sm text-brand-accent uppercase tracking-widest font-bold">{t.gameOver}</h2>
      </div>

      <div className="bg-brand-surface border border-brand-accent/20 rounded-2xl p-8 mb-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent"></div>

        <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider">{t.yourScore}</p>
        <div className="text-6xl font-bold text-white mb-6">{score}</div>

        <div className="flex items-center justify-center gap-2 bg-brand-dark/50 py-3 px-6 rounded-full inline-flex">
          <span className="text-gray-400">{t.rank}:</span>
          <span className="text-brand-accent font-bold text-xl">#{rank}</span>
          <span className="text-gray-500 text-sm ml-1">
            /{" "}
            {leaderboard.length > 100
              ? "100+"
              : localStorage.getItem(LOCAL_STORAGE_KEY)
              ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!).length
              : 1}
          </span>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-left text-white font-bold mb-4 flex items-center">
          <span className="w-1 h-6 bg-brand-accent mr-3 rounded-full"></span>
          {t.topPlayers}
        </h3>
        <div className="space-y-3">
          {leaderboard.map((player, idx) => (
            <div
              key={idx}
              className={`flex justify-between items-center p-4 rounded-xl ${
                player.timestamp === leaderboard[idx].timestamp && player.username === currentName
                  ? "bg-brand-accent/20 border border-brand-accent"
                  : "bg-brand-surface/50"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    idx === 0
                      ? "bg-yellow-500 text-brand-dark"
                      : idx === 1
                      ? "bg-gray-300 text-brand-dark"
                      : idx === 2
                      ? "bg-amber-700 text-white"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {idx + 1}
                </div>
                <span className="font-semibold text-white truncate max-w-[120px]">{player.username}</span>
              </div>
              <span className="font-bold text-brand-accent">{player.score}</span>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={onRestart} fullWidth>
        {t.playAgain}
      </Button>
    </div>
  );
};
