import styles from "../styles/Layout.module.css";

import FilterCard from "./FilterCard";
import ProductCategory from "./ProductCategory";

import {
  getProductNames,
  getStates,
  getCities,
  getProductsByProductName,
  getProductsByState,
  getProductsByCity
} from "../selectors/ProductSelector";

import ProductsContext from "../contexts/products/productsContext";
import React from "react";

class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      products: props.products,
      currentFilters: {
        Products: 'Products',
        State: 'State',
        City: 'City'
      },
      filterProducts: this.filterProducts
    }
  }

  filterProducts = (filter, type) => {
    const updatedFilters = this.state.currentFilters
    updatedFilters[type] = filter;
    switch (type) {
      case 'Products':
        this.setState({
          products: type != filter ? getProductsByProductName(this.props.products, filter) : this.props.products,
          currentFilters: updatedFilters
        });
        break;
      case 'State':
        this.setState(prevState => ({
          products: type != filter ? getProductsByState(this.props.products, filter) : getProductsByProductName(this.props.products, prevState.currentFilters['Products']),
          currentFilters: updatedFilters
        }));
        break;
        case 'City':
          this.setState(prevState => ({
            products: type != filter ? getProductsByCity(this.props.products, filter) : getProductsByState(this.props.products, stprevStateate.currentFilters['State']),
            currentFilters: updatedFilters
          }));
          break;
      default:
        break;
    }
  };

  render() {

    const unFilteredProducts = this.props.products;
    const { products, currentFilters, filterProducts } = this.state;
    
    const productNames = getProductNames(products);
    const states = getStates(products);
    const cities = getCities(products);

    const productProviders = { unFilteredProducts, products, filterProducts, productNames, states, cities, currentFilters }

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
                  products={getProductsByProductName(products, productName)}
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
