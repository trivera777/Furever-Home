import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Adopt from "./components/Adopt/Adopt";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Nav from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
        <div>
        <Router>
          <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          < Login />
          < Signup />
          <Routes>
            <Route exact path="/" component={Adopt}  />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Routes>
          </Router>
        </div>
      
    </ApolloProvider>
  );
}

export default App;
