import { useEffect, useState } from "react";

const loadUserInfo = async (url, token, setDataUser, setLoading, setError) => {
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
    setDataUser(data);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

export const useGetDataUser = (url, token) => {
  const [dataUser, setDataUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadUserInfo(url, token, setDataUser, setLoading, setError);
  }, [url, token]);

  const refresh = () =>
    loadUserInfo(url, token, setDataUser, setLoading, setError);

  // const refreshUser = () => {
  //   loadUserInfo(dataUser.user);
  // };

  return { dataUser, loading, error, refresh };
};
