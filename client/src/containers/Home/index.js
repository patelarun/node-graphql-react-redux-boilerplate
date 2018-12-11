import { connect } from "react-redux";
import Home from '../../components/Home';
import { logoutUser } from '../../actions';


const mapState = state => ({
  currentUser: state.user.currentUser,
});

const mapDispath = {
  logoutUser,
};

export default connect(mapState, mapDispath)(Home);
