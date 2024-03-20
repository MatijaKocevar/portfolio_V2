import React, { createContext, useState } from "react";
import { Translation } from "../../components/Types/types";
import { parseStringToJSX } from "../../components/Shared/Utils/parseStringToJSX";
import { Translations } from "../../translations/translations";

interface TranslationContextType {
    language: string;
    setLanguage: (language: string) => void;
    getTranslation: (id: string) => string | JSX.Element;
    translations: Translation[];
}

interface TranslationProviderProps {
    children: React.ReactNode;
}

export const getTranslations = (locale: string) => {
    const translations: Translation[] = [];

    if (locale == "en") {
        Translations.forEach((el) => {
            translations.push({
                id: el.id,
                message: el.en,
            });
        });
    }

    if (locale == "slo") {
        Translations.forEach((el) => {
            translations.push({
                id: el.id,
                message: el.slo,
            });
        });
    }

    return translations;
};

const defaultLanguage = "en";
const defaultTranslations: Translation[] = getTranslations("en");

export const TranslationContext = createContext<TranslationContextType>({
    language: defaultLanguage,
    setLanguage: () => {},
    getTranslation: (id: string) => id,
    translations: defaultTranslations,
});

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState(defaultLanguage);
    const [translations, setTranslations] = useState(defaultTranslations);

    const loadTranslations = (language: string) => {
        setTranslations(getTranslations(language));
    };

    const containsHTML = (str: string) => /<[a-z][\s\S]*>/i.test(str);

    const getTranslation = (id: string) => {
        const matchingEl = translations.find((el) => el.id == id);

        if (matchingEl) {
            if (!containsHTML(matchingEl.message)) return matchingEl.message;
            else return parseStringToJSX(matchingEl.message);
        } else return "N/A";
    };

    // Load translations when language changes
    React.useEffect(() => {
        loadTranslations(language);
    }, [language]);

    return <TranslationContext.Provider value={{ language, setLanguage, translations, getTranslation }}>{children}</TranslationContext.Provider>;
};
