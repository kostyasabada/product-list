import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { Bucket } from './components/Bucket/Bucket';
import { Navigation } from './components/Navigation/Navigation';
import { ProductList } from './components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route
            path="/"
            exact
          >
            <ProductList />
          </Route>
          <Route
            path="/bucket"
            exact
          >
            <Bucket />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
