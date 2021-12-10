import React from "react";
import { Form, Dropdown, DropdownButton } from "react-bootstrap";

function SearchForm(props) {
  return (
    <main className="searchbackground" id="login">
      <div className="formBody">
        <Form className="mb-3" onSubmit={props.handleFormSubmit}>
          <Form.Label className="title">Search</Form.Label>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="petType">Choose a pet:</Form.Label>
            <select
              className="form-control"
              id="pets"
              name="pets"
              value={props.pets}
              onChange={props.handleInputChange}
            >
              <option value="dog">Dogs</option>
              <option value="cat">Cats</option>
              <option value="bird">Birds</option>
              <option value="rabbit">Rabbits</option>
            </select>
            <br />
            <Form.Label htmlFor="breed">Breed</Form.Label>
            <Form.Control
              onChange={props.handleInputChange}
              value={props.breed}
              name="breed"
              type="text"
              className="form-control"
              placeholder="Search for a breed"
              id="breed"
            />
            <Form.Label htmlFor="zip">Zip Code</Form.Label>
            <Form.Control
              onChange={props.handleInputChange}
              value={props.zip}
              name="zip"
              type="text"
              className="form-control"
              placeholder="80516"
              id="zip"
            />
            <Form.Label htmlFor="distance">Search Radius(miles)</Form.Label>
            <Form.Control
              onChange={props.handleInputChange}
              value={props.distance}
              name="distance"
              type="text"
              className="form-control"
              placeholder="100"
              //   defaultValue="100"
              id="distance"
            />

            <br />
            <button type="submit" value="Search">
              Search
            </button>
          </Form.Group>
        </Form>
      </div>
    </main>
  );
}

export default SearchForm;
