import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const apolloClient = new ApolloClient({
  uri: "https://localhost:4000/graphql"
});


ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
