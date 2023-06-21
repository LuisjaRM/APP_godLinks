import "./UserNav.css";

// react-router-dom

import { useNavigate } from "react-router";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useShow } from "../../contexts/ShowContext";

export const UserNav = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { user } = useAuth();
  const [show, setShow] = useShow();

  return (
    show &&
    user && (
      <section
        className="modal-user"
        onClick={() => {
          setShow(!show);
        }}
      >
        <section className="userNav-wrap" onClick={(e) => e.stopPropagation()}>
          <nav className="user-nav">
            <a
              className="link"
              onClick={() => {
                navigate("/profile");
                setShow(!show);
              }}
            >
              Mi perfil
            </a>

            <a
              className="link"
              onClick={() => {
                setShow(!show);
                navigate("/userInfo/:id");
              }}
            >
              Mis ofertas
            </a>

            <a
              className="logout"
              onClick={() => {
                logout();
                setShow(!show);
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
