export const getCookie = (name) => {
  const regex = new RegExp(`(?:^|;)\\s*${encodeURIComponent(name)}=([^;]*)`);
  const match = document.cookie.match(regex);

  return match ? decodeURIComponent(match[1]) : null;
};
