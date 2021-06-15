import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from './locales/ru.json';
import en from './locales/en.json';

let localizationCreated = false;
const locales = { ru, en };
const langs = ['ru', 'en'];

export const changeLanguage = (lang) => {
    if (!localizationCreated) {
        createLocalization(lang);
    }

    i18n.changeLanguage(lang)
        .then(() => console.log(`LOCALE CHANGE ON ${lang}`));
};

export const createLocalization = (lang = 'en') => {
    const resources = langs.reduce((acc, item) => ({
        ...acc,
        [item]: {
            translation: locales[item],
        }
    }), {});

    i18n.use(LanguageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng: 'en',
            lng: lang,
            resources,
            keySeparator: false,
            interpolation: {
                escapeValue: false,
            },
        });
    localizationCreated = true;
}