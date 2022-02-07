
import styles from '../styles/Home.module.css';

import Layout from '../components/Layout';

export default function Home({products}) {
  return (
    <div className={styles.container}>
        <Layout products={products}/>
    </div>
  )
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