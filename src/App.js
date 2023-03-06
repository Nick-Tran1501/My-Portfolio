import "./App.css";
import NavbarLayout from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills/Skills";
import Projects from "./components/ProjectsSection/Projects";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <NavbarLayout />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
