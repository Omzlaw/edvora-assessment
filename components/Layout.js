import styles from '../styles/Layout.module.css';
import FilterCard from './FilterCard';


const Layout = () => {
    return (
        <div className={styles.container}>
            <FilterCard />
        </div>
    )
}

export default Layout;