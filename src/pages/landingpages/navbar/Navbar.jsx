import React, { useState } from "react";
import styles from './Navbar.module.css';
import { FaBars } from "react-icons/fa";
// import Link from "next/link";
import { FaDownload } from "react-icons/fa6";


const Navbar = () => {
  const [show, setShow] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToPricing = () => {
    const aboutSection = document.getElementById("price");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToServices= () => {
    const aboutSection = document.getElementById("service");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToHero= () => {
    const aboutSection = document.getElementById("hero");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToDemoForm = () => {
    const aboutSection = document.getElementById("demo");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.completenav}>
      <nav className={styles.navbar} >
        <div className={styles.left}>
          <div className={styles.logo} onClick={scrollToHero}>

            <span>Renter Book </span>
            {/* <img src="/images/logo.jpg" alt="error" /> */}
          </div>
          <ul className={styles.bigscreenul}>
            {/* Use anchor tag instead of Link */}
            <li onClick={scrollToAbout}>About</li>
            <li onClick={scrollToPricing}>Pricing</li>
            <li onClick={scrollToServices}>Services</li>
          </ul>
        </div>
        <div className={styles.right}>
          <button className={styles.bookButton} onClick={scrollToDemoForm}>Book A Demo</button>
          {/* <button className={styles.LoginButton}>Login</button>
          <button className={styles.SignINButton}>Sign Up</button> */}
          <a href={'/dashboard'}><button className={styles.Dashboard}>Vendor Login</button></a>
          <a href="./Rentellar.apk" download><button className={`${styles.Dashboard} ${styles.downloadButton}`} ><FaDownload /></button></a>
          
          <FaBars className={styles.bars} onClick={() => setShow(!show)} />
        </div>
      </nav>
      <div className={`${styles.smallnav} ${show ? styles.navvisible : styles.navhide}`}>
        <ul className={styles.smallul}>
          <li onClick={scrollToAbout}>About</li>
          <li>Pricing</li>
          <li>Services</li>
        </ul>
        <div className={styles.smallscreenbuttons}>
          <button onClick={scrollToDemoForm}>Book A Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
