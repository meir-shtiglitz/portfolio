import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo";
import "../css/nav.css";
import { UseMenuScroll } from "../hooks/useMenuScroll";
import { UseCloseMobileMenu } from "../hooks/useCloseMobMenu";
import resume from "../assets/resume/Meir Shtiglitz.docx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {

    const [mobileShow, setMobileShow] = useState(false);
    const { menuRef, scrollToSection } = UseMenuScroll();
    const { hamburgerRef } = UseCloseMobileMenu(setMobileShow);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="mob-menu-style">
                <div className="row logo-wraper">
                    <NavLink className="navbar-brand col-lg-12" to="/"><Logo /></NavLink>
                </div>
                <button ref={hamburgerRef} onClick={() => setMobileShow(!mobileShow)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={mobileShow ? 'fa fa-window-close' : 'navbar-toggler-icon'}></span>
                </button>
            </div>
            <div className={`collapse navbar-collapse ${mobileShow && 'show'}`} id="navbarTogglerDemo01">
                <ul ref={menuRef} className="navbar-nav m-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink onClick={scrollToSection} activeClassName="active" exact className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={scrollToSection} activeClassName="active" exact className="nav-link" to="/#projects">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={scrollToSection} activeClassName="active" exact className="nav-link" to="/#about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={scrollToSection} activeClassName="active" exact className="nav-link" to="/#contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={scrollToSection} activeClassName="active" exact className="btn btn-outline-dark" target="_blank" download to={resume}>My Resume <FontAwesomeIcon icon={faFileDownload} /></NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Nav;