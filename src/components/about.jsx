import "../css/about.css";
import SkillAround from "./skillsAround";
import text from "../assets/text.json";

const About = () => {

    return (
        <div id="about">
            <div className="container">
                <h1 className="text-center section-title">About me!</h1>
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-12 row about-content">
                            <div className="profile col-md-3"><SkillAround /></div>
                            <p className="col-md-6 about-text">{text.about}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;