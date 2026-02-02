import { Col, Container, Row } from "react-bootstrap";
import "./news.css";
import { useNavigate } from "react-router-dom";
import AnimationTitles from "../../animations/AnimationTitles";
import { Animations } from "../../animations/Animations";
import { motion } from "framer-motion";

export default function News({ heading, ParagraphDisplay }) {
  const navigate = useNavigate();

  return (
    <div className="news">
      <Container className="mt-7">
        <h6 className="p1 title primary-100 mx-auto">News</h6>
        {/* Title and description */}
        <div className="mx-auto mt-3 text-center">
          <AnimationTitles title={heading} color="black-100" />
          <p className={`p-res black-20 mt-3 d-${ParagraphDisplay}`}>
            Stay informed and inspired with valuable insights for business
            growth.
          </p>
        </div>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              className="p-2 mt-3"
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <div className="image"></div>
              <p className="p1 primary-100 mt-3">New</p>
              <h5 className="body1 black-100">
                h0peAi Launches Smart Productivity Features
              </h5>
              <p className="black-20 mt-3">
                Our latest update introduces AI-powered insights to help users plan better and work faster.
              </p>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <p className="black-50 p2 m-0">2 Menuite Ago</p>
                <button
                  className="btn-1 white"
                  onClick={() => navigate("details")}
                >
                  Read Now
                </button>
              </div>
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              className="p-2 mt-3"
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <div className="image"></div>
              <p className="p1 primary-100 mt-3">New</p>
              <h5 className="body1 black-100">
                Team Collaboration Tools Coming Soon
              </h5>
              <p className="black-20 mt-3">
                We’re working on new features that will make teamwork even more seamless and efficient.
              </p>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <p className="black-50 p2 m-0">2 Menuite Ago</p>
                <button
                  className="btn-1 white"
                  onClick={() => navigate("details")}
                >
                  Read Now
                </button>
              </div>
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              className="p-2 mt-3"
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <div className="image"></div>
              <p className="p1 primary-100 mt-3">New</p>
              <h5 className="body1 black-100">
                Unleash the Power of Advanced Analytics
              </h5>
              <p className="black-20 mt-3">
                Modern a Minimal and Clean Personal Portfolio Template for
                Framer.
              </p>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <p className="black-50 p2 m-0">2 Menuite Ago</p>
                <button
                  className="btn-1 white"
                  onClick={() => navigate("details")}
                >
                  Read Now
                </button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
