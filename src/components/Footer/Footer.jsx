import React from "react";
import {FaInstagram,FaGithub, FaFacebookF, FaTwitter, FaHeart} from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="column">
        <div className="column-me">
          Get connected with me on social networks!
        </div>
        <div className="social">
          <a href="https://facebook.com/raflyrdnn">
          <FaFacebookF/>
          </a>
          <a href="https://twitter.com/raflyrdnn">
          <FaTwitter/>
          </a>
          <a href="https://github.com/raflyrrr">
          <FaGithub/>
          </a>
          <a href="https://instagram.com/raflyrdn">
          <FaInstagram/>
          </a>
        </div>
      </div>
      <div className="column-made">
        <div className="column-made-by">
          <p>Made with <FaHeart/> by Rafli Ramadhan</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
