import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import messages_en from "./assets/translation/en.json";

i18n.use(initReactI18next).init({
  debug: true,
  resources: {
    en: {
      translation: {
        ...messages_en,
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
});
