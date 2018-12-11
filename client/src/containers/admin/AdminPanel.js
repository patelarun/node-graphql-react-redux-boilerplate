import { connect } from 'react-redux';
import { addProduct, fetchProducts } from '../../actions';
import AdminPanel from '../../components/admin/AdminPanel';

const mapStateToProps = state => ({
  products: state.products,
})

const mapDispatchToProps = {
  addProduct,
  fetchProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanel)
