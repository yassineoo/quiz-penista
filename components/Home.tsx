import React, { useState } from 'react';
import { Logo } from './Logo';
import { Button } from './Button';

interface HomeProps {
  onStart: (name: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onStart }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length === 0) {
      setError(true);
      return;
    }
    onStart(name.trim());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full w-full max-w-md mx-auto px-6 py-10 text-center">
      <div className="mb-12 animate-fade-in-down">
        <Logo className="w-32 h-32 sm:w-40 sm:h-40" />
      </div>
      
      <div className="space-y-2 mb-8 w-full">
        <h2 className="text-3xl font-bold text-white">Event Quiz</h2>
        <p className="text-brand-accent/80 text-lg">30 Seconds. How high can you score?</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <div className="relative">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError(false);
            }}
            placeholder="Enter your name"
            className={`w-full bg-brand-surface border-2 ${error ? 'border-rose-500' : 'border-brand-accent/30 focus:border-brand-accent'} rounded-xl px-6 py-4 text-white text-xl placeholder-white/30 outline-none transition-colors`}
            autoFocus
          />
          {error && (
            <p className="absolute -bottom-6 left-0 text-rose-500 text-sm">Please enter your name to start.</p>
          )}
        </div>

        <Button type="submit" fullWidth className="mt-4">
          START GAME
        </Button>
      </form>
    </div>
  );
};
