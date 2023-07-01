import "./UserButton.css";

// Components

import { UserNav } from "../UserNav/UserNav";

// Contexts

import { useShowLogin } from "../../contexts/ShowLoginContext";
import { useShowSettings } from "../../contexts/ShowSettingsContext";
import { useAuth } from "../../contexts/AuthContext";

export const UserButton = () => {
  const [showLogin, setShowLogin] = useShowLogin();
  const [, setShowSettings] = useShowSettings();
  const { user } = useAuth();

  return (
    <button
      className={`button user-button`}
      onClick={() => {
        setShowLogin(!showLogin);
        setShowSettings(false);
      }}
    >
      {user ? (
        <img
          className="user-image"
          src={
            user.avatar
              ? `${import.meta.env.VITE_BACKEND}uploads/${user.avatar}`
              : "/default-user.webp"
          }
          alt={user.user}
        />
      ) : (
        <img
          className="user-image"
          src="/default-user.webp"
          alt="default-user"
        />
      )}
      <UserNav />
    </button>
  );
};
