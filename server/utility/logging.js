const { green, greenBright } = require("chalk");

module.exports.logRequest = async (req) => {
  const query = req.method.toLowerCase() === 'get'
    ? req.query.query
    : req.body.query.split('\n').join(' ');

  methodMap = { get: green, post: greenBright }[req.method.toLowerCase()] || green;

  console.log(methodMap(`${req.method} \t ${query} \t`));
}
