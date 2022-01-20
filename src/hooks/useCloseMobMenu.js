import { useEffect, useRef } from "react"

export const UseCloseMobileMenu = (openFunc) => {
    const hamburgerRef = useRef();

    useEffect( () => {
        window.addEventListener('click', checkAndClose)
    })

    const checkAndClose = (e) => {
        if(e && e.target && hamburgerRef.current.contains(e.target)) return;
        openFunc(false);
    }

    return {hamburgerRef}
}