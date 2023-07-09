import "./AboutUs.css";

// Context

import { useNightMode } from "../../contexts/NightModeContext";
import { useLanguage } from "../../contexts/LanguageContext";

export const AboutUs = () => {
  // Theme Context
  const [nightMode] = useNightMode();

  // Document Title
  const [language] = useLanguage();

  language === "es"
    ? (document.title = "Sobre Nosotros")
    : (document.title = "About us");

  return (
    <section className={`about-us-page ${nightMode === "day" ? "light" : ""}`}>
      <h1>¿Que es Godlinks?</h1>
      <section className="paragraph">
        <p>
          Este proyecto nace como una idea inspirada en lo mucho que nos gustan
          los videojuegos y en los buenos ratos que nos han hecho pasar a lo
          largo de nuestra vida.
        </p>
        <p>
          Se trata de una web que funciona como medio virtual para compartir
          ofertas relacionadas con el mundo gaming.
        </p>
      </section>

      <h2>¿Como funciona?</h2>
      <section className="paragraph">
        <p>
          Las ofertas que aparecen en la página son publicadas por los usuarios.
          La comunidad es la que hace que una oferta sea más o menos popular a
          través de sus votos.
        </p>
        <p>
          Guarda las ofertas que más te gusten para no perderlas de vista y
          visita directamente desde nuestra web las páginas donde se ofertan los
          productos de las publicaciones.
        </p>
      </section>

      <h2>Conócenos</h2>
      <section className="paragraph">
        <p> Estos son los cuatro desarrolladores que hay detrás de Godlinks.</p>

        <p>
          Luisja Rodríguez: Apasionado por las nuevas tecnologías y por hacerlo
          todo a la perfección. Ha encontrado en la programación su pasión y su
          vocación laboral. Le encantan los videojuegos, la música y el deporte.
        </p>

        <p>
          Mladen Aleksandrov: Inquieto por naturaleza, me encanta la
          programación (odio css) y reparar cosas imposibles. Me gusta
          desconectar paseando por la montaña solo.
        </p>

        <p>
          Pablo Planes: Fascinado desde pequeño por los ordenadores, acabé
          haciendo de ello mi profesión. Me encantan la gastronomía, la música y
          viajar, en cualquiera de sus combinaciones.
        </p>

        <p>
          Victor Otero: Soy alguien extremadamente curioso. Me gusta aprender
          cada día y estar siempre al día de las últimas novedades en
          tecnología. Me encanta el deporte, la buena comida y los videojuegos.
          Soy de reírse mucho y hacer reír, y siempre trato de ver el vaso medio
          lleno.
        </p>
      </section>

      <h2>Agradeciemientos</h2>
      <section className="paragraph">
        <p>
          Queremos dar las gracias al gran equipo de HACKABOSS que ha estado
          siguiendo nuestro crecimiento personal y profesional durante todo el
          bootcamp.
        </p>

        <p>
          Especialemte a Stefano profesor a la par que tutor técnico y Bárbara
          especialista en desarrollo profesional, que nos han ayudado en cada
          paso que dabamos.
        </p>

        <p>
          También agradecer todo lo que hemos aprendido a los profesores que nos
          han acompañado a lo largo del curso, Nelson especialista en backend,
          Anxo especialista en frontend, Berto y Samuel, con videos de refuerzo
          cada semana.
        </p>
        <p>
          Os agradecemos enormemente el esfuerzo que habéis realizado, en cada
          clase. tutoría o video.
        </p>

        <p>
          Para cualquier duda que puedas tener con respecto a la web, no dudes
          en contactar con nosotros a través de nuestras redes sociales que
          encontrarás en el pie de página. 👇
        </p>
      </section>
    </section>
  );
};
