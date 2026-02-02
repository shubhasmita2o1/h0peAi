import { Container, FloatingLabel, Form } from "react-bootstrap";
import "./contact.css";
import { motion } from "framer-motion";
import { Animations } from "../../animations/Animations";

export default function Contact() {
  return (
    <div className="contact">
      <Container className="mt-7">
        <div className="help black-100">
          <motion.h3
            className="h3-res"
            variants={Animations.LeftToRight.child}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Need Any help?
            <br /> We're Here For You.
          </motion.h3>
          <div className="d-flex justify-content-start align-items-start flex-column flex-sm-row gap-5 mt-4">
            <motion.div
              className="d-flex justify-content-start align-items-center gap-3"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <img
                src={require("../../../images/icons/fluent_call-16-filled.png")}
                alt=""
                className="bg-primary-100 rounded-circle"
              />
              <div className="d-flex flex-column justify-content-between">
                <p className="m-0">Call Us!</p>
                <p className="m-0">+23323 424 343</p>
              </div>
            </motion.div>
            <motion.div
              className="d-flex justify-content-start align-items-center gap-3"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <img
                src={require("../../../images/icons/fluent_mail-20-filled.png")}
                alt=""
                className="bg-primary-100 rounded-circle"
              />
              <div className="p1 d-flex flex-column justify-content-between">
                <p className="m-0">Send Us an Email</p>
                <p className="m-0">hello@ghozi.com</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-column flex-md-row gap-4 mt-6">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 1.5 },
            }}
            viewport={{ once: true }}
          >
            <h3 className="h3-res black-100">Get In Touch!</h3>
            <p className="p-res black-20 mt-3">
              Need Any Help? Send us a message using the form below and we'll
              get back to you promptly!
            </p>
          </motion.div>
          <div className="form">
            <FloatingLabel
              controlId="floatingInput"
              label="Your Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Your Mail"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Enter Your Message !"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
            <button className="btn-1 w-100 white">Send Mesage</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
