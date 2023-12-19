const aboutData = {
  designation: "Developer",
  title: "Diseño y desarrollo aplicaciones con el propósito de brindar asistencia y facilitar la vida de las personas.",
  text: [
    "Desde aplicaciones web modernas hasta desarrollos especializados, mis proyectos abarcan diversas áreas, incluyendo desarrollo web, aplicaciones móviles,etc. ",
    "Cada proyecto está respaldado por un enfoque meticuloso en el diseño, la implementación eficiente y la entrega de experiencias excepcionales.",
  ],
  skillIcons: [
    { name: "joomla", icon: "img/svg/joomla.svg" },
    { name: "wp", icon: "img/svg/wp.svg" },
    { name: "drupal", icon: "img/svg/drupal.svg" },
    { name: "laravel", icon: "img/svg/laravel.svg" },
    { name: "laravel", icon: "img/svg/laravel.svg" },
    { name: "laravel", icon: "img/svg/laravel.svg" },
  ],
};

const About = () => {
  return (
    <div className="devman_tm_section" id="about">
      <div className="devman_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="image_wrap">
                <img src="img/thumbs/64-49.jpg" alt="" />
                <div className="main" data-img-url="img/about/1.png" />
                <div className="extra_image">
                  <div className="image_inner">
                    <img src="img/thumbs/1-1.jpg" alt="" />
                    {/* <div
                      className="main_extra"
                      data-img-url="img/about/2.jpg"
                    /> */}
                  </div>
                </div>
                {aboutData.skillIcons.map((skill, i) => (
                  <div className={i === 0 ? "extra_image" : ""} key={i}>
                    <span
                      className={`icon_${i + 1} wow fadeIn`}
                      data-wow-duration="1s"
                      data-wow-delay={`0.${i * 2}s`}
                    >
                      <img className="svg" src={skill.icon} alt="" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>
                 {aboutData.designation}
                </span>
                <h3>{aboutData.title}</h3>
              </div>
              <div className="text">
                {aboutData.text.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
              <div className="devman_tm_button">
                <a className="anchor" href="#portfolio">
                  Ver Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
