import { useContext } from 'react';
import ProductsContext from '../contexts/products/productsContext';
import styles from '../styles/FilterCard.module.css';

import Dropdown from './Dropdown';


import {
    getProductNames,
    getStates,
    getCities
  } from "../selectors/ProductSelector";

const FilterCard = (props) => {
    const {heading} = props;
    const { products } = useContext(ProductsContext);
    const productNames = getProductNames(products);
    const states = getStates(products);
    const cities = getCities(products);


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