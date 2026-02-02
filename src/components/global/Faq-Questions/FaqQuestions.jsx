import { Accordion, Col, Container, Row } from "react-bootstrap";
import "./faqQuestions.css";
import { useNavigate } from "react-router-dom";
import AnimationTitles from "../../animations/AnimationTitles";
import { motion } from "framer-motion";
import { Animations } from "../../animations/Animations";

export default function FaqQuestions() {
  const navigate = useNavigate();

  return (
    <div className="faq-questions mt-7">
      <Container className="bg-white">
        <div>
          <AnimationTitles
            title="FAQs Frequently Asked Questions!"
            color="black-100"
          />
          <p className="p-res black-20 mx-auto mt-5">
            Need Any Help? Send us a message using the form below and we'll get
            back to you promptly!
          </p>
        </div>
        <Row className="my-4">
          <Col xs={12} lg={6}>
            <motion.div
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1" className="mt-3">
                  <Accordion.Header>
                    What is h0peAi?
                  </Accordion.Header>
                  <Accordion.Body className="p1 black-20">
                    h0peAi is an AI-powered productivity and decision-support platform designed to help individuals and teams work smarter, faster, and with better clarity.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </motion.div>
            <motion.div
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1" className="mt-3">
                  <Accordion.Header>Who can use h0peAi?</Accordion.Header>
                  <Accordion.Body className="p1 black-20">
                    h0peAi is built for founders, professionals, students, and teams who want to streamline workflows, improve focus, and make informed decisions efficiently.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </motion.div>
            <motion.div
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1" className="mt-3">
                  <Accordion.Header>
                    Do I need technical knowledge to use h0peAi?
                  </Accordion.Header>
                  <Accordion.Body className="p1 black-20">
                    No. h0peAi is designed with a simple and intuitive interface, making it easy to use even without technical or coding experience.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </motion.div>
          </Col>
          <Col xs={12} lg={6}>
            <motion.div
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1" className="mt-3">
                  <Accordion.Header>
                    Is h0peAi free to use?
                  </Accordion.Header>
                  <Accordion.Body className="p1 black-20">
                    h0peAi offers free access with essential features. Advanced capabilities and premium tools may be available through paid plans.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </motion.div>
            <motion.div
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1" className="mt-3">
                  <Accordion.Header>
                    How does h0peAi help improve productivity?
                  </Accordion.Header>
                  <Accordion.Body className="p1 black-20">
                    h0peAi analyzes patterns, organizes information, and provides intelligent suggestions, helping users save time and reduce decision fatigue.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </motion.div>
            <motion.div
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1" className="mt-3">
                  <Accordion.Header>
                    Is my data secure with h0peAi?
                  </Accordion.Header>
                  <Accordion.Body className="p1 black-20">
                    Yes. We prioritize data security and privacy, using modern security practices to ensure your information remains safe and confidential.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </motion.div>
          </Col>
        </Row>
        <motion.div
          className="banner d-flex justify-content-center justify-content-md-between align-items-center flex-wrap flex-md-nowrap bg-primary-100 white gap-4 mt-5"
          variants={Animations.BottomToTop.child}
          initial={Animations.BottomToTop.child.hidden}
          whileInView={Animations.BottomToTop.child.visible}
          viewport={{ once: true }}
        >
          <div className="text-center text-sm-start">
            <h6 className="body1">Still Need Help?</h6>
            <p className="m-0">
              Can't find the answer here? Message us for help!
            </p>
          </div>
          <button className="btn-banner" onClick={() => navigate("/contact")}>
            Shoot Us A Message!
          </button>
        </motion.div>
      </Container>
    </div>
  );
}
