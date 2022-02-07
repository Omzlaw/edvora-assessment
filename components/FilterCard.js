import { useContext } from 'react';
import ProductsContext from '../contexts/products/productsContext';
import styles from '../styles/FilterCard.module.css';

import Dropdown from './Dropdown';

import {
    getProductNames,
    getStates,
    getCities,
  } from "../selectors/ProductSelector";

const FilterCard = (props) => {
    const {heading} = props;
    const {unFilteredProducts} = useContext(ProductsContext);

    const productNames = getProductNames(unFilteredProducts);
    const states = getStates(unFilteredProducts);
    const cities = getCities(unFilteredProducts);

    return (
        <div className={styles.container}>
            <h1 className={styles.text}>{heading}</h1>
            <div className={styles.line}></div>
            <Dropdown options={productNames} filterType="Products" />
            <Dropdown options={states} filterType="State" />
            <Dropdown options={cities} filterType="City" />
        </div>
    );
}

export default FilterCard;