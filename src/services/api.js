export const getMyDataService = async (token) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}user`, {
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
