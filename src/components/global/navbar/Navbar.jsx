import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand className="h5 primary-100" onClick={() => navigate("/")}>
          h0peAi
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="shadow-none border-0"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 gap-0 gap-lg-3 black-50 p1"
            navbarScroll
          >
            <Nav.Link onClick={() => navigate("/")}>home</Nav.Link>
            <Nav.Link onClick={() => navigate("princing")}>Princing</Nav.Link>
            <Nav.Link onClick={() => navigate("about")}>About</Nav.Link>
            <Nav.Link onClick={() => navigate("contact")}>Contact</Nav.Link>
            <Nav.Link onClick={() => navigate("faqs")}>FAQs</Nav.Link>
          </Nav>
          <button
            className="btn-1 white p1"
            onClick={() => navigate("princing")}
          >
            Get Started
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
