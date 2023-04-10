export interface TranslationProps {
  getTranslation: (id: string) => string;
  setTranslations?: React.Dispatch<React.SetStateAction<Translation[]>>;
}

export interface Translation {
  id: string;
  message: string;
}

export interface ToggleSwitchProps {
  onChange: (language: string) => void;
  language: string;
}
