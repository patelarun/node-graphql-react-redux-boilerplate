import { connect } from 'react-redux';
import { loginUser } from '../actions';
import Login from '../components/Login';

const mapStateToProps = state => ({
  user: state.Users,
})

const mapDispatchToProps = {
  loginUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)