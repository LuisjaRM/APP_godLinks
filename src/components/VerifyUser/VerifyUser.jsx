import "./VerifyUser.css";
import {FormattedMessage} from 'react-intl';


// Contexts

import { useShowLogin } from "../../contexts/ShowLoginContext";
import { useShowVerify } from "../../contexts/ShowVerifyContext";

export const VerifyUser = ({ setIsLogin }) => {
  const [showLogin, setShowLogin] = useShowLogin();
  const [showVerify, setShowVerify] = useShowVerify();

  return (
    showVerify && (
      <section
        className="modal-back dark"
        onClick={(e) => {
          e.stopPropagation();
          setIsLogin(true);
          setShowVerify(!showVerify);
          setShowLogin(!showLogin);
        }}
      >
        <section className="modal-body little verify">
          <p><FormattedMessage id="email-verification"/></p>

          <button
            className="button verify-button"
            onClick={(e) => {
              e.stopPropagation();
              setIsLogin(true);
              setShowVerify(!showVerify);
              setShowLogin(!showLogin);
            }}
          >
            <FormattedMessage id="continue"/>
          </button>
        </section>
      </section>
    )
  );
};
