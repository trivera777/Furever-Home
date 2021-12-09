import Form from "react-bootstrap/Form";


const Adopt = () => {

const handleSubmit= (e)=> {
  e.preventDefault()
  console.log("Adopt clicked")
  window.location.assign("https://buy.stripe.com/test_14k2b63ut9Mr69G8ww")

}

  return (
    <main className="background" id="adopt">
      <div className="formBody" style={{ height: "800px"}}>
      <Form className="mb-3" onSubmit={handleSubmit}>
      <img src='./img/paw.gif' alt="Paw" style={{ width: "80px","text-align":"top"}}></img>
      
            <Form.Label className="title">Adoption Form</Form.Label>
              <Form.Group className="mb-3">
                <Form.Label>Applicant Name</Form.Label>
                <Form.Control
                  className="form-input"
                  placeholder="Full Name"
                  name="fulltName"
                  type="fulltName"
                  // value={formState.email}
                  // onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control
                  className="form-input"
                  placeholder="Address Line 1"
                  name="addr1"
                  type="addr1"
                  // value={formState.email}
                  // onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control
                  className="form-input"
                  placeholder="Address Line 2"
                  name="addr2"
                  type="addr2"
                  // value={formState.email}
                  // onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  className="form-input"
                  placeholder="City"
                  name="city"
                  type="city"
                  // value={formState.email}
                  // onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  className="form-input"
                  placeholder="5 digit zip code"
                  name="zip"
                  type="zip"
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
