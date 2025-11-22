import { Question } from './types';

export const GAME_DURATION_SECONDS = 30;
export const LOCAL_STORAGE_KEY = 'penista_quiz_scores';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    category: "Technology",
    question: "Who is the co-founder of Microsoft?",
    options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
    answer: "Bill Gates"
  },
  {
    id: 2,
    category: "Science",
    question: "What planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    id: 3,
    category: "General",
    question: "Which country has the largest population?",
    options: ["USA", "India", "China", "Russia"],
    answer: "India"
  },
  {
    id: 4,
    category: "Tech",
    question: "What does CPU stand for?",
    options: ["Central Process Unit", "Computer Personal Unit", "Central Processing Unit", "Central Processor Unit"],
    answer: "Central Processing Unit"
  },
  {
    id: 5,
    category: "Art",
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"],
    answer: "Da Vinci"
  },
  {
    id: 6,
    category: "Geography",
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Rome", "Paris"],
    answer: "Paris"
  },
  {
    id: 7,
    category: "Physics",
    question: "E = mc^2 is a theory by:",
    options: ["Newton", "Einstein", "Tesla", "Darwin"],
    answer: "Einstein"
  },
  {
    id: 8,
    category: "Code",
    question: "Which language is used for styling web pages?",
    options: ["HTML", "Python", "CSS", "Java"],
    answer: "CSS"
  },
  {
    id: 9,
    category: "Nature",
    question: "Which animal is the fastest land animal?",
    options: ["Lion", "Cheetah", "Horse", "Leopard"],
    answer: "Cheetah"
  },
  {
    id: 10,
    category: "Tech",
    question: "Who founded Amazon?",
    options: ["Jeff Bezos", "Jack Ma", "Larry Page", "Tim Cook"],
    answer: "Jeff Bezos"
  },
  {
    id: 11,
    category: "Chemistry",
    question: "What is the chemical symbol for Gold?",
    options: ["Ag", "Au", "Fe", "Go"],
    answer: "Au"
  },
  {
    id: 12,
    category: "History",
    question: "Who was the first President of the USA?",
    options: ["Lincoln", "Washington", "Jefferson", "Adams"],
    answer: "Washington"
  },
  {
    id: 13,
    category: "Sports",
    question: "Which sport uses a shuttlecock?",
    options: ["Tennis", "Badminton", "Squash", "Ping Pong"],
    answer: "Badminton"
  },
  {
    id: 14,
    category: "Tech",
    question: "What does HTTP stand for?",
    options: ["HyperText Transfer Protocol", "HighText Transfer Protocol", "HyperText Transmission Process", "HyperText Transfer Process"],
    answer: "HyperText Transfer Protocol"
  },
  {
    id: 15,
    category: "Entertainment",
    question: "Who played Iron Man in the MCU?",
    options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
    answer: "Robert Downey Jr."
  }
];
