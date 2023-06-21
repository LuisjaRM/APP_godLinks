import "./UserButton.css";

// Contexts

import { useShow } from "../../contexts/ShowContext";
import { useAuth } from "../../contexts/AuthContext";
import { UserNav } from "../UserNav/UserNav";

export const UserButton = () => {
  const [show, setShow] = useShow();
  const { user } = useAuth();

  return (
    <>
      <button className="user-button" onClick={() => setShow(!show)}>
        {user ? (
          <img
            className="user-image"
            src={
              user.avatar
                ? `${import.meta.env.VITE_BACKEND}uploads/${user.avatar}`
                : "/android-icon-36x36.png"
            }
            alt={user.user}
          />
        ) : (
          "👩‍🦲"
        )}
      </button>

      <UserNav />
    </>
  );
};
