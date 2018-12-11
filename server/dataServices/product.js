const { UserInputError } = require('apollo-server');
const Product = require('../models/product');

exports.addProduct = async (obj, { input }) => {
  const product = new Product();
  validateAndAssignValues(product, input);
  return await product.save();
};

exports.fetchProductsQuery = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (err) {
    console.log(err);
    return err;
  }
}


function validateAndAssignValues (product, userInputs) {
  if (!userInputs.name && userInputs.name.trim() === '') {
    throw new UserInputError('Product name required', { code: 20001 });
  }

  product.name = userInputs.name;
  product.description = userInputs.description || '';
}
