import React, { PureComponent, Fragment } from 'react';
import AdminPanel from '../../containers/admin/AdminPanel';
import CustomerView from '../../containers/customer/CustomerView';

export default class Home extends PureComponent {

  handlClickLogout = (e) => {
    e.target.disabled = true;
    this.props.logoutUser();
  }

  render () {
    const { currentUser } = this.props;

    if (!currentUser || !currentUser.role) return <h4>Loading ...</h4>;

    return (
      <Fragment>
      <button className="btn btn-danger pull-right" onClick={this.handlClickLogout}>Logout</button>
      {
        currentUser.role.toLowerCase() === 'admin'
        ? <AdminPanel />
        : <CustomerView />
      }
      </Fragment>
    );
  }
}
