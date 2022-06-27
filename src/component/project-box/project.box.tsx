import React from "react";
import { useNavigate } from "react-router-dom";

import './project.box.style.scss';

interface IProjectBox {
    name: string,
    component: JSX.Element,
}

const ProjectBox = ({name, component} : IProjectBox) => {
    const navigate = useNavigate();

    return(
        <div className="project-box-container" onClick={() => {navigate(`${name}`)}}>
            <p className="project-name">{name}</p>
            <div className="project-component">{component}</div>
        </div>
    )
}

export default ProjectBox