import { Translations } from '../../translations/translations';

export interface Translation {
  id: string;
  message: string;
}

export const getTranslations = (locale: string) => {
  const translations: Translation[] = []

  if (locale == "en") {
    Translations.forEach((el) => {
      translations.push({
        id: el.id,
        message: el.en
      }) 
    })    
  }

  if (locale == "slo") {
    Translations.forEach((el) => {
      translations.push({
        id: el.id,
        message: el.slo
      }) 
    })
  }

    return translations
}