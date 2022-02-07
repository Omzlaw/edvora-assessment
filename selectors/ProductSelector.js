  

export const getProductsByProductName =  (products, productName) => {
    const product = products.filter(product => product.product_name === productName);
    return product;
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