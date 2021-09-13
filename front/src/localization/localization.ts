import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from './locales/ru.json';
import en from './locales/en.json';

let localizationCreated = false;

type LocaleResourcesType = {
    [key: string]: string;
};

type LocalesType = {
    [key: string]: LocaleResourcesType;
};

const locales: LocalesType = { ru, en };
const langs = ['ru', 'en'];

export const changeLanguage = (lang: string): void => {
    if (!localizationCreated) {
        createLocalization(lang);
    }

    i18n.changeLanguage(lang)
        .then(() => console.log(`LOCALE CHANGE ON ${lang}`));
};

export const createLocalization = (lang: string = 'en'): void => {
    const resources = langs.reduce((acc, item: string) => ({
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
        })
        .then(() => {
            console.log(`LOCALE CREATED FOR ${lang}`);
            localizationCreated = true;
        });
}