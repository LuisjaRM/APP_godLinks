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
            <FormattedMessage id="myprofile" />
          </li>

          <li
            className="link"
            onClick={() => {
              setShowLogin(!showLogin);
              navigate(`/userInfo/${user.id}`);
            }}
          >
            <FormattedMessage id="myoffers" />
          </li>

          <li
            className="link logout"
            onClick={() => {
              logout();
              setShowLogin(!showLogin);
              navigate("/");
            }}
          >
            <p>
              <FormattedMessage id="signout" />
            </p>
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
