import { Container } from "react-bootstrap";
import "./experience.css";
import AnimationTitles from "../../animations/AnimationTitles";
import { motion } from "framer-motion";
import { Animations } from "../../animations/Animations";

export default function Experience() {
  return (
    <div className="experience">
      <Container className="mt-7">
        <div className="d-flex justify-content-center align-items-center gap-5 flex-column flex-lg-row">
          <div className="image position-relative"></div>
          <div className="d-flex flex-column align-items-between gap-4">
            <AnimationTitles
              title={"Delightful user experience"}
              color={"black-100"}
              className="text-center text-md-start"
            />
            <motion.div
              className="boxes d-flex flex-column gap-2"
              variants={Animations.LeftToRight.parent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="box d-flex justify-content-center align-items-center gap-3"
                variants={Animations.LeftToRight.child}
              >
                <div className="icon">
                  <img
                    src={require("../../../images/icons/fluent_premium-16-filled.png")}
                    alt=""
                  />
                </div>
                <div>
                  <h6 className="body2">Premium Acces</h6>
                  <p className="p-res black-20">
                    Enable both crypto and fiat payments on your self-hosted
                    checkout page.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="box d-flex justify-content-center align-items-center gap-3"
                variants={Animations.LeftToRight.child}
              >
                <div className="icon">
                  <img
                    src={require("../../../images/icons/material-symbols-light_workspace-premium-outline-rounded.png")}
                    alt=""
                  />
                </div>
                <div>
                  <h6 className="body2">Professional</h6>
                  <p className="p-res black-20">
                    Enable both crypto and fiat payments on your self-hosted
                    checkout page.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="box d-flex justify-content-center align-items-center gap-3"
                variants={Animations.LeftToRight.child}
              >
                <div className="icon">
                  <img
                    src={require("../../../images/icons/streamline_money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow.png")}
                    alt=""
                  />
                </div>
                <div>
                  <h6 className="body2">Grow Trend</h6>
                  <p className="p-res black-20">
                    Enable both crypto and fiat payments on your self-hosted
                    checkout page.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-5 flex-column flex-lg-row mt-6">
          <div className="image position-relative order-lg-2"></div>
          <div className="d-flex flex-column align-items-between gap-4">
            <AnimationTitles
              title={"Customization theme"}
              color={"black-100"}
              className="text-center text-md-start"
            />
            <motion.div
              className="boxes d-flex flex-column gap-2"
              variants={Animations.LeftToRight.parent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="box d-flex justify-content-center align-items-center gap-3"
                variants={Animations.LeftToRight.child}
              >
                <div className="icon">
                  <img
                    src={require("../../../images/icons/fluent_premium-16-filled.png")}
                    alt=""
                  />
                </div>
                <div>
                  <h6 className="body2">Premium Acces</h6>
                  <p className="p-res black-20">
                    HOPE AI adapts to your preferences with flexible customization options, allowing users to personalize their workspace for maximum comfort and productivity.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="box d-flex justify-content-center align-items-center gap-3"
                variants={Animations.LeftToRight.child}
              >
                <div className="icon">
                  <img
                    src={require("../../../images/icons/material-symbols-light_workspace-premium-outline-rounded.png")}
                    alt=""
                  />
                </div>
                <div>
                  <h6 className="body2">Professional</h6>
                  <p className="p-res black-20">
                    Switch between light and dark themes to match your environment and reduce eye strain while working for long hours.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="box d-flex justify-content-center align-items-center gap-3"
                variants={Animations.LeftToRight.child}
              >
                <div className="icon">
                  <img
                    src={require("../../../images/icons/streamline_money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow.png")}
                    alt=""
                  />
                </div>
                <div>
                  <h6 className="body2">Grow Trend</h6>
                  <p className="p-res black-20">
                    Customize layouts, preferences, and feature visibility to suit your individual or team workflow.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
