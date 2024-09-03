import React, { useState } from "react";
import styles from "./project.module.css"; // Import CSS module
import { TiTick } from "react-icons/ti";

const Project = () => {
  const [showMoreRentalPe, setShowMoreRentalPe] = useState(false);

  const toggleShowMoreRentalPe = () => {
    setShowMoreRentalPe(!showMoreRentalPe);
  };

  const [showMoreRenterBook, setShowMoreRenterBook]= useState(false);

  const toggleShowMoreRenterBook = ()=>{
    setShowMoreRenterBook(!showMoreRenterBook)
  }

  return (
    <div className={styles.pricingContainer} id="price">
      <div className={styles.pricingContent}>
        <div className={styles.sectionHeading}>Project</div>
        <div className={styles.sectionDescription}>
          Manage renting without burning a hole in your pockets
        </div>
      </div>
      <div className={styles.pricing_boxes}>
        <div className={styles.pricingCard}>
          <div className={styles.pricingDetails}>
            <div className={styles.price}>Rental Pe*</div>
            <div className={styles.info}>www.rentalpe.co.in</div>
            <div className={styles.description}>
              Rental Pe is a comprehensive platform where consumers can book a
              wide range of rental services, including:
            </div>
            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>Vehicle rentals (cars and bikes)</div>
              </div>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>Jewelry rentals</div>
              </div>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>Clothing rentals</div>
              </div>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>Event decor rentals</div>
              </div>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>
                  Appliance and furniture rentals
                </div>
              </div>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>
                  Construction equipment rentals
                </div>
              </div>
            </div>
            {showMoreRentalPe && (
              <>
                <div className={styles.description} style={{ marginTop: "1rem" }}>
                  Individuals can book services like dresses, jewelry, or home appliances.
                </div>
                <div className={styles.description} style={{ marginTop: "1rem" }}>
                  Organizations and event organizers can launch tenders for their events. Our platform enables renters to view orders and bid on them, allowing organizations to:
                </div>
                <div className={styles.benefits}>
                  <div className={styles.benefit}>
                    <TiTick className={styles.tickIcon} />
                    <div className={styles.benefitText}>
                      See bidder prices
                    </div>
                  </div>
                  <div className={styles.benefit}>
                    <TiTick className={styles.tickIcon} />
                    <div className={styles.benefitText}>
                      Review vendors' portfolios, showcasing their past work
                    </div>
                  </div>
                </div>
                <div className={styles.description} style={{ marginTop: "1rem" }}>
                  This transparent process fosters trust and empowers organizations to make informed decisions when choosing the right vendor.
                </div>
              </>
            )}
            <button onClick={toggleShowMoreRentalPe} className={styles.price_button}>
              {showMoreRentalPe ? "View Less" : "View More"}
            </button>
          </div>
        </div>

        <div className={`${styles.pricingCard} ${styles.premiummm}`}>
          <div className={styles.pricingDetails}>
            <div className={styles.price}>Renter Book*</div>
            <div className={styles.info}>www.renterbook.co.in</div>
            <div className={styles.description}>
            Introducing Renter Book, the ultimate app for renters to manage their business and connect with third-party companies for new opportunities. With Renter Book, you can:
            </div>
            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>
                Streamline inventory management
                </div>
              </div>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>
                Eliminate misinformation and lost records with digital bill books
                </div>
              </div>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>
                Prevent double bookings and optimize inventory based on demand
                </div>
              </div>
              
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>
                Access loan opportunities, a vast network of manufacturers, and connect with vendors
                </div>
              </div>
              {showMoreRenterBook && ( <>
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>Share catalogs with customers and gain data-driven insights</div>
              </div>
              
              <div className={styles.benefit}>
                <TiTick className={styles.tickIcon} />
                <div className={styles.benefitText}>Buy and sell items directly, without intermediaries, like OLX</div>
              </div>
              
              
              <div className={styles.description}>
            Introducing Renter Book, the ultimate app for renters to manage their business and connect with third-party companies for new opportunities. With Renter Book, you can:
            </div>
            <div className={styles.benefits} >
                  <div className={styles.benefit}>
                    <TiTick className={styles.tickIcon} />
                    <div className={styles.benefitText}>
                    Replace traditional bill books with digital records
                    </div>
                  </div>
                  <div className={styles.benefit}>
                    <TiTick className={styles.tickIcon} />
                    <div className={styles.benefitText}>
                    Efficiently manage inventory
                    </div>
                  </div>
                  <div className={styles.benefit}>
                    <TiTick className={styles.tickIcon} />
                    <div className={styles.benefitText}>
                    Prevent double bookings
                    </div>
                  </div>
                  <div className={styles.benefit}>
                    <TiTick className={styles.tickIcon} />
                    <div className={styles.benefitText}>
                    Optimize inventory based on demand
                    </div>
                  </div>
                  <div className={styles.benefit}>
                    <TiTick className={styles.tickIcon} />
                    <div className={styles.benefitText}>
                    Share catalogs with customers
                    </div>
                  </div>
                  <div className={styles.benefit}>
                    <TiTick className={styles.tickIcon} />
                    <div className={styles.benefitText}>
                    Make informed decisions with data-driven insights
                    </div>
                  </div>
                  <div className={styles.benefit}>
                    <TiTick className={styles.tickIcon} />
                    <div className={styles.benefitText}>
                    Access loan opportunities
                    </div>
                  </div>
                  <div className={styles.benefit}>
                    <TiTick className={styles.tickIcon} />
                    <div className={styles.benefitText}>
                    Connect with a vast network of manufacturers
                    </div>
                  </div>
                  <div className={styles.benefit}>
                    <TiTick className={styles.tickIcon} />
                    <div className={styles.benefitText}>
                    Connect vendors between individuals and organizations
                    </div>
                  </div>
                  <div className={styles.benefit}>
                    <TiTick className={styles.tickIcon} />
                    <div className={styles.benefitText}>
                    Buy and sell items directly, without intermediaries"
                    </div>
                  </div>
                </div>
              </>
            
        )}

              <button onClick={toggleShowMoreRenterBook} className={styles.price_button}>{showMoreRenterBook ? "View Less":"View More"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
