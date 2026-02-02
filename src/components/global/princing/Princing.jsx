import { Container } from "react-bootstrap";
import "./princing.css";
import { useNavigate } from "react-router-dom";
import AnimationTitles from "../../animations/AnimationTitles";
import { Animations } from "../../animations/Animations";
import { motion } from "framer-motion";

export default function Princing({ brouseProducts }) {
  const navigate = useNavigate();

  function active(ele) {
    document.querySelector(".active")?.classList.remove("active");
    ele.target.classList.add("active")?.classList.add("white");
  }

  return (
    <div className="princing">
      <Container className="mt-7 white">
        <div className="text-center mx-auto">
          <AnimationTitles title="Princing" color="black-100" />
          <p className="p-res black-20 mt-3">
            Begin employing AITool - AI technology today and feel the influence
            of AI in your worklife!
          </p>
        </div>
        <div className="py-2 px-3 border mx-auto mt-5 btns">
          <button className="active" onClick={(e) => active(e)}>
            Monthly
          </button>
          <button className="black-100" onClick={(e) => active(e)}>
            Yearly
          </button>
        </div>
        <motion.div className="d-flex justify-content-center justify-content-lg-between align-items-center text-center text-md-start flex-wrap gap-3 mt-5 cards">
          <motion.div
            className="bg-primary-100 py-3 px-5 py-4 card"
            variants={Animations.BottomToTop.child}
            initial={Animations.BottomToTop.child.hidden}
            whileInView={Animations.BottomToTop.child.visible}
            viewport={{ once: true }}
          >
            <h5 className="h5">Regular</h5>
            <h6 className="h5 fw-normal my-3">$9/ Month</h6>
            <div className="d-flex flex-column gap-1">
              <div className="d-flex justify-content-center flex-column align-items-center gap-2">
                <div className="d-flex justify-content-start align-items-center gap-2 w-100">
                  <div>
                    <img
                      src={require("../../../images/icons/icon-park-solid_success.png")}
                      alt=""
                    />
                  </div>
                  <p className="p-1 m-0">Access All Products</p>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-2 w-100">
                  <div>
                    <img
                      src={require("../../../images/icons/icon-park-solid_success.png")}
                      alt=""
                    />
                  </div>
                  <p className="p-1 m-0">Access Future Products</p>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-2 w-100">
                  <div>
                    <img
                      src={require("../../../images/icons/icon-park-solid_success.png")}
                      alt=""
                    />
                  </div>
                  <p className="p-1 m-0">Access to VIP Products</p>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-2 w-100">
                  <div>
                    <img
                      src={require("../../../images/icons/icon-park-solid_success.png")}
                      alt=""
                    />
                  </div>
                  <p className="p-1 m-0">Acces Basic Data</p>
                </div>
              </div>
            </div>
            <button
              className="btn-3 mx-auto mt-4 d-block"
              onClick={
                brouseProducts === true ? () => navigate("/princing") : null
              }
            >
              Browse Products
            </button>
          </motion.div>
          <motion.div
            className="bg-primary-100 py-3 px-5 py-4 card"
            variants={Animations.BottomToTop.child}
            initial={Animations.BottomToTop.child.hidden}
            whileInView={Animations.BottomToTop.child.visible}
            viewport={{ once: true }}
          >
            <h5 className="h5">Basic</h5>
            <h6 className="h5 fw-normal my-3">$99/ Month</h6>
            <div className="d-flex flex-column gap-1">
              <div className="d-flex justify-content-center flex-column align-items-center gap-2">
                <div className="d-flex justify-content-start align-items-center gap-2 w-100">
                  <div>
                    <img
                      src={require("../../../images/icons/icon-park-solid_success.png")}
                      alt=""
                    />
                  </div>
                  <p className="p-1 m-0">Access All Products</p>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-2 w-100">
                  <div>
                    <img
                      src={require("../../../images/icons/icon-park-solid_success.png")}
                      alt=""
                    />
                  </div>
                  <p className="p-1 m-0">Access Future Products</p>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-2 w-100">
                  <div>
                    <img
                      src={require("../../../images/icons/icon-park-solid_success.png")}
                      alt=""
                    />
                  </div>
                  <p className="p-1 m-0">Access to VIP Products</p>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-2 w-100">
                  <div>
                    <img
                      src={require("../../../images/icons/icon-park-solid_success.png")}
                      alt=""
                    />
                  </div>
                  <p className="p-1 m-0">Acces Basic Data</p>
                </div>
              </div>
            </div>
            <button
              className="btn-3 mx-auto mt-4 d-block"
              onClick={() =>
                brouseProducts === true ? navigate("/princing") : null
              }
            >
              Browse Products
            </button>
          </motion.div>
          <motion.div
            className="bg-primary-100 py-3 px-5 py-4 card"
            variants={Animations.BottomToTop.child}
            initial={Animations.BottomToTop.child.hidden}
            whileInView={Animations.BottomToTop.child.visible}
            viewport={{ once: true }}
          >
            <h5 className="h5">VIP Premium</h5>
            <h6 className="h5 fw-normal my-3">$999/ Month</h6>
            <div className="d-flex flex-column gap-1">
              <div className="d-flex justify-content-center flex-column align-items-center gap-2">
                <div className="d-flex justify-content-start align-items-center gap-2 w-100">
                  <div>
                    <img
                      src={require("../../../images/icons/icon-park-solid_success.png")}
                      alt=""
                    />
                  </div>
                  <p className="p-1 m-0">Access All Products</p>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-2 w-100">
                  <div>
                    <img
                      src={require("../../../images/icons/icon-park-solid_success.png")}
                      alt=""
                    />
                  </div>
                  <p className="p-1 m-0">Access Future Products</p>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-2 w-100">
                  <div>
                    <img
                      src={require("../../../images/icons/icon-park-solid_success.png")}
                      alt=""
                    />
                  </div>
                  <p className="p-1 m-0">Access to VIP Products</p>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-2 w-100">
                  <div>
                    <img
                      src={require("../../../images/icons/icon-park-solid_success.png")}
                      alt=""
                    />
                  </div>
                  <p className="p-1 m-0">Acces Premium Features</p>
                </div>
              </div>
            </div>
            <button
              className="btn-3 mx-auto mt-4 d-block"
              onClick={() =>
                brouseProducts === true ? navigate("/princing") : null
              }
            >
              Browse Products
            </button>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
