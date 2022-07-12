import BG from "../projects-code/background-generator/background-generator";
import Robolist from "../projects-code/robolist/robolist";
import ToDo from "../projects-code/ToDo/todo";

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
    name: 'ToDo',
    src: require('../img/robolist.gif'),
    project: <ToDo />,
  },
]