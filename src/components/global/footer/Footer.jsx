import { Container } from "react-bootstrap";
import "./footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer bg-black-100">
      <Container className="d-flex flex-column align-items-center mt-7">
        <h3 className="white h5 m-0">h0peAi</h3>
        <ul className="p-0 m-0 d-flex justify-content-center align-items-center flex-column flex-md-row gap-3 p1 black-10 mt-4">
          <li className="py-2 px-3" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="py-2 px-3" onClick={() => navigate("/about")}>
            About
          </li>
          <li className="py-2 px-3" onClick={() => navigate("/princing")}>
            Pricing
          </li>
          <li className="py-2 px-3" onClick={() => navigate("/contact")}>
            Contact
          </li>
        </ul>
        <button className="d-block d-md-none btn-1 white my-4">
          Get Started
        </button>
        <div className="white d-flex justify-content-center align-items-center flex-column flex-md-row gap-4 gap-md-5 my-4">
          <div className="d-flex justify-content-center align-items-center gap-2">
            <img
              src={require("../../../images/icons/fluent_location-16-filled.png")}
              alt=""
            />
            <p className="m-0 p1">Java, India</p>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <img
              src={require("../../../images/icons/fluent_mail-24-filled.png")}
              alt=""
            />
            <p className="m-0 p1">h0peAi@mail.com</p>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <img
              src={require("../../../images/icons/fluent_mail-24-filled.png")}
              alt=""
            />
            <p className="m-0 p1">h0peAi</p>
          </div>
        </div>
        <span className="line mt-5 d-none d-md-block"></span>
        <div className="subscribe d-none d-md-flex justify-content-between align-items-center flex-column flex-lg-row gap-3 w-100 px-5 mt-5 text-center text-md-start">
          <h5 className="h5 white">Join to get free updates every week.</h5>
          <div className="subscribe-input bg-black-100 d-flex justify-content-between align-items-center px-3 py-2">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-black-100 white"
            />
            <button className="btn-1 white">subscribe</button>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center flex-column flex-md-row w-100 mt-4 black-10">
          <p>©2026 h0peAi</p>
          <p>All Rights Reserved</p>
          <p>Privacy Policy I Terms Of Service</p>
        </div>
      </Container>
    </div>
  );
}
