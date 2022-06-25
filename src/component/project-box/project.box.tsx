import React from "react";
import './project.box.style.scss';

interface IProjectBox {
    name: string,
    component: JSX.Element,
}

const ProjectBox = ({name, component} : IProjectBox) => {
    return(
        <div className="project-box-container">
            <p className="project-name">{name}</p>
            <div className="project-component">{component}</div>
        </div>
    )
}

export default ProjectBox