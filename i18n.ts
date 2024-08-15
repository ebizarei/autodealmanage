import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import en from "./public/locales/en/common.json";
import tr from "./public/locales/tr/common.json";
import fa from "./public/locales/fa/common.json";

i18n.use(initReactI18next).init({
  lng: "en", // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: { translation: en },
    tr: { translation: tr },
    fa: { translation: fa },
  },
});
export default i18n;
