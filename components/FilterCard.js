import styles from '../styles/FilterCard.module.css';

import Dropdown from './Dropdown';

const FilterCard = (props) => {
    const {heading, filters} = props;
    const {productNames, states, cities} = filters;
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