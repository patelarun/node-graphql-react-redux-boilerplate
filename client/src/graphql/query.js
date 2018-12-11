export const fetchProductQ = `query {
  fetchProductsQuery {
    id, name, description
  }
}`;

export const getUserQ = `query {
  getUser {
    id,email,role,password
  }
}`;
