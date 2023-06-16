import { useContext } from "react";
import "./UserProfile.css";
import { AuthContext } from "../../contexts/AuthContext";

export const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <section>
        <h1>Tu perfil</h1>
        <p>{user.user}</p>
      </section>
    </>
  );
};
