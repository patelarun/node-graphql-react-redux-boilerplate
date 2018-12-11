export const signupQ = `mutation($input: UserObject) {
  registerUser(input: $input) {
    value
  }
}`;

export const loginQ = `mutation($input: UserLogin) {
  getToken(input: $input) {
    value
  }
}`;

export const addProductQ = `mutation($input: ProductAdd) {
  addProduct(input: $input) {
    id,name,description
  }
}`
