import Form from "react-bootstrap/Form";
import './adopt.scss';


const Adopt = () => {
  return (
    <main className="adopt" id="adopt">
      <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Adoption Application</Form.Label><br/>
            <Form.Control type="firstName" placeholder="Enter first name" />
            <Form.Text className="text-muted"><br/>
              We'll never share your information with anyone else.
            </Form.Text>
          </Form.Group><br/>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Adoption Application</Form.Label><br/>
            <Form.Control type="firstName" placeholder="Enter first name" />
            <Form.Text className="text-muted"><br/>
              We'll never share your information with anyone else.
            </Form.Text>
          </Form.Group><br/>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label><br/>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group><br/>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </main>
  );
};
export default Adopt;