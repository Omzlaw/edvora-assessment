export const filterProducts = (props, currentFilters, type) => {
    const {products, dropdowns} = props;
    switch (type) {
      case 'Products':
        return  filterProductsByProductName(products, dropdowns, currentFilters);
      case 'State':
        return  type == currentFilters['State'] ? filterProductsByProductName(products, dropdowns, currentFilters): filterProductsByState(products, dropdowns, currentFilters);
      case 'City':
        return type == currentFilters['City'] ? filterProductsByState(products, dropdowns, currentFilters) : filterProductsByCity(products, dropdowns, currentFilters);
      default:
        break;
    }
}

export const filterProductsByProductName = (products, dropdowns, currentFilters) => {
    if(currentFilters['Products'] == 'Products'){
        return {products: products, dropdowns: dropdowns};
    }
    products = products.filter(product => product.product_name === currentFilters['Products']);
    // dropdowns['State'] = getStates(products);
    // dropdowns['City'] = getCities(products);

    return {products: products, dropdowns: dropdowns};
}

export const filterProductsByState = (products, dropdowns, currentFilters) => {
    if(currentFilters['Products'] == 'Products') {
        products = products.filter(product => product.address.state === currentFilters['State']);
        // dropdowns['City'] = getCities(products);
    }
    else {
        products = filterProductsByProductName(products, dropdowns, currentFilters).products
        .filter(product => product.address.state === currentFilters['State']);
        // dropdowns['City'] = getCities(products);
    }
    return {products: products, dropdowns: dropdowns};
}

export const filterProductsByCity = (products, dropdowns, currentFilters) => {
    const filteredProducts = filterProducts({products, dropdowns}, currentFilters, 'State');
    products = filteredProducts.products.filter(product => product.address.city === currentFilters['City']);
    return {products: products, dropdowns: dropdowns};
}


export const getProductNames = (products) => {

    const map = new Map(products.map(({
        product_name,
    }) => [product_name, product_name]))  
    return [...map.values()];
}

export const getStates = (products) => {

    const map = new Map(products.map(({
        address: {state},
    }) => [state, state]))  
    return [...map.values()];
}

export const getCities = (products) => {

    const map = new Map(products.map(({
        address: {city},
    }) => [city, city]))  
    return [...map.values()];
}

export const sortProductsByProductName = (products, productName) => {
    products = products.filter(product => product.product_name === productName);
    return products;
}