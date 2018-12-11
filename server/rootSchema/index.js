const user = require('../graph/user/schema');
const product = require('../graph/product/schema');
const { mergeSchemas } = require('graphql-tools');

module.exports = [
    user,
    product,
  ];
