import { useState } from "react";
import { allProjects } from "../controlers+/projectsObj";
import Project from "./project";

const Projects = () => {
    const [numToLoadd, setNumToLoad] = useState(2);

    const loadMore = () => {
        setNumToLoad(numToLoadd + 2);
    }
    return (
        <div id="projects">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="proj-title section-title">Projects</h1>
                </div>
            </div>
            <div className="row projects">
                {allProjects.map((p, ind) => ind < numToLoadd && <Project key={ind} p={p} />)}
            </div>
            {allProjects.length > numToLoadd &&<button className="load-more btn btn-primary d-block m-auto" onClick={loadMore}>Load More</button>}
        </div>
    );
}

export default Projects;