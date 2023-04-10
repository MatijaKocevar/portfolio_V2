import { Translations } from '../../translations/translations';

export interface Translation {
  id: string;
  message: string;
}

export const getTranslation = (id: string) => {
    const localization = window.location.hash == '' ? 'en' : window.location.hash == '#/slo' ? 'slo' : 'en';

    let message = "N/A"

    Translations.filter(el => {
        if(el.id == id) message = el[localization]
    })

    return message ?? "N/A"
}