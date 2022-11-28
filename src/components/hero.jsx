import { useEffect, useRef } from "react";
import "../css/animateWriter.scss";
const Hero = () => {

    const textRef = useRef();



    useEffect(() => {
        const typewriter = (e) => {
            const go = setupTypewriter(e);
            go.type();
        }
        typewriter(textRef.current);
    }, [])


    const setupTypewriter = (t) => {
        var HTML = t.innerHTML;

        t.innerHTML = "";

        var cursorPosition = 0,
            tag = "",
            writingTag = false,
            tagOpen = false,
            typeSpeed = 70,
            tempTypeSpeed = 0;

        const type = () => {

            if (writingTag === true) {
                tag += HTML[cursorPosition];
            }

            if (HTML[cursorPosition] === "<") {
                tempTypeSpeed = 0;
                if (tagOpen) {
                    tagOpen = false;
                    writingTag = true;
                } else {
                    tag = "";
                    tagOpen = true;
                    writingTag = true;
                    tag += HTML[cursorPosition];
                }
            }
            if (!writingTag && tagOpen) {
                tag.innerHTML += HTML[cursorPosition];
            }
            if (!writingTag && !tagOpen) {
                if (HTML[cursorPosition] === " ") {
                    tempTypeSpeed = 0;
                }
                else {
                    tempTypeSpeed = (Math.random() * typeSpeed) + 20;
                }
                t.innerHTML += HTML[cursorPosition];
            }
            if (writingTag === true && HTML[cursorPosition] === ">") {
                tempTypeSpeed = (Math.random() * typeSpeed) + 20;
                writingTag = false;
                if (tagOpen) {
                    var newSpan = document.createElement("span");
                    t.appendChild(newSpan);
                    newSpan.innerHTML = tag;
                    tag = newSpan.firstChild;
                }
            }

            cursorPosition += 1;
            if (cursorPosition < HTML.length - 1) {
                setTimeout(type, tempTypeSpeed);
            }

        };

        return {
            type: type
        };
    }

    const getSpace = () => {
        if (window.innerWidth > 600) {
            return '\t';
        } else {
            return '   ';
        }
    }

    return (
        <div className="wraphero">
            {/* <div className="container"> */}
            <div className="hero-text" ref={textRef} id="typewriter">
                <span className="var-highlight">const</span> <span className="obj-name">helloMeir</span> = {'{'}{`\n${getSpace()}`}
                name: <span className="string-highlight">'Meir Shtiglitz'</span>,{`\n${getSpace()}`}
                type: <span className="string-highlight">'full stack developer'</span>,{`\n${getSpace()}`}
                skills:[<span className="string-highlight">'JS'</span>,
                <span className="string-highlight">'React'</span>,
                <span className="string-highlight">'Angular'</span>,{getSpace() !== '\t' && '\n\t '}
                <span className="string-highlight">'NodeJS'</span>,
                <span title="HTML, css, JS, React, Angular, NodeJS, MongoDB, Mysql, Git, php, jQuery" className="">...moreSkills</span>],{`\n${getSpace()}`}
                work: <span className="string-highlight">'open to work'</span>{'\n'}
                {'}'};
            </div>
            {/* </div> */}
        </div>
    )
}
export default Hero;