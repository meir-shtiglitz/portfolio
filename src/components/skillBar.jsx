import { UseScrollRef } from "../hooks/useScrollRef";


const SkillBar = ({full=65,color='red'}) => {

    const startAnimate = () =>{
        scrollRef.current.style.width = full +'%';
    }

    const { scrollRef } = UseScrollRef(startAnimate); 

    return(
        <div className="container">
                <div style={{border: 'solid 1px black', padding:'2px'}} className="col-sm-6 m-auto text-center">{full}%
                    <div ref={scrollRef} style={{transition:' width 1s ease-in-out', height: '20px', width: '0%', backgroundColor: color}} className="skillbar"></div>
                </div>
        </div>
    )
}
export default SkillBar;