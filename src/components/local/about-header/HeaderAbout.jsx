import "./headerAbout.css";
import { Container } from "react-bootstrap";
import AnimationTitles from "../../animations/AnimationTitles";
import { useNavigate } from "react-router-dom";

export default function HeaderAbout() {
  const navigate = useNavigate();
  return (
    <div className="headerAbout">
      <Container className="d-flex justify-content-center flex-column align-items-center gap-5 mt-5">
        <div className="d-flex flex-column gap-3 text-center text-center justify-content-center">
          <AnimationTitles
            title="We’re building apps you’ll enjoy using"
            color="black-100"
            className="mt-0"
          />
          <p className="p-res black-20">
            Our aim at AI Tool is to address present challenges through AI
            solutions, employing a more human-centered design method and a
            seamlessly intuitive user experience.
          </p>
          <button
            className="btn-1 white p1 mb-3 d-block mx-auto"
            onClick={() => navigate("/princing")}
          >
            Browse Products
          </button>
        </div>
        <div className="d-flex justify-content-center image position-relative"></div>
      </Container>
    </div>
  );
}
