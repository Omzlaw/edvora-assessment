import styles from '../styles/FilterCard.module.css';

import Dropdown from './Dropdown';

const FilterCard = (props) => {
    const {heading} = props;
    return (
        <div className={styles.container}>
            <h1 className={styles.text}>{heading}</h1>
            <div className={styles.line}></div>
            <Dropdown filterType="Products" />
            <Dropdown filterType="State" />
            <Dropdown filterType="City" />
        </div>
    );
}

export default FilterCard;