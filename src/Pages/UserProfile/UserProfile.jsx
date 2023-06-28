import "./UserProfile.css";

// Components

import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { ModifyUserCard } from "../../components/ModifyUserCard.jsx/ModifyUserCard";
import { Loading } from "../../components/Loading/Loading";

// Hooks

import { useGetMyData } from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";

// Destructuring of custom hook

export const UserProfile = () => {
  // Document Title
  document.title = "Mi perfil";

  const { token } = useAuth();
  const { dataUser, loading, error, refresh } = useGetMyData(token);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="user-profile">
      <ModifyUserCard refresh={refresh} userInfo={dataUser} />
    </section>
  );
};
