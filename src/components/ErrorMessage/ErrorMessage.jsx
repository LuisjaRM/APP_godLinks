import "./ErrorMessage.css";
import { Link } from "react-router-dom";

export const ErrorMessage = () => {
  return (
    <section className="errorMessage">
      {/* ErrorMessage*/}

      <section className="error-message-box">
        <h1 className="error-text-ap">¡Vaya! parece que algo ha salido mal</h1>
        <p className="error-mess-p"> Fallo en la conexión con el servidor</p>
      </section>

      {/* Buttons*/}

      <section className="book-box">
        <Link to={"/"} className="book home-page">
          Volver al inicio
        </Link>
      </section>

      {/* Stars */}
      <section>
        <ul>
          <li className="starfourth"></li>
        </ul>
      </section>

      {/* Lamp */}

      <section className="lamp__wrap">
        <div className="lamp">
          <div className="cable"></div>
          <div className="cover"></div>
          <div className="in-cover">
            <div className="bulb"></div>
          </div>
          <div className="light"></div>
        </div>
      </section>

      <section className="error-lamp"></section>
    </section>
  );
};
