import React,{ Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

class Signup extends Component {

  state = {
    email: '',
    password: '',
    role: '',
  }

  handleSubmit = () => {
    const { state: { email, password, role }, props: { registerUser } } = this;

    if ( email !== '' && password !== '' && role !== '') {
      registerUser({ email, password, role });
    }
  }

  render(){
    return(
      <Fragment>
        <h3>Signup Page</h3>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" onChange={ (e) => this.setState({ email: e.target.value })} className="form-control" id="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" onChange={(e) => this.setState({ password: e.target.value })} className="form-control" id="pwd"/>
          </div>
          <div className="form-group">
            <label htmlFor="sel1">Select Role:</label>
            <select onChange={(e) => this.setState({ role: e.target.value })} className="form-control" id="sel1">
              <option>Choose Role</option>
              <option>Customer</option>
              <option>Admin</option>
            </select>
          </div>
          <div>
            <button type="button" onClick={this.handleSubmit} className='btn btn-success'>Signup</button>
          </div>
          Already have an account? <Link to={'/login'}>Login</Link>
        </form>
      </Fragment>
    );
  }
}

export default Signup;
