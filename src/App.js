import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Contact from "./components/Contact/contact"; 
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>

  );
}

export default App;
