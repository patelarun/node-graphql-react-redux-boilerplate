const { AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/user');

exports.authenticationTokenRoute = ({ headers }) => {
    const route = headers.referer.replace(headers.origin, '');
    return route !== '/login' && route !== '/signup';
}

exports.getUserFromToken = async (req) => {
  try {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) throw new AuthenticationError('No authentication token provided', { code: 10002 });
    const userId = module.exports.getUserIdFromToken(token);
    const user = await User.findOne({ _id: userId });
    if (!user) throw new AuthenticationError('Invalid token', { code: 10003 });
    return user;
  } catch (err) {
    console.log(err);
    return err;
  }
}

exports.createToken = (userId) => {
  if (!userId) return false;
  return jwt.sign({ data: userId }, 'ragnarok', { expiresIn: '24h' });
}

exports.getUserIdFromToken = (token) => {
  if (!token) return false;
  return jwt.decode(token).data;
}

exports.encryptPassword = (password) => {
  try {
    if (!password) throw new AuthenticationError('Provided password incorrect', { code: 10005 });
    const cipher = crypto.createCipher('aes-128-cbc', 'encrypt password');
    return cipher.update(password, 'utf8', 'hex') + cipher.final('hex');
  } catch (err) {
    console.log(err);
    return err;
  }
}

exports.comparePassword = (enteredPassword, userEncryptedPassword) => {
  const cipher = crypto.createDecipher('aes-128-cbc', 'encrypt password');
  const decryptPassword = cipher.update(userEncryptedPassword, 'hex', 'utf8') + cipher.final('utf8');
  return enteredPassword === decryptPassword;
}
