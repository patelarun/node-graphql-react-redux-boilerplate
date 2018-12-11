class AuthenticationError extends Error {
  constructor (message, codes) {
    super(message);
    this.code = codes;
    this.message = message;
  }
}

module.exports = AuthenticationError;
