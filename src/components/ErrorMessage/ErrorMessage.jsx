import "./ErrorMessage.css";
import { Link } from "react-router-dom";

export const ErrorMessage = ({ message }) => {
  return (
    <section className="errorMessage">
      <h1 className="Error1">Error</h1>
      <p className="Error2">{message}</p>
      <Link to={"/"}>Volver al inicio</Link>
    </section>
  );
};
