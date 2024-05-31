import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        
      </Switch>
    </Router>
  );
};

export default AppRoutes;

