import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();
const ENDPOINT = axios.create({
    baseURL: process.env.REACT_APP_CHART_SERVER_URL + '/token'
});

const getTokenListBySearch = async (keyword) => {
    let res = await ENDPOINT.get(`/search/${keyword}`, {withCredentials: true})
    .catch( err => {return err.response})
    .then( res => { return res.data})
    return res;
}

export default getTokenListBySearch;