import React,{ Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

  state = {
    email: '',
    password: '',
  }

  handleSubmit = () => {
    const { state: { email, password }, props: { loginUser } } = this;

    if (email.trim() !== '' && password.trim() !== '') {
      loginUser({ email, password });
    }
  }

  render() {
    return (
      <Fragment>
        <h3>Login Page</h3>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" onChange={(e) => this.setState({ email: e.target.value })} className="form-control" id="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" onChange={(e) => this.setState({ password: e.target.value })} className="form-control" id="pwd"/>
          </div>
          <div>
            <button type="button" onClick={this.handleSubmit} className='btn btn-success'>Login</button>
          </div>
          Don't have an account? <Link to={'/signup'}>Signup</Link>
        </form>
      </Fragment>
    );
  }
}

export default Login;
