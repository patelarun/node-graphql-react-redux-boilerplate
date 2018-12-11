const { UserInputError } = require('apollo-server');

exports.validateEmail = (email) => {
  const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isTestPass = regexp.test(String(email).toLowerCase());
  if (isTestPass) return email;
  throw new UserInputError('Email is not valid', { code: 10004 });
}
