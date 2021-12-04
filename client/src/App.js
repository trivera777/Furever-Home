import React from 'react';
import './App.scss'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useState } from 'react';

import Navbar from "./components/Navbar/Navbar"
import Menu from './components/Menu/Menu'
import AppRoutes from './routes/AppRoutes';
import {AuthProvider} from './context/AuthContext'

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
      <AuthProvider>
        <AppRoutes>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </AppRoutes>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;