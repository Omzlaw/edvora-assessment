
import styles from '../styles/Home.module.css';

import Layout from '../components/Layout';
import ProductsContext from '../contexts/products/productsContext';

import {
  getProductNames,
  getStates,
  getCities,
} from "../selectors/ProductSelector";



export default function Home({products}) {

  return (
    <div className={styles.container}>
          <Layout products={products} />
    </div>
  )
}

const filterProducts = () => {

}


export async function getServerSideProps (context) {
  const res = await fetch(`https://assessment-edvora.herokuapp.com`)
  const products = await res.json();


  if (!products) {
    return {
      notFound: true,
    }
  }

  return {
    props: { products },
  }
}