import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import './adopt.scss'

const Adopt = () => {
  return (
    <main className="background" id="adopt">
      <div className="formBody">
          <Form>
            {/* <Form onSubmit={handleFormSubmit}> */}
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  className="form-input"
                  placeholder="First Name"
                  name="firstName"
                  type="firstName"
                  // value={formState.email}
                  // onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  className="form-input"
                  placeholder="Last Name"
                  name="lastName"
                  type="lastName"
                  // value={formState.email}
                  // onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="form-input"
                  placeholder="your@email.com"
                  name="email"
                  type="email"
                  // value={formState.password}
                  // onChange={handleChange}
                />
              </Form.Group>
              <button variant="outline-dark" type="submit">
                Submit
              </button>
              </Form>
{/* 
          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )} */}
       
      </div>
    </main>
  );
};

export default Adopt;
