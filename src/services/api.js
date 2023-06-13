export const getDailyOffers = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND}offers?filter=daily`
  );

  console.log(response);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
