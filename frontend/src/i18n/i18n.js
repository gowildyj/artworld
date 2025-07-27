import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import ko from "./ko.json";
import fr from "./fr.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ko: { translation: ko },
      fr: { translation: fr },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // 브라우저에서 어떤 걸 기준으로 언어 감지할지
      order: ["localStorage", "navigator"], // 우선순위
      caches: ["localStorage"], // 선택된 언어 저장
    },
  });

export default i18n;
