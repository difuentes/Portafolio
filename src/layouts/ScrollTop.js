import { useEffect } from "react";
import { scrollTop } from "../utilits";
const ScrollTop = () => {
  useEffect(() => {
    window.addEventListener("scroll", scrollTop);
  }, []);
  return (
    <div className="progressbar">
      <a href="#">
        <span className="text" style={{ bottom: "150.75px" }}>
          Subir
        </span>
      </a>
      <span className="line" />
    </div>
  );
};
export default ScrollTop;
