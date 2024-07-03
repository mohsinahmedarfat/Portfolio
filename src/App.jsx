import About from "./Compos/About";
import Banner from "./Compos/Banner";
import Footer from "./Compos/Footer";
import Navbar from "./Compos/Navbar";
import Projects from "./Compos/projects/Projects";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="p-5 lg:max-w-4xl xl:max-w-5xl mx-auto space-y-10">
        <About></About>
        <Projects></Projects>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
