"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { translations, detectLang } from "./i18n";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("es"); // default seguro para SSR

  useEffect(() => {
    setLang(detectLang());
  }, []);

  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));
  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}