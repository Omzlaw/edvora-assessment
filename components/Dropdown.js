import styles from '../styles/Dropdown.module.css';


const Dropdown = (props) => {
    const {filterType, options} = props;
    return (
        <div className={styles.container}>
            <select onChange={handleSelectChange} value={filterType} className={styles.dropdown}>
                <option className={styles.option} value={filterType} disabled>{filterType}</option>
                {
                    options.map((option, index) => (<option key={index} className={styles.option} value={option}>{option}</option>))
                }

            </select>
        </div>
    );
} 

const handleSelectChange = (event) => {
    console.log(event);
}

export default Dropdown;