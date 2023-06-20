import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { useShow } from "../../contexts/ShowContext";
import { ModalClose } from "../ModalCloseDropdown/ModalClose";
import "./UserNav.css";

export const UserNav = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [show, setShow] = useShow();

  return (
    <ModalClose>
      <section
        onClick={() => {
          setShow(!show);
        }}
      >
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
    </ModalClose>
  );
};
