interface TranslationProps {
  getTranslation: (id: string) => string;
  setTranslations?: React.Dispatch<React.SetStateAction<Translation[]>>;
}

interface Translation {
  id: string;
  message: string;
}

interface ToggleSwitchProps {
  onChange: (language: string) => void;
  language: string;
}
