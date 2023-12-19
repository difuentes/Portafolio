import { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const Skills = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_skills">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span> Mis Habilidades de desarrollador</span>
            <h3></h3>
            <p>
            Destaco por un conjunto diverso de habilidades que abarcan desde el desarrollo frontend hasta la gestión eficiente de bases de datos y la creación de experiencias móviles. 
            </p>
          </div>
          <div className="skills_wrapper">
            <div className="left">
              <div className="dodo_progress">
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">WordPress</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">JavaScript</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">Flutter</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">CSS</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">GIT</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">MySQL</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">C++</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">PHP</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">React</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">Adobe XD</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={90}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">ExpressJS</span>
                    <span className="number">90%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={80}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">Twing</span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={80}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">NextJs</span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={80}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">Semantic UI</span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="dodo_progress">
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">HTML</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">JQuery</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">MongoDB</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">SQL</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">Java</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">Laravel</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">Bootstrap</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">React Native</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={100}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">TailwindCSS</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={80}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">Material UI</span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={80}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">Materialize</span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>

                <div
                  className="skillsInner___ progress_inner"
                  data-value={80}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">AngularJS</span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={80}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">Sencha</span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={70}
                  data-color="#76448A"
                >
                  <span>
                    <span className="label">Phyton</span>
                    <span className="number">70%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
