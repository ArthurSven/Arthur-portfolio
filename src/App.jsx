import './App.css'
import Navbar from "@/lib/components/Navbar.jsx";
import Hero from "@/lib/components/Hero.jsx";

function App() {

  return (
    <div className="min-h-screen w-full h-full">
      <Navbar/>
        <Hero/>
    </div>
  )
}

export default App
