export const buildURL = (url: string) => {
  if (url.startsWith("https://")) return url;
  if (url.startsWith("//")) return `https:${url}`;

  return `https://${url}`;
};
