import "./ErrorMessage.css";

// Intl

import {FormattedMessage} from 'react-intl';

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
        <h1 className="error-text-ap"><FormattedMessage id="oops"/></h1>
        <p className="error-mess-p"> <FormattedMessage id="fail-connection"/></p>

        <button onClick={handleClick} className="book home-page">
          <FormattedMessage id="home"/>
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
