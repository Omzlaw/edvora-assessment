import styles from "../styles/Layout.module.css";

import FilterCard from "./FilterCard";
import ProductCategory from "./ProductCategory";

import {
  getProductNames,
  sortProductsByProductName,
  filterProducts,
} from "../selectors/ProductSelector";

import ProductsContext from "../contexts/products/productsContext";
import React from "react";

class Layout extends React.Component {

  constructor(props) {
    super();

    this.state = {
      filteredProducts: props.products,
      filter: this.filter,
      currentFilters: {
        Products: 'Products',
        State: 'State',
        City: 'City'
      },
      filteredDropdowns: props.dropdowns
    }
  }

  filter = (filter, type) => {
    const { currentFilters } = this.state;
    currentFilters[type] = filter;

    if(type == 'Products'){
      currentFilters['State'] = 'State';
      currentFilters['City'] = 'City'
    }

    if(type == 'State'){
      currentFilters['City'] = 'City'
    }

    const filtered = filterProducts(this.props, currentFilters, type) || [];

    this.setState({
      filteredProducts: filtered.products,
      filteredDropdowns: filtered.dropdowns,
      currentFilters: currentFilters,
    })
  };


  render() {
    const { products } = this.props;
    const { filteredProducts } = this.state;
    const productNames = getProductNames(filteredProducts);

    return (
      <ProductsContext.Provider value={{ products, ...this.state}}>
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
                  products={sortProductsByProductName(filteredProducts, productName)}
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
