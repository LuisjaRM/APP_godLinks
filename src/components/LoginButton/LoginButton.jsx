import { useShow } from "../../contexts/ShowContext";
import { useAuth } from "../../contexts/AuthContext";
import { UserInfo } from "../UserInfo/UserInfo";
import { Link } from "react-router-dom";
import "./LoginButton.css";

export const LoginButton = () => {
  const [show, setShow] = useShow();
  const { user } = useAuth();

  return (
    <section>
      {!user ? (
        <button
          className="button"
          onClick={() => {
            setShow(!show);
          }}
        >
          🙇‍♀️
        </button>
      ) : (
        <UserInfo avatar="😃">
          {/* <p>Nombre de usuario</p> */}
          <Link to="/profile">Tu perfil</Link>
          {/* <p>Mis ofertas</p>
          <p>Cerrar Sesión</p> */}
        </UserInfo>
      )}
    </section>
  );
};
