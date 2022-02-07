import styles from '../styles/ProductCategory.module.css';
import Image from 'next/image';

import ProductCard from './ProductCard';

import {useRef} from 'react';


const ProductCategory = (props) => {
    const sliderRef = useRef(null);
    const {productName, products} = props;
    return (
        <div className={styles.container}>
            <h1 className={styles.categoryText}>{productName}</h1>
            <div className={styles.divider}></div>
            <div className={styles.productContainer}>
            <div ref={sliderRef} className={styles.productSliderContainer}>
                    {products.map((product, index) => (<ProductCard key={index} product={product} />))}
                </div>
                <div className={styles.arrow}>
                    <a onClick={(e) => scrollAction(e, sliderRef)}><Image src="/arrow.svg" alt="Scrolling Arrow" width={10} height={33} /></a>
                </div>
            </div>
        </div>
    );
}

const scrollAction = (e, sliderRef) => {
    sliderRef.current.scrollLeft += 80;
}


export default ProductCategory;