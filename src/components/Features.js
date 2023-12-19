const features_list = [
  {
    title: "Implementacíon",
    icon: "img/svg/design.svg",
    text: "Desde la conceptualización hasta la realidad, me especializo en llevar a cabo la implementación de proyectos web y aplicaciones móviles. Utilizo tecnologías de vanguardia para construir soluciones robustas y escalables. Mi enfoque meticuloso se refleja en el código limpio y eficiente que produce cada proyecto.",
  },
  {
    title: "Desarrollo web",
    icon: "img/svg/development.svg",
    text: "En el mundo del desarrollo web, creo interfaces intuitivas y atractivas utilizando herramientas modernas como React.js. Mi enfoque en el desarrollo frontend se centra en la usabilidad, la accesibilidad y la compatibilidad con dispositivos para garantizar una experiencia perfecta para los usuarios finales",
  },
  {
    title: "Aplicaciones Mobile",
    icon: "img/svg/landing.svg",
    text: "El desarrollo de aplicaciones móviles es mi pasión. Creo experiencias fluidas y atractivas utilizando tecnologías como React Native o Flutter, lo que permite llevar la funcionalidad de las aplicaciones web a dispositivos móviles. Mi compromiso es entregar aplicaciones que no solo se destaquen visualmente, sino que también ofrezcan un rendimiento excepcional.",
  },
];
const Features = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_features">
        <div className="container">
          <div className="features_list">
            <ul>
              {features_list.map((feature, i) => (
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={`"0.${i * 2}s"`}
                  key={i}
                >
                  <div className="list_inner">
                    <div className="short">
                      <div className="title">
                        <span>{`0${i + 1}`}</span>
                        <h3>{feature.title}</h3>
                      </div>
                      <div className="icon">
                        <img className="svg" src={feature.icon} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <p>{feature.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
