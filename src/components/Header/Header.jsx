import { Link } from "react-router-dom";
import { Dropdown } from "../Dropdown/Dropdown";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <Dropdown icon="🙇‍♀️">
        <nav>
          <Link to="/login">Iniciar Sesión</Link>
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
