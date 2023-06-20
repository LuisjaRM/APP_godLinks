import { useEffect, useState } from "react";

export const useGetCheckisFavorite = (token, id) => {
  const [isFavorite, setIsFavorite] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND}isFavorite/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message);
      }

      const data = json.data;

      setIsFavorite(data);
    };

    loadData();
  }, [token, id]);

  return { isFavorite };
};
