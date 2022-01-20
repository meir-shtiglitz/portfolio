import { useEffect, useRef } from "react"

export const UseScrollRef = (localFunc) => {
    const scrollRef = useRef();

    const onScrollFunc = () => {
        if(!scrollRef.current) return;
        const screenTop = window.pageYOffset;
        console.log("screenTop",screenTop);
        const elementTop = scrollRef.current.getBoundingClientRect().top;
        console.log("elementTop",elementTop);
        if(screenTop-100 > elementTop){
            if(localFunc) localFunc();
           scrollRef.current.classList += ' show';
           document.removeEventListener('scroll', onScrollFunc);
        }

    }

    useEffect( () => {
        document.addEventListener('scroll', onScrollFunc);
    },[])


    return {scrollRef}
}