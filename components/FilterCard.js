import { useContext } from 'react';
import ProductsContext from '../contexts/products/productsContext';
import styles from '../styles/FilterCard.module.css';

import Dropdown from './Dropdown';


const FilterCard = (props) => {
    const {heading} = props;
    const { dropdowns, currentFilters, filter } = useContext(ProductsContext);

    return (
        <div className={styles.container}>
            <h1 className={styles.text}>{heading}</h1>
            <div className={styles.line}></div>
            <Dropdown filter={filter} default={currentFilters['Products']} options={dropdowns['Products']} filterType="Products" />
            <Dropdown filter={filter} default={currentFilters['State']} options={dropdowns['State']} filterType="State" />
            <Dropdown filter={filter} default={currentFilters['City']} options={dropdowns['City']} filterType="City" />
        </div>
    );
}

export default FilterCard;