import React from "react";
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.Footer}> 
      Landscape for Best view
      <hr />
      <br/>
      <div>
        Made with <i class="fas fa-heart"></i> By Rafli Ramadhan
      </div>
    </footer>
  );
};
export default Footer;
