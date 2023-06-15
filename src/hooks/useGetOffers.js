import { useEffect, useState } from "react";

const loadOffers = async (url, setOffers, setLoading, setError) => {
  try {
    setLoading(true);

    const response = await fetch(url);

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

export const useGetOffers = (url) => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadOffers(url, setOffers, setLoading, setError);
  }, [url]);

  const refresh = () => loadOffers(url, setOffers, setLoading, setError);

  return { offers, loading, error, refresh };
};
