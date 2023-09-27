import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import messages_en from "./assets/translation/en.json";
import messages_id from "./assets/translation/id.json";

i18n.use(initReactI18next).init({
  debug: true,
  resources: {
    en: {
      translation: {
        ...messages_en,
      },
    },
    id: {
      translation: {
        ...messages_id,
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
