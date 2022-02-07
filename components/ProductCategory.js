import styles from '../styles/ProductCategory.module.css';
import Image from 'next/image';

import ProductCard from './ProductCard';


const ProductCategory = (props) => {
    const {productName, products} = props;
    console.log(products);
    return (
        <div className={styles.container}>
            <h1 className={styles.categoryText}>{productName}</h1>
            <div className={styles.divider}></div>
            <div className={styles.productContainer}>
            <div className={styles.productSliderContainer}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

                </div>
                <div className={styles.arrow}>
                    <a><Image src="/arrow.svg" alt="Scrolling Arrow" width={10} height={33} /></a>
                </div>
            </div>
        </div>
    );
}

export default ProductCategory;