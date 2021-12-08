import Form from "react-bootstrap/Form";


const Adopt = () => {
  return (
    <main className="background" id="adopt">
      <div className="formBody" style={{ height: "500px"}}>
      <Form className="mb-3">
            <Form.Label className="title">Adoption Form</Form.Label>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
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
      </div>
    </main>
  );
};

export default Adopt;
