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
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <AppRoutes>
            <Navbar />
        </AppRoutes>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;