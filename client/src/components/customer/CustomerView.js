import React,{ Component } from 'react';

class CustomerView extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render(){
    const { products, currentUser } = this.props
    if (!currentUser) return <h4>Loading ...</h4>;

    return(
      <div>
        <h1>Welcome customer {currentUser.email}</h1>
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
    );
  }
}

export default CustomerView;
