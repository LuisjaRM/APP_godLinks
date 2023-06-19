import { useEffect, useState } from "react";
import { getOfferByIdService } from "../services/api";

export const useGetOffer = (id, token) => {
  const [offer, setOffer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTweet = async () => {
      try {
        setLoading(true);
        const data = await getOfferByIdService(id, token);

        setOffer(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTweet();
  }, [id, token]);

  return { offer, error, loading };
};
