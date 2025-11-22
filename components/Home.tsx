// Home.tsx
import React, { useState } from "react";
import { Button } from "./Button";
import { Language, getTranslation } from "../translations";
import { Globe } from "lucide-react";

interface HomeProps {
  onStart: (name: string) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Home: React.FC<HomeProps> = ({ onStart, language, onLanguageChange }) => {
  const [name, setName] = useState("");
  const t = getTranslation(language);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name.trim());
    }
  };

  const languages = [
    { code: "fr" as Language, flag: "🇫🇷", name: "Français" },
    { code: "en" as Language, flag: "🇬🇧", name: "English" },
    { code: "ar" as Language, flag: "🇩🇿", name: "العربية" },
  ];

  return (
    <div className="flex-grow flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <h1 className="text-5xl font-bold text-center mb-8 text-white">{t.welcome}</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">{t.enterName}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              className="w-full px-4 py-3 bg-brand-surface border-2 border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-brand-accent transition-colors"
              required
            />
          </div>

          <Button type="submit" fullWidth>
            {t.startGame}
          </Button>

          {/* Language Selector */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Globe className="w-4 h-4 text-white/50" />
              <span className="text-sm text-white/50 font-medium">{language === "fr" ? "Langue" : language === "en" ? "Language" : "اللغة"}</span>
            </div>

            <div className="flex gap-2 justify-center">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => onLanguageChange(lang.code)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm 
                    transition-all duration-200
                    ${
                      language === lang.code
                        ? "bg-brand-accent text-brand-dark shadow-lg scale-105"
                        : "bg-brand-surface text-white/60 hover:text-white hover:bg-white/5 hover:scale-105 border border-white/10"
                    }
                  `}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
