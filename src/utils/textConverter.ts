export const textConverter = (html: string) => {
  const text = html?.replace(/<[^>]*>/g, '');

  const decodedText = text?.replace(/&[^;]+;/g, function(entity) {
    return entity.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;').replace(/&amp;#39;/g, '\'').replace(/&amp;amp;/g, '&');
  });

  return decodedText;
}