import React from "react";
import { useNavigate } from "react-router-dom";

import { ProjectBoxContainer, ProjectName } from "./project.box.style";
import Image from '../image-preview/image.component';

interface IProjectBox {
    name: string,
    src: string,
}

const ProjectBox = ({name, src} : IProjectBox) => {
    const navigate = useNavigate();

    return(
        <ProjectBoxContainer onClick={() => {navigate(`${name}`)}}>
            <ProjectName>{name}</ProjectName>
            <Image src={src} alt={name}/>
        </ProjectBoxContainer>
    )
}

export default ProjectBox