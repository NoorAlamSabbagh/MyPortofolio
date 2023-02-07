import { v4 as uuidv4 } from 'uuid';
import ELearningImg from '../images/ELearning.jpg';
import WeatherApp from '../images/WeatherApp.jpg';
import Netflix from '../images/Netflix.jpg';
import NoteApp from '../images/NoteApp.avif';

const projects = [
  {
    id: uuidv4(),
    name: 'NoteApp',
    desc:
      'Notes is a good helper to manage your schedules and notes. It gives you a quick and simple notepad editing experience when you write notes, memo, email, message, shopping list and to do list.',
    img: NoteApp,
  },
  {
    id: uuidv4(),
    name: 'ELearning Website',
    desc:
      'E-learning is a type of learning conducted digitally via electronic media, typically involving the internet. It can be accessed via most electronic devices including a computer, laptop, tablet or smartphone.',
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
