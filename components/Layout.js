import styles from '../styles/Layout.module.css';
import FilterCard from './FilterCard';
import ProductCategory from './ProductCategory';


const Layout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <FilterCard heading="Filters" />
            </div>
            <div className={styles.rightcontainer}>
                <h1 className={styles.header}>Edvora</h1>
                <h2 className={styles.subHeader}>Products</h2>

                <div className={styles.productCategoryContainer}>
                    <ProductCategory />
                    <ProductCategory />
                    <ProductCategory />
                    <ProductCategory />
                </div>
            </div>

        </div>

    )
}

export default Layout;