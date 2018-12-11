const productDataServices = require('../../dataServices/product');

module.exports = {
  Mutation: {
    addProduct: productDataServices.addProduct,
  },

  Query: {
    fetchProductsQuery: productDataServices.fetchProductsQuery,
  }
};
