import profileImg from "../assets/images/profile.png";
import "../css/about.css";
import SkillAround from "./skillsAround";
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
                                I'm Meir Stieglitz, about a year and a half ago my acquaintance with the world of the web was more or less, an email address,
                                Today I write and read and even breathe web, but from its dark side ...
                                Where will I be a year and a half ahead? I do not know, but I'm going to work hard and enjoy ...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;