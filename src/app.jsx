import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import TechStack from "./sections/TechStack";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
const App = () => {
  return (
    <>
     <NavBar/>
     <Hero /> 
     <ShowcaseSection/>
     <FeatureCards/>
     <TechStack />
     <Contact />
     <Footer />
    </>
  )
}
export default App

