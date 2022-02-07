import styles from '../styles/ProductCategory.module.css';
import Image from 'next/image';

import ProductCard from './ProductCard';


const ProductCategory = (props) => {
    const {productName, products} = props;
    return (
        <div className={styles.container}>
            <h1 className={styles.categoryText}>{productName}</h1>
            <div className={styles.divider}></div>
            <div className={styles.productContainer}>
            <div id="slider" className={styles.productSliderContainer}>
                    {products.map((product, index) => (<ProductCard key={index} product={product} />))}
                </div>
                <div className={styles.arrow}>
                    <a onClick={(e) => scrollAction(e)}><Image src="/arrow.svg" alt="Scrolling Arrow" width={10} height={33} /></a>
                </div>
            </div>
        </div>
    );
}

const scrollAction = (e) => {
    const productSliderContainer = document.querySelector('#slider');
    productSliderContainer.scrollRight += 80;
}

export default ProductCategory;