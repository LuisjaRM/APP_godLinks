import "./NotFound.css";

// React

import { Link } from "react-router-dom";
import {FormattedMessage} from 'react-intl';

export const NotFound = () => {
  // Document Title
  document.title = "¡Ups!";
  //document.title = "¡Oops!";

  return (
    <section className="page_404">
      <section className="container">
        <section className="col-sm-10 col-sm-offset-1 text-center">
          <div className="four_zero_four_bg"></div>

          <article className="contant_box_404">
            <h1 className="Paragraph"><FormattedMessage id="oops"/></h1>
            <p className="Paragraph"><FormattedMessage id="page-notfound"/></p>

            <Link className="link_404" to="/">
            <FormattedMessage id="home"/>
            </Link>
          </article>
        </section>
      </section>
    </section>
  );
};
