import { useContext } from 'react';
import ProductsContext from '../contexts/products/productsContext';
import styles from '../styles/FilterCard.module.css';

import Dropdown from './Dropdown';


const FilterCard = (props) => {
    const {heading} = props;
    const { filteredDropdowns, currentFilters, filter } = useContext(ProductsContext);

    const dropdownKeys = Object.keys(currentFilters); 

    return (
        <div className={styles.container}>
            <h1 className={styles.text}>{heading}</h1>
            <div className={styles.line}></div>
            <div className={styles.dropdownTypes}>
                {
                    dropdownKeys.map((key, index) =>      
                    (<Dropdown key={index} filter={filter} default={currentFilters[key]} options={filteredDropdowns[key]} filterType={key} />))
                }
            </div>
        </div>
    );
}

export default FilterCard;