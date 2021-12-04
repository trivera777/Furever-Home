import axios from 'axios';

const BASEURL = process.env.REACT_APP_BASEURL;
const APIKEY = process.env.REACT_APP_APIKEY;

const headers = {
    'Content-Type': 'application/vnd.api+json',
    'Authorization': `${APIKEY}`
}



const search = async (query) =>
  axios.post(`${BASEURL}${query}`, headers, data);

export default { search };