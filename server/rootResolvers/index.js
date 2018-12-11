const user = require('../graph/user/resolvers');
const product = require('../graph/product/resolvers');
const merge = require('lodash/fp/merge');

const rootResolver = merge(
  user,
  product,
);

module.exports = rootResolver;
