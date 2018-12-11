const { ApolloServer, gql } = require('apollo-server');
const chalk = require('chalk');
const rootResolver = require('./rootResolvers');
const schema = require('./rootSchema');
const cors = require('cors');
const db = require('./db');
const { authenticationTokenRoute, getUserFromToken } = require('./utility/authentication');
const { logRequest } = require('./utility/logging');

try {

  const app = new ApolloServer({
    typeDefs: schema,
    resolvers: rootResolver,
    context: async ({ req }) => {
      logRequest(req);
      if (authenticationTokenRoute(req)) {
        const user = await getUserFromToken(req);
        return { user };
      }
    },
    formatError: error => {
      return error;
      // return new Error('Internal server error');
    },
    formatResponse: response => {
      // console.timeEnd(chalk.green('timecal'))
     // console.log(response);
     return response;
    },
  });

  app.listen().then(({ url }) => {
    console.log(chalk.blue('\n\n 🚀  Server running at ' + url));
  })

} catch (err) {
  console.log(chalk.red(err.stack));
}
