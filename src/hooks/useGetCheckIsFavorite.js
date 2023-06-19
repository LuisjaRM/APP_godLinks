import { useEffect, useState } from "react";
import { getCheckisFavoriteService } from "../services/api";

export const useGetCheckIsFavorite = (token, id) => {
  const [isFavorite, setIsFavorite] = useState([]);

  useEffect(() => {
    const loadTweet = async () => {
      const data = await getCheckisFavoriteService(token, id);

      setIsFavorite(data);
    };

    loadTweet();
  }, [token, id]);

  return { isFavorite };
};
