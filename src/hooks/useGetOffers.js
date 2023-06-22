import { useEffect, useState } from "react";

const loadOffers = async ({ url, token, setOffers, setLoading, setError }) => {
  try {
    setLoading(true);

    let response;
    token
      ? (response = await fetch(url, {
          headers: {
            Authorization: token,
          },
        }))
      : (response = await fetch(url));

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.message);
    }

    const data = json.data;
    setOffers(data);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

export const useGetOffers = ({ url, token }) => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (token === undefined || token === "") {
    token = null;
  }

  useEffect(() => {
    loadOffers({ url, token, setOffers, setLoading, setError });
  }, [url, token]);

  const refresh = () =>
    loadOffers({ url, token, setOffers, setLoading, setError });

  return { offers, loading, error, refresh };
};
