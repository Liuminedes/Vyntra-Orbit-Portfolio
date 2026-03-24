"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { translations, detectLang } from "./i18n";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLang(detectLang());
    setMounted(true);
  }, []);

  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));
  
  // Mientras no está montado, usa "es" para que SSR y client coincidan
  const t = translations[mounted ? lang : "es"];

  return (
    <LangContext.Provider value={{ lang: mounted ? lang : "es", toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}