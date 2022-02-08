export const filterProducts = (products, currentFilters, type) => {
    switch (type) {
      case 'Products':
        return  filterProductsByProductName(products, currentFilters);
      case 'State':
        return  type == currentFilters['State'] ? filterProductsByProductName(products, currentFilters): filterProductsByState(products, currentFilters);
      case 'City':
        return type == currentFilters['City'] ? filterProductsByState(products, currentFilters) : filterProductsByCity(products, currentFilters);
      default:
        break;
    }
}

export const filterProductsByProductName = (products, currentFilters) => {
    if(currentFilters['Products'] == 'Products'){
        return products;
    }
    products = products.filter(product => product.product_name === currentFilters['Products']);
    return products;
}

export const filterProductsByState = (products, currentFilters) => {
    if(currentFilters['Products'] == 'Products') {
        products = products.filter(product => product.address.state === currentFilters['State']);
    }
    else {
        products = filterProductsByProductName(products, currentFilters)
        .filter(product => product.address.state === currentFilters['State']);
    }
    return products;
}

export const filterProductsByCity = (products, currentFilters) => {
    const filteredProducts = filterProducts(products, currentFilters, 'State');
    products = filteredProducts.filter(product => product.address.city === currentFilters['City']);
    return products;
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