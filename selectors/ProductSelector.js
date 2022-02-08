export const filterProducts = (props, currentFilters, type) => {
    const {products, dropdowns} = props;
    const dropdownsClone = Object.create(dropdowns);
    switch (type) {
      case 'Products':
        return  filterProductsByProductName(products, dropdownsClone, currentFilters);
      case 'State':
        return  type == currentFilters['State'] ? filterProductsByProductName(products, dropdownsClone, currentFilters) 
        : filterProductsByState(products, dropdownsClone, currentFilters);
      case 'City':
        return type == currentFilters['City'] ? filterProductsByState(products, dropdownsClone, currentFilters) 
        : filterProductsByCity(products, dropdownsClone, currentFilters);
      default:
        break;
    }
}

export const filterProductsByProductName = (products, dropdowns, currentFilters) => {
    if(currentFilters['Products'] == 'Products'){
        return {products: products, dropdowns: dropdowns};
    }
    products = products.filter(product => product.product_name === currentFilters['Products']);
    dropdowns['State'] = getStates(products);
    dropdowns['City'] = getCities(products);

    return {products: products, dropdowns: dropdowns};
}

export const filterProductsByState = (products, dropdowns, currentFilters) => {
    if (currentFilters['State'] == 'State') {
        products = filterProductsByProductName(products, dropdowns, currentFilters)
        .products;
    }
    else {
        if(currentFilters['Products'] == 'Products') {
            products = products.filter(product => product.address.state === currentFilters['State']);
            dropdowns['City'] = getCities(products);
        }
        else {
            products = filterProductsByProductName(products, dropdowns, currentFilters)
            .products
            .filter(product => product.address.state === currentFilters['State']);
            dropdowns['City'] = getCities(products);
        }
    }
    return {products: products, dropdowns: dropdowns};
}

export const filterProductsByCity = (products, dropdowns, currentFilters) => {
    if(currentFilters['State'] == 'State') {
        products = filterProductsByProductName(products, dropdowns, currentFilters)
        .products
        .filter(product => product.address.city === currentFilters['City']);
    }
    else {
        products = filterProductsByState(products, dropdowns, currentFilters)
        .products
        .filter(product => product.address.city === currentFilters['City']);
    }
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