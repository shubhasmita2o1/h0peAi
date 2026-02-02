import { Container } from "react-bootstrap";
import "./header.css";
import { useNavigate } from "react-router-dom";
import AnimationTitles from "../../animations/AnimationTitles";

export default function Header({ features }) {
  // on click on button in the line 25, move to features
  const moveFeatures = () => {
    features.current.scrollIntoView();
  };

  const navigate = useNavigate();

  return (
    <div className="header">
      <Container className="bg-black-100 d-flex flex-row flex-lg-column justify-content-center align-items-md-start align-items-center align-items-lg-center gap-lg-5 mt-5">
        <div className="d-flex flex-column gap-3 text-center text-md-start text-lg-center justify-content-center">
          <AnimationTitles
            title={"Smarter Work Starts with h0peAi"}
            color={"white"}
            className="mt-0 mt-md-5 mt-lg-0"
          />
          <p className="p-res black-10">
            AI-powered clarity for better productivity and decisions.


          </p>
          <div>
            <button
              className="btn-1 white p1 mb-3 me-lg-3 d-block d-lg-inline mx-auto mx-md-0"
              onClick={() => navigate("/princing")}
            >
              Get Started Free
            </button>
            <button className="btn-2 primary-100 p1" onClick={moveFeatures}>
              Explore Feature
            </button>
          </div>
        </div>
        <div className="d-md-flex justify-content-center image position-relative d-none order-first order-lg-last"></div>
      </Container>
    </div>
  );
}
