import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutation";
import Auth from "../utils/auth";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import './form.scss'

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(CREATE_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="background" id="signup">
    <div className="formBody" style={{ height: "500px"}}>
          {data ? (
            <Form>
              Success! You may now head{" "}
              <Link to="/">back to the homepage.</Link>
            </Form>
          ) : (
            <Form className="mb-3" onSubmit={handleFormSubmit}>
              <Form.Label className="title">Sign Up</Form.Label>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  className="form-input"
                  placeholder="Enter username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="form-input"
                  placeholder="Enter email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <button variant="outline-dark" type="submit">
                Submit
              </button>
            </Form>
          )}

          {error && (
            <Card>
              <Card.Header>Sign Up</Card.Header>
              {error.message}
            </Card>
          )}
    
    </div>
    </main>
  );
};

export default Signup;
