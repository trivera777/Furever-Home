import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

import Adopt from './components/Adopt/Adopt';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from "./components/Navbar/Navbar"
import Menu from './components/Menu/Menu'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <ApolloProvider client={client}>
      <Router>
        < Navbar />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu />
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Route exact path="/">
              <Adopt />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </div> 
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;