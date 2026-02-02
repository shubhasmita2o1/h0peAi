import { useRef } from "react";
import FaqQuestions from "../components/global/Faq-Questions/FaqQuestions";
import Content from "../components/global/content/Content";
import News from "../components/global/news/News";
import Princing from "../components/global/princing/Princing";
import Experience from "../components/local/experience/Experience";
import Features from "../components/local/features/Features";
import Header from "../components/local/header/Header";
import WhyCustomers from "../components/local/why-customers/WhyCustomers";
import { motion } from "framer-motion";

export default function HomePage() {
  // Get the Features Section from Feature and send it to Header
  const featuresSection = useRef(null);

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.3 },
      }}
    >
      <Header features={featuresSection} />
      <Features getFeatures={featuresSection} />
      <Experience />
      <Princing brouseProducts={true} />
      <News heading="Discover the latest news." ParagraphDisplay="block" />
      <WhyCustomers />
      <FaqQuestions />
      <Content />
    </motion.div>
  );
}
