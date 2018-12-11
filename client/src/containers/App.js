import { connect } from "react-redux";
import App from '../components/App';

const mapState = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapState, null)(App);
