import { useGetOffers } from "../hooks/useGetOffers";

export const useGetDailyOffers = () =>
  useGetOffers(`${import.meta.env.VITE_BACKEND}offers?filter=daily`);

export const useGetAllOffers = () =>
  useGetOffers(`${import.meta.env.VITE_BACKEND}offers?filter=all`);

export const useGetOffersByVotes = () =>
  useGetOffers(`${import.meta.env.VITE_BACKEND}offers?filter=by-votes`);

export const getMyDataService = async (token, id) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}user${id}`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const registerUserService = async ({ email, password, user }) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND}users/new-user`,
    {
      method: "POST",
      body: JSON.stringify({ email, password, user }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}users/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
