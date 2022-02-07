/* eslint-disable @next/next/no-img-element */
import styles from '../styles/ProductCard.module.css';

import Image from 'next/image';

import { formatDate } from '../utils/date';
import { formatPrice } from '../utils/price';



const ProductCard = ({ product }) => {
    return (
        <div className={styles.container}>
            <div className={styles.cardBody}>
                <div className={styles.leftSection}>
                    <img src={product.image} width="70" height="70" alt={`${product.product_name}' image`}/>
                    <p>Location</p>
                </div>
                <div className={styles.rightSection}>
                    <h3>{product.product_name}</h3>
                    <p>{product.brand_name}</p>
                    <p className={styles.priceText}>$ {formatPrice(product.price)} </p>
                    <p>Date: {formatDate(product.date)}</p>
                </div>
            </div>
            <div className={styles.cardFooter}>
                <h3 className={styles.productDescription}>{product.discription}</h3>
            </div>
        </div>
    );
};

export default ProductCard;