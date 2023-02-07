import Navbar from "../components/navigation-section/Navbar"
import Hero from "../components/hero-section/Hero"
import Services from "../components/services-section/Services"
import About from "../components/aboutus-section/About"
import Projects from "../components/projects-section/Projects"
import Contact from "../components/contactus-section/Contact"

const Home = () => {
  return (
    <div className="home">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
    </div>
  )
}
export default Home