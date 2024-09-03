import React from "react";
import styles from './Demo.module.css';
import Contact from './img/Contact.png'
// import dynamic from 'next/dynamic';
// import animation from './Animation - 1716447148002.json';

// const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

function Demo() {
  return (
    <div className={styles.demo_section} id="demo">
      <h1 className={styles.demo_heading}>Schedule a free demo</h1>
      <p className={styles.demo_tagline}>Get in touch with our team to clarify your queries</p>
      <div className={styles.demo_comp}>
        <form action="" className={styles.demo_form}>
          <div className={styles.demo_form_field}>
            <label className={styles.demo_form_label} htmlFor="name">
              Name : <span className={styles.ast}>*</span>
            </label>
            <input type="text" className={styles.demo_form_input} name="name" required />
          </div>
          <div className={styles.demo_form_field}>
            <label className={styles.demo_form_label} htmlFor="phone">
              Phone : <span className={styles.ast}>*</span>
            </label>
            <input type="text" className={styles.demo_form_input} name="phone" required />
          </div>
          <div className={styles.demo_form_field}>
            <label className={styles.demo_form_label} htmlFor="email">
              Email : <span className={styles.ast}>*</span>
            </label>
            <input type="text" className={styles.demo_form_input} name="email" required />
          </div>
          <div className={styles.demo_form_field}>
            <label className={styles.demo_form_label} htmlFor="city">
              City : <span className={styles.ast}>*</span>
            </label>
            <input type="text" className={styles.demo_form_input} name="city" required />
          </div>
          <div className={styles.demo_form_field}>
            <label className={styles.demo_form_label} htmlFor="business">
              Business Name : <span className={styles.ast}>*</span>
            </label>
            <input type="text" className={styles.demo_form_input} name="business" required />
          </div>
          <button type="submit" className={styles.demo_form_button}>Submit</button>
        </form>
        <div className={styles.demo_graphic}>
          {/* <Lottie animationData={animation} /> */}
          <img src={Contact} width={500} alt="contactus_images" />
        </div>
      </div>
    </div>
  );
}

export default Demo;
