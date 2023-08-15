// import "./App.css";

import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import Project from "./pages/projects/Project";

function App() {
  return (
    <div className="h-auto w-full bg-bodyColor text-lightText px-5">
      <Navbar />
      <div className="max-w-screen-xl mx-auto ">
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
