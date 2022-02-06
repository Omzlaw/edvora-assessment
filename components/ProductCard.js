import styles from '../styles/ProductCard.module.css';



const ProductCard = ({ product }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.text}>{product.product_name}</h1>
        </div>
    );
};