import React,{ Component, Fragment } from 'react';

class AdminPanel extends Component {

  state = {
    productName: '',
    productDescription: '',
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  handleSubmit = () => {
    const { state: { productName, productDescription }, props: { addProduct } } = this;

    if ( productName !== '' && productDescription !== '') {
      addProduct({ name:productName, description:productDescription });
    }
  }

  render(){
    const { products } = this.props
    return(
      <Fragment>
        <h2>Admin Panel</h2>
        <div className='row'>
          <div className='col-sm-6'>
            <h4>Add Products</h4>
            <form>
              <div className="form-group">
                <label htmlFor="email">Product name:</label>
                <input type="name" onChange={ (e) => this.setState({ productName: e.target.value })} className="form-control" id="email"/>
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Product Description:</label>
                <textarea type="password" onChange={(e) => this.setState({ productDescription: e.target.value })} className="form-control" id="pwd"/>
              </div>
              <div>
                <button type="button" onClick={this.handleSubmit} className='btn btn-success'>Add</button>
              </div>
            </form>
          </div>
          <div className='col-sm-6'>
            <h4>Products List</h4>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Index</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AdminPanel;
