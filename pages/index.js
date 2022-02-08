
import styles from '../styles/Home.module.css';

import Layout from '../components/Layout';

import {
  getProductNames,
  getStates,
  getCities,
} from "../selectors/ProductSelector";



export default function Home({products, dropdowns}) {

  return (
    <div className={styles.container}>
          <Layout products={products} dropdowns={dropdowns} />
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
  const dropdowns = {
    Products: getProductNames(products),
    State: getStates(products),
    City: getCities(products)
  }

  return {
    props: { products, dropdowns },
  }
}