import About from "../features/About/About";
import Banner from "../features/Banner/Banner";
import Certificate from "../features/Certificate/Certificate";
import Contact from "../features/Contact/Contact";
import Education from "../features/Education/Education";
import Footer from "../features/Footer/Footer";
import Header from "../features/Header/Header";
import Project from "../features/Project/Project";
import Skill from "../features/Skill/Skill";

const Main = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Education />
      <Certificate />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
