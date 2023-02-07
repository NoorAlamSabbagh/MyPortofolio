import React from 'react';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/alam2.avif';

export default function About() {
  return (
    <div>
      <div className="container">
        <div className="top-section">
          <p className="about__subheading">
            Hi, I am <span>Noor Alam</span>
          </p>
          <h2 className="about__heading">A full stack web developer</h2>
          <div className="about__info">
            <PText>
              I am from Lucknow, India. Lucknow has always been known as a
              multicultural city that flourished as a North Indian cultural and
              artistic hub. I love art and design. I always try to design stuff
              with my unique point of view. I also love to create things that
              can be usefull to others.
              <br /> <br />
              Coding is also an art for me. I love it and now I have the
              opportunity to design along with the coding. I find it really
              interesting and I enjoyed the process a lot.
              <br />
              <br />
              My vision is to make the world a better place. Now almost
              everything is becoming better than ever. It is time for us to
              create more good stuff that helps the world to become a better
              place.
            </PText>
          </div>
          <Button btnText="Download CV" btnLink="#" />
        </div>
        <div className="right">
          <img src={AboutImg} alt="me" />
        </div>
      </div>
    </div>
  );
}
