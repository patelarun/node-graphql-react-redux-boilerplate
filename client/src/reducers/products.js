import { ADD_PRODUCT_SUCCESS, FETCH_PRODUCTS_SUCCESS } from '../constants/index';

const Products = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT_SUCCESS:
      const products = [...state];
      products.push(action.payload.addProduct);
      return products

    case FETCH_PRODUCTS_SUCCESS:
      return [...action.payload.fetchProductsQuery];

    default:
      return state
  }
}

export default Products;
