import "../css/project.css";

const Project = ({ p }) => {
    return (
        <div className="project col-sm-5 mb-5 card">
            <img src={p.img} alt="project" />
            <div className="text">

            </div>
            <div className="text-hover row">
                <div>
                    <h3 className="col-12 card-title">{p.name}</h3>
                    <span>{p.langs.join(', ')}</span>
                    <p>{p.description}</p>
                </div>
                <a className="btn btn-primary col-sm-4 m-auto" href={p.viewLink} rel="noopener noreferrer" target="_blank">View <i className="fa fa-eye"></i></a>
                <a className="btn btn-success col-sm-4 m-auto" href={p.gitLink} rel="noopener noreferrer" target="_blank">GitHub <i className="fa fa-github"></i></a>
            </div>
        </div>
    );
}

export default Project;