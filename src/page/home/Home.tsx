import Contact from "../../components/contact/Contact";
import Intro from "../../components/intro/Intro";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";
import "./Home.css";


const Home = () => {
    return ( 
        <main>
            <Intro />
            <Projects />
            <Skills />
            <Contact />
        </main>
    );
}

export default Home;