import { useShow } from "../../contexts/ShowContext";
import { useAuth } from "../../contexts/AuthContext";
import "./Dropdown.css";

export const Dropdown = ({ icon, children }) => {
  const [show, setShow] = useShow();
  const { user } = useAuth();

  return (
    <section className="dropdown">
      <button className="dropdown-button" onClick={() => setShow(!show)}>
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
          icon
        )}
      </button>
      {show && <section className="dropdown-body">{children}</section>}
    </section>
  );
};
