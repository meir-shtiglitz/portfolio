import "../css/skillsAround.css";
import angPng from '../assets/images/angular.png';
import htmlPng from '../assets/images/html.png';
import cssPng from '../assets/images/css.png';
import jsPng from '../assets/images/js.png';
import nodePng from '../assets/images/node.png';
import jqueryPng from '../assets/images/jquery.png';
import phpPng from '../assets/images/php.png';
import wpPng from '../assets/images/wp.png';
import reactSvg from '../assets/images/react.png';
import profileImg from "../assets/images/profile.png";

const SkillAround = () => {

    return (
        <div id="skillsAround">
            <div className="main">
                <img className="theSmiley" src={profileImg} />
                <div className="item" style={{ animationDelay: '-4.5s' }}>
                    <img title="React" alt="React" className="react" src={reactSvg} />
                </div>
                <div className="item" style={{ animationDelay: "-9s" }}>
                    <img title="css3" alt="css3" src={cssPng} />
                </div>
                <div className="item" style={{ animationDelay: "-13.5s" }}>
                    <img title="Wordpress" alt="Wordpress" src={wpPng} />
                </div>
                <div className="item" style={{ animationDelay: "-18s" }}>
                    <img title="Angular" alt="Angular" src={angPng} />
                </div>
                <div className="item" style={{ animationDelay: "-22.5s" }}>
                    <img title="NodeJS" alt="NodeJS" src={nodePng} />
                </div>
                <div className="item" style={{ animationDelay: "-27s" }}>
                    <img title="HTML" alt="HTML" src={htmlPng} />
                </div>
                <div className="item" style={{ animationDelay: "-31.5s" }}>
                    <img title="php" alt="php" src={phpPng} />
                </div>
                <div className="item" style={{ animationDelay: "-36s" }}>
                    <img title="JS" alt="JS" src={jsPng} />
                </div>
                <div className="item" style={{ animationDelay: "-40.5s" }}>
                    <i title="Git" className="fa fa-github"></i>
                </div>
                <div className="item" style={{ animationDelay: "-45s" }}>
                    <img title="jQuery" alt="jQuery" src={jqueryPng} />
                    {/* <img src="https://www.kirupa.com/icon/1f384.svg" /> */}
                </div>
            </div>
        </div>
    )
}
export default SkillAround;