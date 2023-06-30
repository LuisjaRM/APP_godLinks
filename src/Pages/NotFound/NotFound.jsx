import "./NotFound.css";

// React

import { Link } from "react-router-dom";

// Contexts

import { useShowFilter } from "../../contexts/ShowFilter";

export const NotFound = () => {
  // Document Title
  document.title = "¡Ups!";

  // ShowFilter

  const [, setShowFilter] = useShowFilter();
  setShowFilter(false);

  return (
    <section className="page_404">
      <section className="container">
        <section className="col-sm-10 col-sm-offset-1 text-center">
          <div className="four_zero_four_bg"></div>

          <article className="contant_box_404">
            <h1 className="Paragraph">¡Vaya! Algo ha salido mal</h1>
            <p className="Paragraph">La página que buscas no existe</p>

            <Link className="link_404" to="/">
              Volver al inicio
            </Link>
          </article>
        </section>
      </section>
    </section>
  );
};
