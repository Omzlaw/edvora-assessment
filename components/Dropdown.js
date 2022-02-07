import styles from '../styles/Dropdown.module.css';


const Dropdown = (props) => {
    const {filterType} = props;
    return (
        <div className={styles.container}>
            <select className={styles.dropdown}>
                <option className={styles.option} value="" disabled selected>{filterType}</option>
            </select>
        </div>
    );
}

export default Dropdown;