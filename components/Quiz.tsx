import React, { useState, useEffect, useCallback } from "react";
import { QUESTIONS, GAME_DURATION_SECONDS, NUMBER_OF_QUESTIONS } from "../constants";
import { Button } from "./Button";
import { Question } from "../types";
import { CheckCircle, XCircle, Zap, Trophy } from "lucide-react";
import { Language, getTranslation } from "../translations";

interface QuizProps {
  onFinish: (score: number) => void;
  language: Language;
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

// Select random questions from the pool
const selectRandomQuestions = (questions: Question[], count: number): Question[] => {
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, Math.min(count, questions.length));
};

// Sound effects using Web Audio API
const playSound = (frequency: number, duration: number, type: "correct" | "wrong") => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (type === "correct") {
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.5, audioContext.currentTime + duration);
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    } else {
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.5, audioContext.currentTime + duration);
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    }

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  } catch (error) {
    console.log("Audio not supported");
  }
};

export const Quiz: React.FC<QuizProps> = ({ onFinish, language }) => {
  const t = getTranslation(language);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION_SECONDS);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<{ answer: string; questionIndex: number } | null>(null);
  const [answerStatus, setAnswerStatus] = useState<"correct" | "wrong" | null>(null);
  const [streak, setStreak] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  // Initialize questions on mount - select random questions
  useEffect(() => {
    setQuestions(selectRandomQuestions(QUESTIONS, NUMBER_OF_QUESTIONS));
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

  const formattedTime = `0:${timeLeft.toString().padStart(2, "0")}`;

  // Confetti effect
  const createConfetti = () => {
    const colors = ["#FFD700", "#FFA500", "#FF69B4", "#00CED1", "#32CD32"];
    const confettiElements = [];

    for (let i = 0; i < 50; i++) {
      confettiElements.push(
        <div
          key={i}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            animationDelay: `${Math.random() * 0.5}s`,
            animationDuration: `${2 + Math.random() * 1}s`,
          }}
        />
      );
    }
    return confettiElements;
  };

  const handleNextQuestion = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedAnswer(null); // ← Ceci devrait déjà être là
      setAnswerStatus(null);
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setIsAnimating(false);
      } else {
        onFinish(score);
      }
    }, 1000);
  }, [currentIndex, questions.length, onFinish, score]);

  const handleAnswer = (selectedOption: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer({ answer: selectedOption, questionIndex: currentIndex });
    const currentQuestion = questions[currentIndex];
    const correctAnswer = currentQuestion.answer[language];
    const isCorrect = selectedOption === correctAnswer;

    if (isCorrect) {
      setAnswerStatus("correct");
      const bonusPoints = streak >= 3 ? 150 : 100;
      setScore((prev) => prev + bonusPoints);
      setStreak((prev) => prev + 1);
      playSound(523.25, 0.3, "correct");

      if (streak >= 2) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
      }
    } else {
      setAnswerStatus("wrong");
      setStreak(0);
      playSound(329.63, 0.5, "wrong");
    }

    handleNextQuestion();
  };

  const handlePass = () => {
    setStreak(0);
    handleNextQuestion();
  };

  if (questions.length === 0) {
    return (
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-accent mx-auto"></div>
        <p className="mt-4">{t.loading}</p>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 flex flex-col h-full min-h-[600px] relative">
      {showConfetti && <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">{createConfetti()}</div>}

      <div className="w-full h-2 bg-white/10 rounded-full mb-4 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-accent to-purple-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between items-center mb-8 bg-brand-surface/50 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
        <div className="flex flex-col">
          <span className="text-xs text-brand-accent uppercase tracking-wider font-bold">{t.time}</span>
          <span className={`text-3xl font-bold tabular-nums transition-colors ${timeLeft <= 10 ? "text-rose-500 animate-pulse" : "text-white"}`}>
            {formattedTime}
          </span>
        </div>

        {streak >= 3 && (
          <div className="flex flex-col items-center animate-bounce">
            <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <span className="text-xs text-yellow-400 font-bold">
              🔥 {streak}x {t.streak}!
            </span>
          </div>
        )}

        <div className="flex flex-col items-end">
          <span className="text-xs text-brand-accent uppercase tracking-wider font-bold">{t.score}</span>
          <span className="text-3xl font-bold text-white tabular-nums">{score}</span>
        </div>
      </div>

      {answerStatus && (
        <div
          className={`fixed top-0 left-0 right-0 w-[100vw] h-[100vh] flex items-center justify-center z-40 pointer-events-none transition-opacity duration-300 ${
            answerStatus === "correct" ? "bg-green-500/20" : "bg-red-500/20"
          }`}
        >
          <div className={`transform scale-0 animate-bounce-in ${answerStatus === "correct" ? "text-green-400" : "text-red-400"}`}>
            {answerStatus === "correct" ? <CheckCircle className="w-32 h-32 drop-shadow-2xl" /> : <XCircle className="w-32 h-32 drop-shadow-2xl" />}
          </div>
        </div>
      )}

      <div
        className={`flex-grow transition-all duration-300 ${
          isAnimating ? "opacity-0 translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100"
        }`}
      >
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm text-white/50 font-medium">
            {t.question} {currentIndex + 1} {t.of} {questions.length}
          </span>
          {streak >= 3 && <Trophy className="w-4 h-4 text-yellow-400 animate-pulse" />}
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-tight">{currentQuestion.question[language]}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {currentQuestion.options[language].map((option, idx) => {
            const isSelected = selectedAnswer?.questionIndex === currentIndex && selectedAnswer?.answer === option;

            const isCorrectAnswer = option === currentQuestion.answer[language];
            const showWrong = isSelected && answerStatus === "wrong";

            const showCorrect = selectedAnswer?.questionIndex === currentIndex && isCorrectAnswer;

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== null}
                className={`
                  relative overflow-hidden
                  bg-brand-surface border-2 text-left p-6 rounded-xl text-lg font-semibold 
                  transition-all duration-300 active:scale-[0.98] group
                  ${!selectedAnswer && "hover:border-brand-accent hover:bg-brand-accent/10 hover:scale-105"}
                  ${showCorrect && "border-green-500 bg-green-500/20 animate-pulse-success"}
                  ${showWrong && "border-red-500 bg-red-500/20 animate-shake"}
                  ${!isSelected && !showCorrect && "border-white/10"}
                  ${selectedAnswer && !isSelected && !showCorrect && "opacity-50"}
                `}
              >
                <span
                  className={`
                    inline-block w-8 h-8 rounded-full text-center leading-8 text-sm mr-3 
                    transition-all duration-300
                    ${showCorrect && "bg-green-500 text-white"}
                    ${showWrong && "bg-red-500 text-white"}
                    ${!selectedAnswer && "bg-white/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark"}
                  `}
                >
                  {showCorrect ? "✓" : showWrong ? "✗" : String.fromCharCode(65 + idx)}
                </span>
                <span className="text-white">{option}</span>

                {isSelected && <span className="absolute inset-0 bg-white/20 animate-ripple rounded-xl"></span>}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-white/10">
        <Button
          variant="outline"
          fullWidth
          onClick={handlePass}
          disabled={selectedAnswer !== null}
          className="text-white/60 hover:text-white border-white/10 hover:bg-white/5 disabled:opacity-30"
        >
          {t.skipQuestion}
        </Button>
      </div>

      <style>{`
        @keyframes bounce-in {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        
        @keyframes pulse-success {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          top: -10px;
          animation: confetti-fall linear forwards;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-out;
        }
        
        .animate-ripple {
          animation: ripple 0.6s ease-out;
        }
        
        .animate-pulse-success {
          animation: pulse-success 0.5s ease-in-out 2;
        }
      `}</style>
    </div>
  );
};
