import Contact from "./Contact";
import Experience from "./Experience";
import Header from "./Header";
import Projects from "./Projects";
import AboutMe from "./Aboutme";

function Home() {
  return (
    <div className="h-full">
          <Header />
          <AboutMe />
          <Experience />
          <Projects />
          <Contact />
    </div>
  );
}

export default Home;
