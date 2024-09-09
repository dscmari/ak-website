import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Psychotherapy from "./pages/Psychotherapy";
import Proposals from "./pages/Proposals";
import Crisis from "./pages/Crisis";
import Contact from "./pages/Conact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Psychotherapie" element={<Psychotherapy />} />
          <Route path="/UeberMich" element={<AboutMe />} />
          <Route path="/Angebot" element={<Proposals />} />
          <Route path="/Krise" element={<Crisis />} />
          <Route path="/Kontakt" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
