import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createBrowserHistory } from 'history';
import { PrivateRoute } from '/Users/quinn/Documents/React-Projects/My-App/my-app/src/components/Reusable/privateRoute.js';

import { LoginPage } from '/Users/quinn/Documents/React-Projects/My-App/my-app/src/containers/LoginPage';
// import { history } from '../_helpers';

function App() {
  // {/* // const alert = useSelector(state => state.alert); */}
  const dispatch = useDispatch();
  const history = createBrowserHistory();
  //   useEffect(() => {
  //     history.listen((location, action) => {
  //         // clear alert on location change
  //         dispatch(alertActions.clear());
  //     });
  // }, []);a

  return (
    <div className="App">
       <Router history={history}>
          <Switch>
              {/* <PrivateRoute exact path="/" component={HomePage} /> */}
              <Route path="/login" component={LoginPage} />
              {/* <Route path="/register" component={RegisterationPage} /> */}
              <Redirect from="*" to="/" />
          </Switch>
      </Router>        
    </div>
  );
}

export { App };
