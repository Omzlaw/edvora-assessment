
import styles from '../styles/Dropdown.module.css';


const Dropdown = (props) => {
    const {filter, defaultValue, options, filterType} = props;
    return (
        <div className={styles.container}>
            <select onChange={(e) => filter(e.target.value, filterType)} defaultValue={defaultValue} className={styles.dropdown}>
                <option className={styles.option} value={filterType}>{filterType}</option>
                {
                    options.map((option, index) => (<option key={index} className={styles.option} value={option}>{option}</option>))
                }   
            </select>
        </div>
    );
} 


export default Dropdown;