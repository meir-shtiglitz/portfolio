import About from "./about"
import Contact from "./contact";
import Hero from "./hero"
import Projects from "./projects";
import SkillBar from "./skillBar";
import Skills from "./skills";
import SkillAround from "./skillsAround";

const Home = () => {

    return(
        <>
            <Hero />
            <Projects />
            <About />
            <Contact />
            {/* <SkillBar color="green" full={70} /> */}
            {/* <Skills /> */}
            {/* <SkillAround /> */}

        </>
    )
}
export default Home;