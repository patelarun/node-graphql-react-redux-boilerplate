import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';
import CustomerView from '../../components/customer/CustomerView';

const mapStateToProps = state => ({
  products: state.products,
  currentUser: state.user.currentUser,
})

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerView)
