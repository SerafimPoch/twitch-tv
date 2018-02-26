const dark = x => {
  return `https://wind-bow.glitch.me/twitch-api/streams/${x}`;
};

export const request = async x => {
  const response = await fetch(dark(x));
  const data = await response.json();
  return data;
};
