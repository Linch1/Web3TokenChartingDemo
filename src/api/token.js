import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();
const ENDPOINT = axios.create({
    baseURL: process.env.REACT_APP_VOTING_SERVER_URL + '/token'
});

const getToken = async (contractOrName) =>  {
    
    let res = await ENDPOINT.get( `${process.env.REACT_APP_CHART_SERVER_URL}/token/info/${contractOrName}`, {withCredentials: true})
    .catch( err => { return err.response })
    .then( res => { 
        if(!res) return { error: { msg: "unknown from frontend" }}
        return res.data 
    });
    
    return res;
}
let ApiToken = {
    getToken,
};
export default ApiToken;