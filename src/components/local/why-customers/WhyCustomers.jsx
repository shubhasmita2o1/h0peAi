import { Col, Container, Row } from "react-bootstrap";
import "./whyCustomers.css";
import { Animations } from "../../animations/Animations";
import { motion } from "framer-motion";

export default function WhyCustomers() {
  return (
    <div className="why-customers">
      <Container className="mt-7">
        <h3 className="h3-res black-100 mx-auto">
          why customers <span className="primary-100">love us</span>
        </h3>
        <Row className="mt-4">
          <Col xs={12} md={6} lg={4}>
            <motion.div
              className="px-4 py-4 mt-4"
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <h5 className="body1 black-100">Mike</h5>
              <p className="p1 black-20 mt-3 mb-0">
                HOPE AI helps users cut through clutter and focus on what matters most, reducing time spent switching between tools and making decisions.
              </p>
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              className="px-4 py-4 mt-4"
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <h5 className="body1 black-100">Goan</h5>
              <p className="p1 black-20 mt-3 mb-0">
                Our clean interface makes it easy for anyone to get started, with no learning curve or technical setup required.
              </p>
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              className="px-4 py-4 mt-4"
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <h5 className="body1 black-100">Pia</h5>
              <p className="p1 black-20 mt-3 mb-0">
                HOPE AI provides intelligent insights that help users make confident, data-backed decisions faster.
              </p>
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              className="px-4 py-4 mt-4"
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <h5 className="body1 black-100">Navy</h5>
              <p className="p1 black-20 mt-3 mb-0">
                Whether you’re working solo or collaborating with a team, HOPE AI adapts to your workflow and keeps everyone aligned.
              </p>
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              className="px-4 py-4 mt-4"
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <h5 className="body1 black-100">Max</h5>
              <p className="p1 black-20 mt-3 mb-0">
                Users trust HOPE AI for its dependable performance and strong focus on data security and privacy.
              </p>
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              className="px-4 py-4 mt-4"
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <h5 className="body1 black-100">Sam</h5>
              <p className="p1 black-20 mt-3 mb-0">
                I recently used an AI chat system and it exceeded my
                expectations. The speed and accuracy of the responses were
                impressive, and the personalized recommendations w
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
