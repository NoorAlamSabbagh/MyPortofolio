import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
      <><><FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Noor Alam</h1>
          <PText>
            A Full Stack Web Develoer from Lucknow, India. I can build both the
            front end and the back end of a website and always make websites that
            have unique designs.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading='Important Links'
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]} />
        </div>
        <div className="footer__col3" />
        <FooterCol
          heading="Contact Info"
          links={[
            {
              title: '+917052064784',
              path: 'tel:+917052064784',
            },
            {
              title: 'alamrangrej787@gmail.com',
              path: 'mailto:alamrangrej787@gmail.com',
            },
            {
              title: 'Lucknow(Uttar Pradesh), India',
              path: 'http://google.com/maps',
            },
          ]} />
      </div>
      <div className="footer__col4" />
      <FooterCol
        heading="social Links"
        links={[
          {
            title: 'Linkdin',
            path: 'https://www.linkedin.com/in/noor-alam-35a882227/',
          },
          {
            title: 'Github',
            path: 'https://github.com/NoorAlamSabbagh',
          },
          {
            title: 'Instagram',
            path: 'https://www.instagram.com/noor_alam369/',
          },
        ]} />
    </div>
    </><div className="copyright">
        <div className="container">
          <PText>
            © 2023 - Noor Alam | Designed By Noor Alam
          </PText>
        </div>
      </div></>
</FooterStyles>
);
}