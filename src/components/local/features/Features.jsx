import { Col, Container } from "react-bootstrap";
import "./features.css";
import { motion } from "framer-motion";
import AnimationTitles from "../../animations/AnimationTitles";
import { Animations } from "../../animations/Animations";

export default function Features({ getFeatures }) {
  return (
    <div className="features">
      <Container className="text-center mt-7" ref={getFeatures}>
        <AnimationTitles
          title={"More Features"}
          color={"black-100"}
          className="mt-0 mt-md-5 mt-lg-0"
        />
        <p className="p-res black-20 mt-3">
          These are a few of the key features of AITool that distinguish it from
          other AI platforms
        </p>
        <motion.div className="text-start mt-5 row">
          <Col xs={12} md={6} lg={4}>
            <motion.div
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <div className="mb-3">
                <img
                  src={require("../../../images/icons/material-symbols_sell.png")}
                  alt=""
                />
              </div>
              <h4 className="body1 black-100 mb-2">Smart AI Insights</h4>
              <p className="p1 black-20">
                HOPE AI analyzes your data and activities to provide intelligent suggestions, helping you make faster and better decisions.
              </p>
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <div className="mb-3">
                <img
                  src={require("../../../images/icons/solar_star-bold-duotone.png")}
                  alt=""
                />
              </div>
              <h4 className="body1 black-100 mb-2">Customizable Workspace</h4>
              <p className="p1 black-20">
                Personalize your dashboard, themes, and preferences to match your workflow and working style.
              </p>
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <div className="mb-3">
                <img
                  src={require("../../../images/icons/ic_round-cloud.png")}
                  alt=""
                />
              </div>
              <h4 className="body1 black-100 mb-2">Fast & Reliable Performance</h4>
              <p className="p1 black-20">
                Optimized for speed and stability, HOPE AI ensures a smooth experience without interruptions.
              </p>
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <div className="mb-3">
                <img
                  src={require("../../../images/icons//ic_round-cloud.png")}
                  alt=""
                />
              </div>
              <h4 className="body1 black-100 mb-2">Seamless Collaboration</h4>
              <p className="p1 black-20">
                EWork together effortlessly with shared insights, updates, and tools designed for team productivity.
              </p>
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <div className="mb-3">
                <img
                  src={require("../../../images/icons/material-symbols_sell.png")}
                  alt=""
                />
              </div>
              <h4 className="body1 black-100 mb-2">Secure & Private</h4>
              <p className="p1 black-20">
                Your data is protected with modern security practices, keeping your information safe and confidential at all times.
              </p>
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <div className="mb-3">
                <img
                  src={require("../../../images/icons/solar_star-bold-duotone.png")}
                  alt=""
                />
              </div>
              <h4 className="body1 black-100 mb-2">Connect everywhere</h4>
              <p className="p1 black-20">
                Enables users to locate solutions to their inquiries without
                browsing numerous resources.
              </p>
            </motion.div>
          </Col>
        </motion.div>
      </Container>
    </div>
  );
}
