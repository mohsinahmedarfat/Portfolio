import About from "./Compos/About";
import Banner from "./Compos/Banner";
import Footer from "./Compos/Footer";
import Navbar from "./Compos/Navbar";
import Technologies from "./Compos/Technologies";
import Education from "./Compos/Education";
import Projects from "./Compos/projects/Projects";
import Contact from "./Compos/contact/Contact";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="p-5 lg:max-w-4xl xl:max-w-5xl mx-auto space-y-20">
        <About></About>
        <Projects></Projects>
        <Technologies></Technologies>
        <Education></Education>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
