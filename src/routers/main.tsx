import React from "react";

import ProjectBox from "../component/project-box/project.box";
import './main-style.scss';
import Image from "../component/image-preview/image.component";
const logo = require('../img/img.gif');


const projects = [
    { 
      id: 0,
      name: 'Background-generator',
      component: <Image src={logo} alt="Background-generator"/>,
    },
    { 
      id: 1,
      name: 'project2',
      component: <></>,
    },
    { 
      id: 2,
      name: 'project3',
      component: <></>,
    },
    { 
      id: 3,
      name: 'project4',
      component: <></>,
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