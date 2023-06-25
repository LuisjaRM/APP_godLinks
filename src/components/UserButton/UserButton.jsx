import "./UserButton.css";

// Contexts

import { useShowLogin } from "../../contexts/ShowLoginContext";
import { useAuth } from "../../contexts/AuthContext";

export const UserButton = () => {
  const [showLogin, setShowLogin] = useShowLogin();
  const { user } = useAuth();

  return (
    <>
      <button
        className={`user-button ${user ? "loged" : ""} ${
          showLogin ? "openNav" : ""
        }`}
        onClick={() => setShowLogin(!showLogin)}
      >
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
    </>
  );
};
