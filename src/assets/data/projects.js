import { v4 as uuidv4 } from 'uuid';
import ELearningImg from '../images/ELearning.jpg';
import WeatherApp from '../images/WeatherApp.jpg';
import Netflix from '../images/Netflix.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'ELearning Website',
    desc:
      'Electronic learning, is the delivery of leacrning and training through digital resources. ',
    img: ELearningImg,
  },
  {
    id: uuidv4(),
    name: 'WeatherApp',
    desc:
      'The weather app provides weather conditions, relative humidity, dew point, wind speed and direction, and hourly weather forecast.',
    img: WeatherApp,
  },
  {
    id: uuidv4(),
    name: 'Netflix',
    desc:
      'Netflix is the biggest video streaming platform in the world, offering movies, seasons, biographies, reality shows, and more.',
    img: Netflix,
  },
];

export default projects;
