import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Tarjimalar
import en from "./locales/en.json";
import uz from "./locales/uz.json";
import ru from "./locales/ru.json";


const resources = {
  en: { translation: en },
  uz: { translation: uz },
  ru: { translation: ru },
};

// 💾 LocalStorage'dan tilni o‘qish
const savedLanguage = localStorage.getItem("selectedLanguage") || "uz";

// i18n sozlamalari
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uz',        // 💾 localStorage'dagi tilni ishlatish
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

export default i18n;