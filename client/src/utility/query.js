const baseUrl = 'http://localhost:4000';

export default async (method, query, body) => {

  let url = `${baseUrl}/graphql`;

  const token = localStorage.getItem('auth_token');

  const options = {
    headers: {
      'Accept': 'application/json',
      ...(token && {authorization: `Bearer ${token}`})
    },
  };

  if (method.toLowerCase() !== 'get') {
    options.headers['Content-Type'] = 'application/json';
    options.method = 'POST';
    options.body = JSON.stringify({ query, variables: { input: body }});
  } else {
    url = `${url}?query=${query}`;
  }

    const response = await fetch(url, options);
    const { data, errors } = await response.json();
    return { data, errors };
}
