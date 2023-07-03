import "./AboutUs.css";

export const AboutUs = () => {
  // Document Title
  document.title = "Sobre Nosotros";

  return (
    <section className="about-us">
      <h1>¿Que es Godlinks?</h1>
      <p>
        Este proyecto nace como una idea inspirada en lo mucho que nos gustan
        los videojuegos. Web creada como medio virtual para compartir las
        mejores ofertas relacionadas con el mundo del gaming. Los usuarios votan
        cuáles les parecen las mejores ofertas.
      </p>
      <h2>¿Como funciona?</h2>
      <p>
        Las ofertas son publicadas por los propios usuarios La comunidad es la
        que hace que una oferta sea más popular o menos a través de los votos.
        Puedes visitar directamente desde nuestra web las páginas donde se
        ofertan los productos de las publicaciones. Puedes guardar las ofertas
        que más te gusten.
      </p>
      <h3>Conoce a nuestro increíble equipo</h3>
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
        bootcamp Especialemte a Stefano tutor técnico y Bárbara especialista en
        desarrollo profesional. También agradecer todo lo que hemos aprendido a
        los profesores que nos han acompañado a lo largo del curso, Nelson
        especialista en backend, Anxo especialista en frontend, Berto y Samu,
        con videos de refuerzo cada semana.
      </p>
    </section>
  );
};
