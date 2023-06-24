import "./UserNav.css";

// react-router-dom

import { useNavigate } from "react-router";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useShowLogin } from "../../contexts/ShowLoginContext";

export const UserNav = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showLogin, setShowLogin] = useShowLogin();

  return (
    showLogin &&
    user && (
      <section
        className="modal-user"
        onClick={() => {
          setShowLogin(!showLogin);
        }}
      >
        <section className="userNav-wrap" onClick={(e) => e.stopPropagation()}>
          <nav className="user-nav">
            <a
              className="link-perfile"
              onClick={() => {
                navigate("/profile");
                setShowLogin(!showLogin);
              }}
            >
              Mi perfil
            </a>

            <a
              className="link-perfile"
              onClick={() => {
                setShowLogin(!showLogin);
                navigate("/userInfo/:id");
              }}
            >
              Mis ofertas
            </a>

            <a
              className="logout-perfile"
              onClick={() => {
                logout();
                setShowLogin(!showLogin);
                navigate("/");
              }}
            >
              Cerrar sesión
            </a>
          </nav>
        </section>
      </section>
    )
  );
};
