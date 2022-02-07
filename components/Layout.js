import styles from '../styles/Layout.module.css';

import FilterCard from './FilterCard';
import ProductCategory from './ProductCategory';

import { getProductNames, getStates, getCities, getProductsByProductName } from '../selectors/ProductSelector';



const Layout = (props) => {
    const {products} = props;
    const productNames = getProductNames(products);
    const states = getStates(products);
    const cities = getCities(products);

    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <FilterCard filters={{ productNames, states, cities }} heading="Filters" />
            </div>
            <div className={styles.rightcontainer}>
                <h1 className={styles.header}>Edvora</h1>
                <h2 className={styles.subHeader}>Products</h2>

                <div className={styles.productCategoryContainer}>
                    {
                        productNames.map((productName, index) => (<ProductCategory key={index} productName={productName} products={getProductByName(products, productName)}  />))
                    }
                </div>
            </div>

        </div>

    )
}


const getProductByName = (products, productName) => {
    return getProductsByProductName(products, productName);
}

export default Layout;