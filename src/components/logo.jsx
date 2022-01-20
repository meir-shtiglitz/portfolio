import "../css/logo.css";

const Logo = () => {

    return (
        <div className="container">
            <div className="logo">
                <div className="wrap-start-logo">
                    <span className="text-before">I</span>
                    <div id="opty_hands" className="valign">
                        <div id="left-arm">
                            <div className="left-hand"><span>...</span></div>
                            <div className="left-shake"><span>_<br />_<br />_</span></div>
                        </div>
                        <div id="right-arm">
                            <div className="right-hand"><span>...</span></div>
                            <div className="right-shake"></div>
                        </div>
                    </div>
                    <span className="text">I</span>
                </div>
                <div className="lower">ELLO MEIR</div>
            </div>
        </div>
    )
}

export default Logo;