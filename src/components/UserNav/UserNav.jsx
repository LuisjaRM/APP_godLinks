import { useNavigate } from "react-router";
import "./UserNav.css";
import { useAuth } from "../../contexts/AuthContext";
import { useShow } from "../../contexts/ShowContext";

export const UserNav = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [show, setShow] = useShow();

  return (
    <nav className="user-nav">
      <li
        onClick={() => {
          navigate("/profile");
          setShow(!show);
        }}
      >
        Tu perfil
      </li>
      <li>Tus ofertas</li>
      <li
        onClick={() => {
          logout();
          setShow(!show);
          navigate("/");
        }}
      >
        Cerrar sesión
      </li>
    </nav>
  );
};
