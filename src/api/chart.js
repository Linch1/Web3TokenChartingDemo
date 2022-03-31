import axios from 'axios';

/**
 * 
 * @param {*} path token address
 * @param {*} params { from, to, firstDataRequest }
 * @returns 
 */
async function getPrices(path, params) {
    try {
        const response = await axios.get(`${process.env.REACT_APP_CHART_SERVER_URL}/token/history/${path}`, {params: params})
        .catch( err => { return err.response })
        .then( res => { 
            if(!res) return {} 
            else return res.data 
        });

        let succ = response.success;
        if( succ ) {
            return { data: response.success.data, nextTime: response.success.nextTime }
        } else {
            return { data: [] }
        }
    } catch(error) {
        throw new Error(`CryptoCompare request error: ${error}`);
    }
}

let ApiChart = {
    getPrices
}

export default ApiChart;