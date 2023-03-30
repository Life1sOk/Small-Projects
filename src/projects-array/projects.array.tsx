import BG from "../projects-code/background-generator/background-generator";
import Robolist from "../projects-code/robolist/robolist";
import QuoteGenerator from "../projects-code/quote-generator/quote.generator";

export const projects = [
  {
    id: 0,
    name: 'Background-generator',
    src: require('../img/background-generator.gif'),
    project: <BG />,
  },
  {
    id: 1,
    name: 'Quote-generator',
    src: require('../img/quote.gif'),
    project: <QuoteGenerator />,
  },
  {
    id: 2,
    name: 'Robolist',
    src: require('../img/robolist.gif'),
    project: <Robolist />,
  },
]