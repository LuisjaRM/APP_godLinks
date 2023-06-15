import { Link } from "react-router-dom";
import { Dropdown } from "../Dropdown/Dropdown";
import { useShow } from "../../contexts/ShowContext";
import { useNightMode } from "../../contexts/NightModeContext";
import "./Header.css";


export const Header = () => {
  const [show, setShow] = useShow();
  const [nightMode, toggleNightMode] = useNightMode();

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

      <button onClick={() => toggleNightMode()}>
        {nightMode ? "🌌" : "🌞"}
      </button>

      <button className="button">👓</button>
      
    </header>
  );
};
