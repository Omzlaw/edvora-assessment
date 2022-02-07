

export const sortProductsByProductName = (products) => {

    const map = new Map(products.map(({
        product_name,
        data
    }) => [product_name, {
        product_name,
        data: []
    }]));
    
    // for (let {
    //     product_name,
    //     data
    //     } of products) {
    //         map.get(product_name).data.push(...[data].flat());
    //     }
        
    map.get

    

    return[...map.values()];
}