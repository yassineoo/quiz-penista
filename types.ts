export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  answer: string; // The correct answer text
}

export interface PlayerScore {
  username: string;
  score: number;
  timestamp: number;
}

export enum GameState {
  INTRO = 'INTRO',
  PLAYING = 'PLAYING',
  RESULTS = 'RESULTS',
}
