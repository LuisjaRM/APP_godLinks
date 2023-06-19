import { useEffect, useState } from "react";

const loadOffers = async (url, token, setOffers, setLoading, setError) => {
  try {
    setLoading(true);

    const response = await fetch(url, {
      headers: {
        Authorization: token,
      },
    });

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

export const useGetFavoritesOffers = (url, token) => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadOffers(url, token, setOffers, setLoading, setError);
  }, [url, token]);

  const refresh = () => loadOffers(url, token, setOffers, setLoading, setError);

  return { offers, loading, error, refresh };
};

// import { useEffect, useState } from "react";
// import { getMyFavoriteOffersService } from "../services/api";

// export const useGetFavoritesOffers = (token) => {
//   const [offers, setOffers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const loadTweet = async () => {
//       try {
//         setLoading(true);
//         const data = await getMyFavoriteOffersService(token);

//         setOffers(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadTweet();
//   }, [token]);

//   return { offers, error, loading };
// };
