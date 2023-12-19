import Counter from "./Counter";

const homeData = {
  firstName: "Diego Emilio",
  lastName: "Fuentes",
  designation: "Full Stack Developer",
  address: "Santiago",
  img: "img/hero/IMG_8498.png",
  bio: "un apasionado programador full stack con experiencia en el desarrollo de soluciones web y aplicaciones interactivas! Mi enfoque es crear experiencias digitales robustas y eficientes, desde el diseño hasta la implementación.",
  numberOfProject: 20,
  numberofyear: 8,
};

const Home = () => {
  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <div className="image" data-img-url="img/hero/vibrant-color-grainy-gradient-on-dark-background-2023-11-27-05-16-23-utc.jpg" />
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="inner">
                <h3 className="hello">Hola {`Soy`}</h3>
                <h3 className="name">
                  {homeData.firstName} {homeData.lastName}
                </h3>
                <h3 className="job">
                  {homeData.designation} de {homeData.address}
                </h3>
                <p className="text">{homeData.bio}</p>
                <div className="buttons">
                  {/* <div className="devman_tm_button">
                    <a className="anchor" href="#contact">
                      Get a Quote
                    </a>
                  </div> */}
                  <div className="devman_tm_button">
                    <a className="anchor" href="#about">
                        Sobre mi
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="stroke_1">{homeData.firstName}</h3>
              <h3 className="stroke_2">{homeData.lastName}</h3>
            </div>
            <div className="right">
              <div className="image">
                <img src="img/thumbs/53-61.jpg" alt="" />
                <div className="main" data-img-url={homeData.img} />
                <span className="win">
                  <img src="img/svg/award.svg" alt="" className="svg" />
                </span>
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={homeData.numberofyear} />
                    </h3>
                    <span className="item_name">
                      Años de 
                      <br />
                      experiencia
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={homeData.numberOfProject} />
                      <span className="extra">+</span>
                    </h3>
                    <span className="item_name">
                      Proyectos
                      <br />
                      Completados
                    </span>
                  </div>
                </div>
                <span className="circle anim_circle">
                  <img src="img/hero/code-2.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
