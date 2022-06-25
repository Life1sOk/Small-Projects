import React from "react";
import ProjectBox from "../../component/project-box/project.box";

import './main-style.scss';
import BG from "../../projects/background-generator/background-generator";

const Main = () => {
    const projects = [
        { 
          name: 'Background-generator',
          component: <BG />,
        },
        { 
          name: 'Background-generator',
          component: <BG />,
        },
        { 
            name: 'Background-generator',
            component: <BG />,
          },
          { 
            name: 'Background-generator',
            component: <BG />,
          },
    ]


    return(
        <div className="main-container">
            {projects.map(project => <ProjectBox name={project.name} component={project.component}/>)}
        </div>
    )
}

export default Main;