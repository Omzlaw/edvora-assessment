import styles from "../styles/Layout.module.css";

import FilterCard from "./FilterCard";
import ProductCategory from "./ProductCategory";

import {
  getProductNames,
  getStates,
  getCities,
  getProductsByProductName,
} from "../selectors/ProductSelector";

import ProductsContext from "../contexts/products/productsContext";
import React from "react";

class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      products: props.products
    }
  }

  getProductByName = (products, productName) => {
    return getProductsByProductName(products, productName);
  };


  render() {
  const { products } = this.state;
  const productNames = getProductNames(products);
  const states = getStates(products);
  const cities = getCities(products);
  const currentFilters = [];
      return (
        <ProductsContext.Provider value={{ products, productNames, states, cities, currentFilters }}>
          <div className={styles.container}>
            <div className={styles.leftContainer}>
              <FilterCard
                heading="Filters"
              />
            </div>
            <div className={styles.rightcontainer}>
              <h1 className={styles.header}>Edvora</h1>
              <h2 className={styles.subHeader}>Products</h2>
    
              <div className={styles.productCategoryContainer}>
                {productNames.map((productName, index) => (
                  <ProductCategory
                    key={index}
                    productName={productName}
                    products={this.getProductByName(products, productName)}
                  />
                ))}
              </div>
            </div>
          </div>
      </ProductsContext.Provider>
    );
  }
}



export default Layout;
