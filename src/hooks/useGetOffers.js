import { useEffect, useState } from "react";
import { getDailyOffers } from "../services/api";

export const useGetOffers = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadOffers = async () => {
      try {
        setLoading(true);

        const data = await getDailyOffers();
        setOffers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadOffers();
  }, []);

  return { offers, loading, error };
};
