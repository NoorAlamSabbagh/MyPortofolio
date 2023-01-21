import React from 'react';
import HeroImg from '../assets/images/1.5.avif';
import PText from './PText';

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <h1 className="hero__heading">
          <span>Hello, This is </span>
          <span>Noor Alam</span>
        </h1>
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero__info">
          <PText>
            I am working as a freelance web designer and developer. I love to
            design and make new web expperiences for the people.
          </PText>
        </div>
      </div>
    </div>
  );
}
