
//To be deleted, not using axios or this API

import axios from 'axios';

const BASEURL = process.env.REACT_APP_BASEURL;
const APIKEY = process.env.REACT_APP_APIKEY;


const headers = {
    'Content-Type': 'application/vnd.api+json',
    'Authorization': 'uhj2WrkU'
}

// const search = async (query) =>
const search = async (pets, breed, zip, distance) =>
{
console.log(`Pets ${pets} Breed ${breed} Zip ${zip} distance ${distance}`)
const data = {
    "data": {
        "filterRadius":
        	{
        		"miles": `${distance}`,
        		"postalcode": `${zip}`
        	}
            
    }
}

 return axios.post(`https://api.rescuegroups.org/v5/public/animals/search/available/${pets}/haspic/?sort=random&limit=10`,data, {headers: headers})

}
export default { search };