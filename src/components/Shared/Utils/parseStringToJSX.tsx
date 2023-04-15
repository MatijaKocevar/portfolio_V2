import DOMPurify from 'dompurify';

//creates React element from INode object, removes styles, assings keys - This method goes through every child in supplied object and creates a React Element object with same children and properties
export const parseStringToJSX = (htmlString: string) => {
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(htmlString),
  });

  return <div dangerouslySetInnerHTML={sanitizedData()}></div>;
};
