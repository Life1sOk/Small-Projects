import React from "react";

import ProjectBox from "../component/project-box/project.box";
import { Header, MainContainer } from "./main-style";
import { projects } from "../projects-array/projects.array";

const Main = () => {

    return(
        <>
          <Header>Projects</Header>
          <MainContainer>
              {projects.map(project => <ProjectBox key={project.id} name={project.name} src={project.src}/>)}
          </MainContainer>
        </>
    )
}

export default Main;