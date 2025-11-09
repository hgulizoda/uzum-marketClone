import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzLang from "../src/locales/uzLang.json";
import enLang from "../src/locales/enLang.json";

const resources = {
  en: {
    translation: enLang,
  },
  uz: {
    translation: uzLang,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",
});

export default i18n;
