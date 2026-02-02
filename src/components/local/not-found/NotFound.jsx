import { Container } from "react-bootstrap";
import "./notFound.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <Container className="text-center mt-7">
        <div className="bg-primary-100 white">
          <h3 className="h3-res mb-4">404</h3>
          <p className="p-res mb-5 fw-light">
            Well, something is not right here.{" "}
            <span
              onClick={() => navigate("/")}
              className="white fw-normal text-decoration-none"
            >
              Go back to home!
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
}
