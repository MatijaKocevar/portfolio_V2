import DOMPurify from 'dompurify';

/**
 * sanitizes and parses a string to JSX
 */
export const parseStringToJSX = (htmlString: string) => {
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(htmlString),
  });

  return <div dangerouslySetInnerHTML={sanitizedData()}></div>;
};
