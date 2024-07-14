import About from "./Compos/About";
import Banner from "./Compos/Banner";
import Footer from "./Compos/Footer";
import Navbar from "./Compos/Navbar";
import Technologies from "./Compos/Technologies";
import Education from "./Compos/Education";
import Projects from "./Compos/projects/Projects";
import Contact from "./Compos/contact/Contact";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Element name="home" className="element">
        <Banner></Banner>
      </Element>

      <div className="p-5 lg:max-w-4xl xl:max-w-5xl mx-auto space-y-20">
        <Element name="about" className="element">
          <About></About>
        </Element>

        <Element name="projects" className="element">
          <Projects></Projects>
        </Element>

        <Technologies></Technologies>
        <Education></Education>

        <Element name="contact" className="element">
          <Contact></Contact>
        </Element>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
