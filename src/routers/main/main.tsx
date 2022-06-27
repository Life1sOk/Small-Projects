import React from "react";

import ProjectBox from "../../component/project-box/project.box";
import './main-style.scss';
import BG from "../../projects/background-generator/background-generator";

const projects = [
    { 
      id: 0,
      name: 'Background-generator',
      component: <BG />,
    },
    { 
      id: 1,
      name: 'project2',
      component: <BG />,
    },
    { 
      id: 2,
      name: 'project3',
      component: <BG />,
    },
    { 
      id: 3,
      name: 'project4',
      component: <BG />,
    },
]

const Main = () => {

    return(
        <>
          <h2 className="header">Projects</h2>
          <div className="main-container">
              {projects.map(project => <ProjectBox key={project.id} name={project.name} component={project.component}/>)}
          </div>
        </>
    )
}

export default Main;