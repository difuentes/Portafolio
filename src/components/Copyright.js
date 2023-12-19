const Copyright = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_copyright">
        <div className="container">
          <div className="inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <p> Desarrollado con amor por{" "}
                <a
                  href="https://themeforest.net/user/codeefly"
                  rel="noreferrer"
                  target="_blank"
                >
                  Demilio
                </a>{" "}
                © {new Date().getFullYear()}
              </p>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/diegoemiliofuentesgomez/"  >Linkedin </a>
                </li>
                <li>
                  <a href="https://github.com/difuentes ">GitHub</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Copyright;
