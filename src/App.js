import "./index.css";
import "./cssComponents.css";
import React from "react";
import OnLoading from "./components/animations/OnLoading";

const NavBar = React.lazy(() => import("./components/global/navbar/Navbar"));
const Footer = React.lazy(() => import("./components/global/footer/Footer"));
const Home = React.lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <>
      <React.Suspense fallback={<OnLoading />}>
        <NavBar />
        <Home />
        <Footer />
      </React.Suspense>
    </>
  );
}

export default App;
