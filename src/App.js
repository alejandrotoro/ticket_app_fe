import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App container">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/sign-in' component={Login} />
            <Route exact path='/sign-up' component={Register} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
