import styles from '../styles/ProductCard.module.css';

import Image from 'next/image';



const ProductCard = ({ product }) => {
    return (
        <div className={styles.container}>
            <div className={styles.cardBody}>
                <div className={styles.leftSection}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" width="70" height="70"/>
                    <p>Location</p>
                </div>
                <div className={styles.rightSection}>
                    <h3>Apple</h3>
                    <p>Brand Name</p>
                    <p className={styles.priceText}>$ 29.99</p>
                    <p>Date: 10:12:2021</p>
                </div>
            </div>
            <div className={styles.cardFooter}>
                <h3 className={styles.productDescription}>Description of the Product/Item</h3>
            </div>
        </div>
    );
};

export default ProductCard;