import './App.css'
import Navbar from "@/lib/components/Navbar.jsx";
import Hero from "@/lib/components/Hero.jsx";
import About from "@/lib/components/About.jsx";
import Experience from "@/lib/components/Experience.jsx";
import Projects from "@/lib/components/Projects.jsx";
import Education from "@/lib/components/Education.jsx";

function App() {

  return (
    <div className="min-h-screen w-full h-full bg-gradient-to-r from-gray-950 to-blue-950">
      <Navbar/>
        <Hero/>
        <About/>
      <Experience/>
        <Projects/>
        <Education/>
    </div>
  )
}

export default App
