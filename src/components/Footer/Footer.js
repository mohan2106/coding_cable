import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            {/* <img src={process.env.PUBLIC_URL + '/Images/logo.svg'} className="navbar-icon" alt="logo" /> */}
              CODINGCABLE
            </Link>
          </div>
          <small className='website-rights'>CODINGCABLE © 2021</small>
          <div className='social-icons'>
            <a
              className='social-icon-link'
              href='https://www.facebook.com/CodingCable-100239938797987'
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              className='social-icon-link'
              href='https://www.instagram.com/codingcable'
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              className='social-icon-link'
              href='https://www.youtube.com/channel/UCEhwmhRwqLKrJu_cW5hNWBA'
              target="_blank"
            >
              <FaYoutube />
            </a>
            <a
              className='social-icon-link'
              href='https://www.youtube.com/channel/UCEhwmhRwqLKrJu_cW5hNWBA'
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              className='social-icon-link'
              to='https://www.linkedin.com/in/coding-cable-45950120a/'
              target='_blank'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
