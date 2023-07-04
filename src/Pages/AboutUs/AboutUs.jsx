import "./AboutUs.css";

export const AboutUs = () => {
  // Document Title
  document.title = "Sobre Nosotros";

  return (
    <section className="about-us">
      <h1>¿Que es Godlinks?</h1>
      <p>
        Este proyecto nace como una idea inspirada en lo mucho que nos gustan
        los videojuegos y en los buenos ratos que nos han hecho pasar a lo largo
        de nuestra vida.
        <br /> Se trata de una web que funciona como medio virtual para
        compartir ofertas relacionadas con el mundo gaming. <br />
        Los usuarios registrados votan cuáles les parecen las mejores ofertas.
      </p>
      <h2>¿Como funciona?</h2>
      <p>
        Las ofertas que aparecen en la página son publicadas por los usuarios.
        <br />
        La comunidad es la que hace que una oferta sea más popular o menos a
        través de los votos. <br /> Guarda las ofertas que más te gusten para no
        perderlas de vista. <br /> Visita directamente desde nuestra web las
        páginas donde se ofertan los productos de las publicaciones.
      </p>
      <h2>Conócenos</h2>
      Estos son los cuatro desarrolladores que hay detrás de Godlinks.
      <ul>
        <li>
          Luisja Rodríguez: Apasionado por las nuevas tecnologías y por hacerlo
          todo a la perfección. Me encantan los videojuegos, la música y tirarle
          mi dinero a los chollitos más top.
        </li>
        <li>
          Mladen Aleksandrov: Inquieto por naturaleza, me encanta el bricolaje,
          la electrónica y reparar cosas imposibles. Me gusta desconectar
          paseando por la montaña con mi familia. Creo que cada momento es
          importante y hay que aprovecharlo.
        </li>
        <li>
          Pablo Planes: Fascinado desde pequeño por los ordenadores, acabé
          haciendo de ello mi profesión. Me encantan la gastronomía, la música y
          viajar, en cualquiera de sus combinaciones.
        </li>
        <li>
          Victor Otero: Soy alguien extremadamente curioso. Cuando no estoy
          mirando algo de código, suelo estar viendo alguna conferencia
          interesante en YouTube. Habitualmente practico calistenia. Soy de
          reírse mucho y hacer reír, y siempre trato de ver el vaso medio lleno.
        </li>
      </ul>
      <h3>Agradeciemientos</h3>
      <p>
        Queremos dar las gracias al gran equipo de HACKABOSS que ha estado
        siguiendo nuestro crecimiento personal y profesional durante todo el
        bootcamp. <br /> Especialemte a Stefano profesor a la par que tutor
        técnico y Bárbara especialista en desarrollo profesional, que nos han
        ayudado en cada paso que dabamos. <br /> También agradecer todo lo que
        hemos aprendido a los profesores que nos han acompañado a lo largo del
        curso, Nelson especialista en backend, Anxo especialista en frontend,
        Berto y Samuel, con videos de refuerzo cada semana. <br /> Os
        agradecemos enormemente el esfuerzo que habéis realizado, en cada clase.
        tutoría o video.
      </p>
      <section>
        <p>
          Para cualquier duda que puedas tener con respecto a la web, no dudes
          en contactar con nosotros a través de nuestras redes sociales que
          encontrarás en el pie de página. 👇
        </p>
      </section>
    </section>
  );
};
