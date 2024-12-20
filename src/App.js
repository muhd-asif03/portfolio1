import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Goals from "./components/goals/Goals";
import Contact from "./components/Contact/contact"; 
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Goals/>
      <Contact/>
      <Footer/>
    </div>
   

  );
}

export default App;
