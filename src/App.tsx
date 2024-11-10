import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Psychotherapy from "./pages/Psychotherapy";
import Proposals from "./pages/Proposals";
import Crisis from "./pages/Crisis";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "/src/index.css";

function App() {
  return (
    <>
      <Router>
        <div className="bg-image">
        <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Psychotherapie" element={<Psychotherapy />} />
            <Route path="/UeberMich" element={<AboutMe />} />
            <Route path="/Angebot" element={<Proposals />} />
            <Route path="/Krise" element={<Crisis />} />
            <Route path="/Kontakt" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
