export interface TranslationProps {
  getTranslation: (id: string) => string | JSX.Element;
  setTranslations?: React.Dispatch<React.SetStateAction<Translation[]>>;
}

export interface Translation {
  id: string;
  message: string;
}