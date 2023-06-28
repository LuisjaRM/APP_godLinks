import "./UserNav.css";

// Material

import LoginIcon from "@mui/icons-material/Login";

// React

import { useNavigate } from "react-router";

// Material

import LoginIcon from "@mui/icons-material/Login";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useShowLogin } from "../../contexts/ShowLoginContext";
import { SvgIcon } from "@mui/material";

export const UserNav = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const [showLogin, setShowLogin] = useShowLogin();

  return (
    showLogin &&
    user && (
      <section
        className="modal-back"
        onClick={() => {
          setShowLogin(!showLogin);
        }}
      >
        <nav className="user-nav" onClick={(e) => e.stopPropagation()}>
          <li className="username">{user.user}</li>

          <li
            className="link"
            onClick={() => {
              navigate("/profile");
              setShowLogin(!showLogin);
            }}
          >
            Mi perfil
          </li>

          <li
            className="link"
            onClick={() => {
              setShowLogin(!showLogin);
              navigate("/userInfo/:id");
            }}
          >
            Mis ofertas
          </li>

          <li
            className="link logout"
            onClick={() => {
              logout();
              setShowLogin(!showLogin);
              navigate("/");
            }}
          >
            Cerrar sesión <SvgIcon component={LoginIcon} inheritViewBox />
          </li>
        </nav>
      </section>
    )
  );
};
