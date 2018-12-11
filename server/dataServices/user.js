const { AuthenticationError, ApolloError, UserInputError } = require('apollo-server');
const User = require('../models/user');
const { validateEmail } = require('../utility/regex');
const { createToken, encryptPassword, comparePassword } = require('../utility/authentication');
// const AuthenticationError = require('../utility/errors');

exports.registerUser = async (obj, { input: { email, password, role }}) => {
  try {
    if (!role) throw new UserInputError('Role not selected', { code: 10008 });

    let user = new User();
    user.email = validateEmail(email);
    user.password = await encryptPassword(password);
    user.role = role;

    user = await user.save();

    const token = createToken(user.id);
    if (user) return { value: token };
    return user;
  } catch (err) {
    console.log(err);
    return err;
  }
};

exports.getToken = async (obj, { input: { email, password } }, context, info) => {
  try {
    const user = await User.findOne({ email });
    if (user) {
      if (!comparePassword(password, user.password)) {
        throw new UserInputError('Incorrect Email or Password', { code: 10001 });
      }

      const token = createToken(user.id);
      return { value: token };
    }
    return { success: false };
  } catch (err) {
    console.log(err);
    return err;
  }
};

exports.getUser = async (obj, arg, context, info) => {
  try {
    if (context.user) return context.user;
    return await User.findById(obj.id);
  } catch (err) {
    console.log(err);
    return err;
  }
};
