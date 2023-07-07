import "./UserNav.css";

// Intl

import { FormattedMessage } from "react-intl";

// Material

import { SvgIcon } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

// React

import { useNavigate } from "react-router";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useShowLogin } from "../../contexts/ShowLoginContext";
import { useEffect } from "react";

export const UserNav = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const [showLogin, setShowLogin] = useShowLogin();

  const toggleShow = () => {
    if (window.scrollY > 1) {
      setShowLogin(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleShow);

    return () => {
      window.removeEventListener("scroll", toggleShow);
    };
  }, []);

  return (
    showLogin &&
    user && (
      <section
        role="button"
        className="modal-back"
        onClick={() => {
          setShowLogin(!showLogin);
        }}
      >
        <nav className="user-nav" role="button" onClick={(e) => e.stopPropagation()}>
          <li className="username">{user.user}</li>

          <li
            role="button"
            className="link"
            onClick={() => {
              navigate("/profile");
              setShowLogin(!showLogin);
            }}
          >
            <FormattedMessage id="myprofile" />
          </li>

          <li
            role="button"
            className="link"
            onClick={() => {
              setShowLogin(!showLogin);
              navigate(`/userInfo/${user.id}`);
            }}
          >
            <FormattedMessage id="myoffers" />
          </li>

          <li
            role="button"
            className="link logout"
            onClick={() => {
              logout();
              setShowLogin(!showLogin);
              navigate("/");
            }}
          >
            <FormattedMessage id="signout" />
            <SvgIcon
              className="logout-icon"
              component={LogoutIcon}
              inheritViewBox
            />
          </li>
        </nav>
      </section>
    )
  );
};
