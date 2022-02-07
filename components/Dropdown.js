import styles from '../styles/Dropdown.module.css';


const Dropdown = (props) => {
    const {filterType} = props;
    return (
        <div className={styles.container}>
            <select onChange={() => {}} value={filterType} className={styles.dropdown}>
                <option className={styles.option} value={filterType} disabled>{filterType}</option>
            </select>
        </div>
    );
}

export default Dropdown;