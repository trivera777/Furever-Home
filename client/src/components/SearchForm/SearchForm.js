import React from 'react';

function SearchForm(props) {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <div className="form-group">
        
        <label htmlFor="petType">Choose a pet:</label>
        <select id="pets" name="pets" value={props.pets} onChange={props.handleInputChange}>
          <option value="Dogs" >Dogs</option>
          <option value="Cats" >Cats</option>
          {/* <option value="Birds">Fiat</option>
          <option value="Reptiles">Audi</option> */}
        </select>
        <br/>
        <label htmlFor="breed">Breed</label>
        <input
          onChange={props.handleInputChange}
          value={props.breed}
        //   defaultValue="Beagle"
          name="breed"
          type="text"
          className="form-control"
          placeholder="Search for a breed"
          id="breed"
        />
        <label htmlFor="zip">Zip Code</label>
        <input
          onChange={props.handleInputChange}
          value={props.zip}
          name="zip"
        //   defaultValue="80516"
          type="text"
          className="form-control"
          placeholder="80516"
          id="zip"
        />
        <label htmlFor="distance">Search Radius(miles)</label>
        <input
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
        <input
          
          className="btn btn-primary"
          type="submit"
          value="Search"
          
        />
         
      </div>
    </form>
  );
}

export default SearchForm;