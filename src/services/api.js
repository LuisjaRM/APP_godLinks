// Hooks

import { useGetOffers } from "../hooks/useGetOffers";
import { useGetDataUser } from "../hooks/useGetDataUser";

// OFFERS
// Get offers

export const useGetDailyOffers = (token) =>
  useGetOffers({
    url: `${import.meta.env.VITE_BACKEND}offers?filter=daily`,
    token,
  });

export const useGetAllOffers = (token) =>
  useGetOffers({
    url: `${import.meta.env.VITE_BACKEND}offers?filter=all`,
    token,
  });

export const useGetOffersByVotes = (token) =>
  useGetOffers({
    url: `${import.meta.env.VITE_BACKEND}offers?filter=by-votes`,
    token,
  });

export const useGetMyFavoriteOffers = (token) =>
  useGetOffers({ url: `${import.meta.env.VITE_BACKEND}favorites`, token });

export const useGetOfferById = (id, token) =>
  useGetOffers({ url: `${import.meta.env.VITE_BACKEND}offer/${id}`, token });

// Post offer

export const postOfferService = async (
  { url, title, descrip, price, offer_price, plataform, offer_expiry },
  token
) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}offers`, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
      title,
      descrip,
      price,
      offer_price,
      plataform,
      offer_expiry,
    }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const postOfferImageService = async (token, id, image) => {
  const body = new FormData();
  body.append("image", image);

  console.log(`${import.meta.env.VITE_BACKEND}offer/${id}`);

  const response = await fetch(`${import.meta.env.VITE_BACKEND}offer/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: token,
    },
    body: body,
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

// USERS
// Get user info

export const useGetMyData = (token) =>
  useGetDataUser(`${import.meta.env.VITE_BACKEND}user`, token);

export const useGetUserInfo = (token, id) =>
  useGetDataUser(`${import.meta.env.VITE_BACKEND}user/${id}`, token);

// Posts user

export const registerUserService = async ({ email, password, user }) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}user`, {
    method: "POST",
    body: JSON.stringify({ email, password, user }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}login`, {
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

export const RecoverPasswordService = async ({ email }) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND}password/recover`,
    {
      method: "POST",
      body: JSON.stringify({ email }),
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

export const ResetPasswordService = async ({ recoverCode, newPassword }) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND}password/reset`,
    {
      method: "POST",
      body: JSON.stringify({ recoverCode, newPassword }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const ModifyUserService = async ({ email, user, avatar }, token) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}user`, {
    method: "PATCH",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      user,
      avatar,
    }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const ModifyPasswordService = async ({ password }, token) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}user`, {
    method: "PATCH",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
    }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

// FAVORITES
// Patch Favorite

export const addFavoriteService = async (token, id) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND}favorite/${id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};
