import profileImg from "../assets/images/profile.png";
import "../css/about.css";
import SkillAround from "./skillsAround";
// import text from "../assets/text.json";

const About = () => {

    return (
        <div id="about">
            <div className="container">
                <h1 className="text-center section-title">About me!</h1>
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-12 row about-content">
                            <div className="profile col-md-3"><SkillAround /></div>
                            {/* <img className="profile col-md-3" src={profileImg} alt="profile image" /> */}
                            <p className="col-md-6 about-text">
                                Hi, my name is Meir Shtiglitz,
                                a Full stack developer,
                                I research, understand the code in depth and what goes on behind the scenes,
                                In fact, I'm a professional magician, and in this job, because there are not a school for it, I had to teach myself the magic, and practice it over and over again,
                                Now that I'm in the dark magic world (CLI and VS CODE ...)
                                These are the most important skills I bring with me, super fast and self-learning qualities, and endless perseverance
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;