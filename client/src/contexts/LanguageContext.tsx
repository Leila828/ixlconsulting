import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem("language");
    return (stored as Language) || "en";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language === "ar" ? "ar" : "en";
    root.dir = language === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "en" ? "ar" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

