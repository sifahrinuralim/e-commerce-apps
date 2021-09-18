import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Item from './Page/Item';
import Account from './Page/Account'
import Login from './Page/Login'
import Homepage from './Page/Homepage';
import useToken from './Page/useToken';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  else if (token) {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/item">
              <Item />
            </Route>

            <Route path="/account">
              <Account />
            </Route>

            <Route path="/">
              <Homepage />
            </Route>

            {/* <Route path="/login">
              <Login />
            </Route> */}

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
