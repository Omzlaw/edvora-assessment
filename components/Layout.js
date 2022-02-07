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

    this.filterProducts = (filter, type) => {
      switch (type) {
        case 'product':
          this.setState({
            products: this.getProductByName(this.state.products, filter),
          })
          break;
      
        default:
          break;
      }
    };

    this.state = {
      products: props.products,
      filterProducts: this.filterProducts
    }
  }

  getProductByName = (products, productName) => {
    return getProductsByProductName(products, productName);
  };


  render() {
    const { products, filterProducts } = this.state;
    const productNames = getProductNames(products);
    const states = getStates(products);
    const cities = getCities(products);
    const currentFilters = [];

    const productProviders = { products, filterProducts, productNames, states, cities, currentFilters }

    return (
      <ProductsContext.Provider value={productProviders}>
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
