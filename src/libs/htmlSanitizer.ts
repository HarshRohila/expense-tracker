import DOMPurify from 'dompurify';

const sanitize = (htmlString: string) => DOMPurify.sanitize(htmlString)

export { sanitize }