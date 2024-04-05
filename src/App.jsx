import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";


function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Intro />
        <Skills />
        <Projects/>
        <Works />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
