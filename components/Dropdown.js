import ProductsContext from '../contexts/products/productsContext';
import styles from '../styles/Dropdown.module.css';


const Dropdown = (props) => {
    const {filterType, options} = props;
    return (
        <ProductsContext.Consumer>
            {({filter}) => (
                <div className={styles.container}>
                    <select onChange={(e) => filter(e.target.value, filterType)} defaultValue={filterType} className={styles.dropdown}>
                        <option className={styles.option} value={filterType}>{filterType}</option>
                        {
                            options.map((option, index) => (<option key={index} className={styles.option} value={option}>{option}</option>))
                        }

                    </select>
                </div>
            )}
        </ProductsContext.Consumer>
    );
} 


export default Dropdown;