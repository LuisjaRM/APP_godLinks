import { useEffect, useState } from "react";
import { getUserInfoService } from "../services/api";

export const useGetUserInfo = (token, id) => {
  const [dataUser, setdataUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTweet = async () => {
      try {
        setLoading(true);
        const data = await getUserInfoService(token, id);

        setdataUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTweet();
  }, [id]);

  return { dataUser, error, loading };
};
