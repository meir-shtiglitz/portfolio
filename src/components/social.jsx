import "../css/social.css";
const Social = () => {

    return (
        <div id="social" className="row mb-4">
            <div className="col-sm-12 wrap-social">
                <a target="_blank" href="https://github.com/meir-shtiglitz" className="btn btn-dark btn-git"><i className="fa fa-github"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/meir-shtiglitz/" className="btn btn-primary btn-in"><i className="fa fa-linkedin"></i></a>
                <a href='https://wa.me/+972555538958' target='_blank' className="btn btn-success btn-whatsapp"><i className="fa fa-whatsapp"></i></a>
                <a href='mailto:m.stigel@gmail.com' target='_blank' className="btn btn-warning btn-email"><i className="fa fa-envelope"></i></a>
                <a href="https://it-it.facebook.com/meir.shtiglitz" target="_blank" className="btn btn-primary btn-facebook"><i className="fa fa-facebook"></i></a>
            </div>
        </div>
    )
}

export default Social;