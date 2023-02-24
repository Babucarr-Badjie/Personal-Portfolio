// import "./App.css";

import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Project from "./pages/projects/Project";

function App() {
  return (
    <div className="h-auto w-full bg-bodyColor text-lightText px-5">
      <Navbar />
      <div className="max-w-screen-3xl mx-auto ml-10 mr-10 ">
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
