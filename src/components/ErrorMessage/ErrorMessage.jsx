import "./ErrorMessage.css";

// React

import { useNavigate } from "react-router";

export const ErrorMessage = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.stopPropagation();
    navigate("/");
  };

  return (
    <section className="error-message">
      {/* ErrorMessage*/}

      <section className="error-message-box">
        <h1 className="error-text-ap">¡Vaya! parece que algo ha salido mal</h1>
        <p className="error-mess-p"> Fallo en la conexión con el servidor</p>

        <button onClick={handleClick} className="book home-page">
          Volver al inicio
        </button>
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
