import React from 'react';
import { Route } from "react-router-dom"

export const privateRoute = ({ token, path, component }) => (
  !!token ? <Route path={path} component={component} /> : window.location.href = '/login'
);

export const publicRoute = ({ token, path, component }) => (
  !!token ? window.location.href = '/' : <Route path={path} component={component} />
);
