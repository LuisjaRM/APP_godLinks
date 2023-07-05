import "./VerifyUser.css";

// Intl

import { FormattedMessage } from "react-intl";

// Contexts

import { useShowLogin } from "../../contexts/ShowLoginContext";
import { useShowVerify } from "../../contexts/ShowVerifyContext";
import { useState } from "react";

export const VerifyUser = ({ isLogin, setIsLogin }) => {
  const [showLogin, setShowLogin] = useShowLogin();
  const [showVerify, setShowVerify] = useShowVerify();
  const [isAnimated, setIsAnimated] = useState();

  showVerify &&
    setTimeout(() => {
      setIsAnimated(true);
    }, 1500);

  showVerify &&
    setTimeout(() => {
      setIsLogin(!isLogin);
      setShowVerify(false);
      setShowLogin(!showLogin);
    }, 5000);

  !showVerify &&
    setTimeout(() => {
      setIsAnimated(false);
    }, 1500);

  return (
    showVerify && (
      <section className="modal-back dark">
        <section className="modal-body little verify">
          <section className="container-email">
            <section className={`email-box ${isAnimated ? "animated" : ""}`}>
              <section className="triangle"></section>
              <section className="triangle"></section>
              <section className="triangle">GodLinks.S.A</section>
              <section className="triangle"></section>
              <section className="paper">
                <p>
                  <FormattedMessage id="email-verification" />
                </p>
                <section className="content-box"></section>
              </section>
            </section>
          </section>
        </section>
      </section>
    )
  );
};
