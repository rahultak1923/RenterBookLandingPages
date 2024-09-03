import React from "react";
import styles from "./pricing.module.css"; // Import CSS module
// import moneyLottie from "../pricing/1715157920022.json";
// import Lottie from "lottie-react";
import { TiTick } from "react-icons/ti";

const Pricing = () => {
  return (
    <div className={styles.pricingContainer} id="price">
      <div className={styles.pricingContent}>
        <div className={styles.sectionHeading}>Pricing</div>
        <div className={styles.sectionDescription}>
          Manage renting operations efficiently without burning a hole in your pockets
        </div>
      </div>
      <div className={styles.pricing_boxes}>
        <div className={styles.pricingCard}>
          <div className={styles.pricingDetails}>
            {/* <div className={styles.title}>Rentellar</div> */}
            <div className={styles.description}>
              For any renter looking to automate their entire operation with affordable and easy-to-use software
            </div>
            <div className={styles.price}>₹5999*</div>
            <div className={styles.orig}><span className={styles.orig_price}>₹12000</span> <span className={styles.discountPercent}> save 50%</span></div>
            {/* <div className={styles.info}>First year / per outlet</div> */}
            <div className={styles.info}>+5999* renewal from next year</div>
            <button className={styles.price_button}>Purchase Now</button>
            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>
                  Efficient cloud-based system that works with every OS
                </div>
              </div>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>
                  Quick and easy inventory management for rental businesses
                </div>
              </div>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>
                  Easy Catalog and Quotation Creation
                </div>
              </div>
              {/* <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>
                  Seamless online ordering system
                </div>
              </div> */}
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>24x7 support</div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.pricingCard} ${styles.premiummm}`}>
          <div className={styles.pricingDetails}>
            {/* <div className={styles.title}>Rentellar</div> */}
            <div className={styles.description}>
              For any renter looking to automate their entire operation with affordable and easy-to-use software
            </div>
            <div className={styles.price}>₹9999*</div>
            <div className={styles.orig}><span className={styles.orig_price}>₹15000</span> <span className={styles.discountPercent}> save 33%</span></div>
            <div className={styles.info}>First year / per outlet</div>
            {/* <div className={styles.info}>+9999* renewal from next year</div> */}
            <button className={styles.price_button}>Purchase Now</button>
            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>
                  Efficient cloud-based system that works with every OS
                </div>
              </div>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>
                  Quick and easy inventory management for rental businesses
                </div>
              </div>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>
                  Analytics and business metrics for better business understanding
                </div>
              </div>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>
                  E- Commerce Listing and Participation
                </div>
              </div>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}> Personalized Landing page for your store</div>
              </div>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>24x7 support</div>
              </div>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>Access to next stage D2C applications particular to business environment :
                  <br />- Wedding Management
                  <br />- Event planning, and more...</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* <div className={styles.arrow_pricing}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          zoomAndPan="magnify"
          viewBox="0 0 810 809.999993"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
        >
          <path
            fill="#a6a6a6"
            d="M 557.972656 150.027344 C 546.472656 263.132812 497.714844 400.632812 428.578125 506.121094 C 400.121094 545.730469 367.949219 582.050781 332.058594 615.078125 C 344.523438 609.710938 358.230469 603.507812 369.347656 597.828125 C 382.152344 591.757812 381.746094 591.871094 389.929688 588.347656 L 389.738281 588.410156 C 389.855469 588.339844 389.992188 588.332031 390.109375 588.269531 L 391.058594 587.859375 C 394.257812 586.457031 391.859375 587.554688 390.503906 588.121094 C 391.132812 587.804688 391.785156 587.535156 392.457031 587.320312 C 393.128906 587.105469 393.8125 586.941406 394.507812 586.832031 C 395.203125 586.722656 395.90625 586.667969 396.609375 586.667969 C 397.316406 586.664062 398.015625 586.71875 398.714844 586.824219 C 399.410156 586.933594 400.097656 587.09375 400.769531 587.304688 C 401.441406 587.519531 402.09375 587.78125 402.722656 588.097656 C 403.355469 588.410156 403.957031 588.773438 404.535156 589.179688 C 405.109375 589.585938 405.648438 590.035156 406.15625 590.527344 C 422.003906 611.136719 386.507812 620.585938 368.648438 630.597656 C 349.800781 636.78125 291.390625 674.921875 280.519531 647.753906 C 280.054688 647.328125 279.621094 646.878906 279.210938 646.402344 C 278.800781 645.925781 278.421875 645.429688 278.070312 644.90625 C 277.71875 644.386719 277.398438 643.847656 277.109375 643.289062 C 276.820312 642.734375 276.566406 642.160156 276.34375 641.574219 C 276.121094 640.984375 275.933594 640.386719 275.78125 639.777344 C 275.628906 639.167969 275.515625 638.550781 275.433594 637.929688 C 275.355469 637.308594 275.308594 636.679688 275.300781 636.054688 C 275.296875 635.425781 275.324219 634.800781 275.390625 634.175781 C 275.457031 633.550781 275.558594 632.933594 275.695312 632.320312 C 275.832031 631.707031 276.007812 631.105469 276.214844 630.511719 C 276.421875 629.917969 276.664062 629.339844 276.941406 628.777344 C 277.214844 628.210938 277.523438 627.667969 277.863281 627.136719 C 278.203125 626.609375 278.570312 626.101562 278.96875 625.617188 C 279.367188 625.132812 279.792969 624.671875 280.246094 624.234375 C 280.695312 623.800781 281.171875 623.390625 281.671875 623.011719 C 282.171875 622.628906 282.691406 622.28125 283.234375 621.960938 C 290.316406 592.238281 298.027344 562.601562 305.402344 532.945312 C 305.808594 531.570312 306.40625 530.277344 307.191406 529.074219 C 307.972656 527.867188 308.910156 526.800781 310.003906 525.867188 C 311.097656 524.933594 312.300781 524.175781 313.617188 523.59375 C 314.929688 523.011719 316.296875 522.625 317.722656 522.441406 C 319.148438 522.253906 320.570312 522.273438 321.988281 522.5 C 323.40625 522.726562 324.765625 523.148438 326.0625 523.769531 C 327.359375 524.390625 328.539062 525.179688 329.605469 526.144531 C 330.671875 527.105469 331.582031 528.199219 332.332031 529.425781 C 337.796875 541.324219 328.664062 554.519531 327.132812 566.6875 C 325.820312 571.980469 324.472656 577.265625 323.15625 582.558594 C 362.433594 543.4375 397.960938 505.441406 423.253906 459.3125 C 436.21875 436.390625 448.1875 412.957031 459.15625 389.015625 C 470.121094 365.074219 480.050781 340.710938 488.945312 315.921875 C 497.835938 291.132812 505.65625 266.011719 512.40625 240.554688 C 519.15625 215.101562 524.8125 189.40625 529.375 163.46875 C 531.792969 155.71875 530.789062 146.128906 536.285156 139.769531 C 536.773438 139.304688 537.296875 138.878906 537.851562 138.496094 C 538.40625 138.113281 538.988281 137.773438 539.59375 137.484375 C 540.203125 137.191406 540.832031 136.949219 541.476562 136.757812 C 542.125 136.5625 542.78125 136.421875 543.449219 136.332031 C 544.117188 136.246094 544.789062 136.207031 545.464844 136.226562 C 546.136719 136.242188 546.808594 136.3125 547.46875 136.433594 C 548.132812 136.554688 548.785156 136.730469 549.417969 136.953125 C 550.054688 137.179688 550.671875 137.453125 551.261719 137.773438 C 551.855469 138.097656 552.417969 138.460938 552.953125 138.875 C 553.488281 139.285156 553.988281 139.734375 554.453125 140.222656 C 554.917969 140.714844 555.339844 141.234375 555.722656 141.792969 C 556.105469 142.347656 556.441406 142.929688 556.730469 143.539062 C 557.019531 144.148438 557.257812 144.777344 557.449219 145.425781 C 557.640625 146.070312 557.777344 146.730469 557.867188 147.398438 C 557.953125 148.066406 557.988281 148.738281 557.96875 149.414062 C 557.949219 150.085938 557.875 150.757812 557.75 151.417969 C 557.902344 150.277344 558.113281 148.761719 557.972656 150.027344 Z M 557.972656 150.027344 "
            fill-rule="nonzero"
          />
        </svg>
      </div> */}
    </div>
  );
};

export default Pricing;