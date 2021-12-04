import axios from 'axios';

const BASEURL = process.env.REACT_APP_BASEURL;
const APIKEY = process.env.REACT_APP_APIKEY;

const headers = {
    'Content-Type': 'application/vnd.api+json',
    'Authorization': 'uhj2WrkU'
}

const data = {
    "data": {
        "filterRadius":
        	{
        		"miles": 100,
        		"postalcode": 90210
        	}
        
    }
}

// const search = async (query) =>
const search = async () =>
//   axios.post(`${BASEURL}${query}`, headers, data);
// console.log(headers)
axios.post('https://api.rescuegroups.org/v5/public/animals/search/available/dogs/haspic/?sort=random&limit=10',data, {headers: headers})
export default { search };