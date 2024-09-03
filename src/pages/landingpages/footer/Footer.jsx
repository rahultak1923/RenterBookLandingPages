import styles from './Footer.module.css'
// import logo from '../../../../public/images/logo.jpg'
import { BsPhone } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { RxLinkedinLogo } from "react-icons/rx";
import { BsTwitterX } from "react-icons/bs";
// import { FaHome } from "react-icons/fa";

const Footer = () => {
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
    const scrollToServices = () => {
        const aboutSection = document.getElementById("service");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    const scrollToHero = () => {
        const aboutSection = document.getElementById("hero");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    // const scrollToDemoForm = () => {
    //     const aboutSection = document.getElementById("demo");
    //     if (aboutSection) {
    //         aboutSection.scrollIntoView({ behavior: "smooth" });
    //     }
    // };


    return (
        <div>
            <section className={styles.footerSection}>
                <div className={styles.fLeft}>
                    {/* <Image className={styles.logoImg} src={logo} alt='Rentellar' /> */}
                    <div className={styles.footerlogo}><span>R</span>ental Pe </div>
                    <h1>India's First Inventory Management Software for the Rental Industry Needs</h1>
                    <h5>Manages all your renting operations efficiently so that you can focus on growing your brand, like a real boss!</h5>
                    <div className={styles.ftrDemoBtn}>Take a free Demo</div>
                </div>

                <div className={styles.fMid}>
                    <p onClick={scrollToHero}>Home</p>
                    <p onClick={scrollToAbout}>About</p>
                    <p onClick={scrollToPricing}>Pricing</p>
                    <p onClick={scrollToServices}>Services</p>
                </div>

                <div className={styles.fRight}>
                    <div className={styles.fRLeft}>
                        <p>Follow Us</p>
                        <div className={styles.ftrSocialLogos}>
                            <a href="/" target="_blank" rel="noopener noreferrer"><AiFillInstagram  className={styles.socialLogo} /></a>
                            <a href="https://www.linkedin.com/company/rentellar/" target="_blank" rel="noopener noreferrer"><RxLinkedinLogo className={styles.socialLogo} /></a>
                            <a href="/" target="_blank" rel="noopener noreferrer"><BsTwitterX className={styles.socialLogo} /></a>
                            <a href="https://wa.me/+918003006242" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp className={styles.socialLogo} /></a>
                        </div>
                    </div>
                    <div className={styles.fRRight}>
                        <p>Call Us</p>
                        <a href='tel:8003006242' className={styles.ftrPhnBtn}>
                            <BsPhone />
                            +91 94133-33080
                        </a>
                        <p className='my-2'>Address :- A/116 Saraswati Nagar <br /> Malviya Nagar Jaipur, Rajasthan</p>
                    </div>
                </div>
            </section>
            <section>
  <div className={`${styles.textCenter} ${styles.footerCompany}`}>
    Powered By Voltakey Digital Pvt Ltd & <br /> RUPK Connect Pvt. Ltd
  </div>
</section>

        </div>
    )
}

export default Footer