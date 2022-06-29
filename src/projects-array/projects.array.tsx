import BG from "../projects-code/background-generator/background-generator";
import Robolist from "../projects-code/robolist/robolist.component";
import ToDo from "../projects-code/ToDo/ToDo.component";

export const projects = [
    { 
      id: 0,
      name: 'Background-generator',
      src: require('../img/background-generator.gif'),
      project: <BG />,
    },
    { 
      id: 1,
      name: 'Robolist',
      src: require('../img/robolist.gif'),
      project: <Robolist />,
    },
    { 
      id: 2,
      name: 'To-Do',
      src: require('../img/robolist.gif'),
      project: <ToDo />,
    },
]