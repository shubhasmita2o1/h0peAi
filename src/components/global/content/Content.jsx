import { Container } from "react-bootstrap";
import "./content.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Animations } from "../../animations/Animations";

export default function Content() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="content"
      variants={Animations.BottomToTop.child}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Container className="text-center mt-7">
        <div className="bg-primary-100 white">
          <h3 className="h3-res mb-4">
            Join Membership Today and Gain Access to All Products!
          </h3>
          <p className="p-res mb-5">
            Join Our Membership Today at a Discounted Price and get access to
            all Our Amazing Products and even gain access to Future Products For
            Free!
          </p>
          <button className="btn-3" onClick={() => navigate("/princing")}>
            Join Now
          </button>
        </div>
      </Container>
    </motion.div>
  );
}
