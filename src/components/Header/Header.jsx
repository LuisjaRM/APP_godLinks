import { Link } from "react-router-dom";
import { Dropdown } from "../Dropdown/Dropdown";
import { useShow } from "../../contexts/ShowContext";
import "./Header.css";

export const Header = () => {
  const [show, setShow] = useShow();

  return (
    <header>
      <Dropdown icon="🙇‍♀️">
        <nav>
          <button onClick={() => setShow(!show)}>Iniciar Sesión</button>
          <Link to="/modify-user">Modificar Usuario</Link>
        </nav>
      </Dropdown>

      <Link to="/">
        <h1 className="title">GODLINKS</h1>
      </Link>

      <button className="button">👓</button>
    </header>
  );
};
