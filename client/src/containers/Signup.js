import { connect } from 'react-redux'
import { registerUser } from '../actions'
import Signup from '../components/Signup'

const mapStateToProps = state => ({
  user: state.Users,
})

const mapDispatchToProps = {
  registerUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)