import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import global_es from "./locale/es/global.json";
import global_en from "./locale/en/global.json";
import LanguageDetector from "i18next-browser-languagedetector/cjs";

i18next.use(LanguageDetector).init({
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  resources: { es: { global: global_es }, en: { global: global_en } },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
