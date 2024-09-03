import styles from "./Features.module.css";
import CustomerManagement from './images/CustomerManagement.png'
import InventoryManagment from './images/InventoryManagment.png'
import OrderManagment from './images/OrderManagment.png'
import InventorySharing from './images/InventorySharing.png'
import OrderAcquisition from './images/OrderAcquisition.png'
import PeerToPeer from './images/PeerToPeer.png'
import HighSecurity from './images/HighSecurity.png'
import CloudBased from './images/CloudBased.png'
import DirectPurchase from './images/DirectPurchase.png'
import HistoricalInvoice from './images/HistoricalInvoice.png'

const Features = () => {

    return (
        <>
            <section className={styles.features_section} id='service'>
                <h5>Services Provided</h5>
                <h3>The all-in-one Inventory Management System for all types of Businesses</h3>

                <div className={styles.features_container}>
                    <div className={styles.single_feature}>
                        <img src={CustomerManagement} className={styles.featureImg} alt='Customer Management' />
                        <p>Customer Management</p>
                    </div>
                    <div className={styles.single_feature}>
                        <img src={InventoryManagment} className={styles.featureImg} alt='Inventory Management' />
                        <p>Inventory Management</p>
                    </div>
                    <div className={styles.single_feature}>
                        <img src={OrderManagment} className={styles.featureImg} alt='Order Management' />
                        <p>Order Management</p>
                    </div>
                    <div className={styles.single_feature}>
                        <img src={InventorySharing} className={styles.featureImg} alt='Inventory Sharing with Customers' />
                        <p>Inventory Sharing with Customers</p>
                    </div>
                    <div className={styles.single_feature}>
                        <img src={OrderAcquisition} className={styles.featureImg} alt='Order Acquisition' />
                        <p>Order Acquisition</p>
                    </div>
                    <div className={styles.single_feature}>
                        <img src={PeerToPeer} className={styles.featureImg} alt='Peer-to-Peer Transactions' />
                        <p>Peer-to-Peer Transactions</p>
                    </div>
                    <div className={styles.single_feature}>
                        <img src={DirectPurchase} className={styles.featureImg} alt='Direct Purchases from Manufacturers' />
                        <p>Direct Purchases from Manufacturers</p>
                    </div>
                    <div className={styles.single_feature}>
                        <img src={HistoricalInvoice} className={styles.featureImg} alt='Historical Invoice Access' />
                        <p>Historical Invoice Access</p>
                    </div>
                    <div className={styles.single_feature}>
                        <img src={HighSecurity} className={styles.featureImg} alt='High Security Measures' />
                        <p>High Security Measures</p>
                    </div>
                    <div className={styles.single_feature}>
                        <img src={CloudBased} className={styles.featureImg} alt='Cloud-Based Service' />
                        <p>Cloud-Based Service</p>
                    </div>
                </div>
                <div className={styles.arrow_features}>
                    {/* SVG code remains the same */}
                </div>
            </section>
        </>
    )
}

export default Features;
