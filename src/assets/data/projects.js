import { v4 as uuidv4 } from 'uuid';
import ELearningImg from '../images/ELearning.jpg';
import WeatherApp from '../images/WeatherApp.jpg';
import Netflix from '../images/Netflix.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'ELearning Website',
    desc: 'An ELearning responsive website using HTML, CSS, JAVASCRIPT',
    img: ELearningImg,
  },
  {
    id: uuidv4(),
    name: 'WeatherApp',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: WeatherApp,
  },
  {
    id: uuidv4(),
    name: 'Netflix',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: Netflix,
  },
];

export default projects;
