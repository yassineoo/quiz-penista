import React, { useState, useEffect, useCallback } from 'react';
import { QUESTIONS, GAME_DURATION_SECONDS } from '../constants';
import { Button } from './Button';
import { Question } from '../types';

interface QuizProps {
  onFinish: (score: number) => void;
}

// Fisher-Yates shuffle utility
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const Quiz: React.FC<QuizProps> = ({ onFinish }) => {
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION_SECONDS);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Initialize questions on mount
  useEffect(() => {
    setQuestions(shuffleArray(QUESTIONS));
  }, []);

  // Timer logic
  useEffect(() => {
    if (timeLeft <= 0) {
      onFinish(score);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onFinish, score]);

  // Format time for display (e.g., 0:30)
  const formattedTime = `0:${timeLeft.toString().padStart(2, '0')}`;

  const handleNextQuestion = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setIsAnimating(false);
      } else {
        // Run out of questions, end game early or loop?
        // Let's end game if they speedrun all questions
        onFinish(score);
      }
    }, 300); // Short delay for animation
  }, [currentIndex, questions.length, onFinish, score]);

  const handleAnswer = (selectedOption: string) => {
    const currentQuestion = questions[currentIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore((prev) => prev + 100); // 100 points per correct answer
    }
    handleNextQuestion();
  };

  const handlePass = () => {
    handleNextQuestion();
  };

  if (questions.length === 0) return <div className="text-white text-center">Loading...</div>;

  const currentQuestion = questions[currentIndex];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 flex flex-col h-full min-h-[600px]">
      {/* Header with Timer and Score */}
      <div className="flex justify-between items-center mb-8 bg-brand-surface/50 p-4 rounded-xl border border-white/10">
        <div className="flex flex-col">
          <span className="text-xs text-brand-accent uppercase tracking-wider font-bold">Time</span>
          <span className={`text-3xl font-bold tabular-nums ${timeLeft <= 10 ? 'text-rose-500 animate-pulse' : 'text-white'}`}>
            {formattedTime}
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xs text-brand-accent uppercase tracking-wider font-bold">Score</span>
          <span className="text-3xl font-bold text-white tabular-nums">{score}</span>
        </div>
      </div>

      {/* Question Card */}
      <div className={`flex-grow transition-opacity duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <div className="mb-2">
          <span className="text-sm text-white/50 font-medium">Question {currentIndex + 1}</span>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-tight">
          {currentQuestion.question}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              className="bg-brand-surface border-2 border-white/10 hover:border-brand-accent hover:bg-brand-accent/10 text-left p-6 rounded-xl text-lg font-semibold text-white transition-all active:scale-[0.98] group"
            >
              <span className="inline-block w-8 h-8 rounded-full bg-white/10 text-center leading-8 text-sm mr-3 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors">
                {String.fromCharCode(65 + idx)}
              </span>
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-auto pt-4 border-t border-white/10">
        <Button 
          variant="outline" 
          fullWidth 
          onClick={handlePass}
          className="text-white/60 hover:text-white border-white/10 hover:bg-white/5"
        >
          Skip Question
        </Button>
      </div>
    </div>
  );
};
