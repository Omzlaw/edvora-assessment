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
      filter: this.filter
    }
  }

  // filterByProduct = (filter, type, updatedFilters) => {
  //   if(type = filter) {
  //     updatedFilters['State'] = 'State';
  //   }
  //   this.setState({
  //     products: type != filter ? getProductsByProductName(this.props.products, filter) : this.props.products,
  //     currentFilters: updatedFilters
  //   }, () => {
  //     this.setState({
  //       states: getStates(this.state.products),
  //       cities: getCities(this.state.products),
  //     })
  //   });
  // }

  // filterByState = (filter, type, updatedFilters) => {
  //   const previousProducts = this.state.currentFilters['Products'] == 'Products' ? this.props.products : getProductsByProductName(this.props.products, this.state.currentFilters['Products']);
  //   if(type = filter) {
  //     updatedFilters['City'] = 'City';
  //   }
  //   this.setState(prevState => ({
  //     products: type != filter ? getProductsByState(previousProducts, filter) : getProductsByProductName(this.props.products, prevState.currentFilters['Products']),
  //     currentFilters: updatedFilters,
  //   }), () => {
  //     this.setState({
  //       cities: getCities(this.state.products),
  //     })
  //   });
  // }

  // filterByCity = (filter, type, updatedFilters) => {
  //   // const previousProducts = [];
  //   // previousProducts = this.state.currentFilters['Products'] == 'Products' ? this.props.products : getProductsByProductName(this.props.products, this.state.currentFilters['Products']);
  //   // previousProducts = this.state.currentFilters['State'] == 'State' ? previousProducts : getProductsByState(previousProducts, filter);

  //   this.setState(prevState => ({
  //     products: type != filter ? getProductsByCity(prevState.products, filter) : getProductsByState(this.props.products, prevState.currentFilters['State']),
  //     currentFilters: updatedFilters,
  //   }));
  // }

  filter = (filter, type) => {
    // const updatedFilters = this.state.currentFilters
    // updatedFilters[type] = filter;
    // switch (type) {
    //   case 'Products':
    //     this.filterByProduct(filter, type, updatedFilters)
    //     break; 
    //   case 'State':
    //     this.filterByState(filter, type, updatedFilters)
    //     break;
    //   case 'City':
    //     this.filterByCity(filter, type, updatedFilters)
    //     break;
    //   default:
    //     break;
    // }
  };

  render() {

    const { products } = this.state;
    const productNames = getProductNames(products);

    return (
      <ProductsContext.Provider value={this.state}>
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
