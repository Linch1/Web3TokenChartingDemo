import axios from 'axios';
// Make requests to CryptoCompare API
export async function getBarsRequest(path, params) {
    try {
        
        const response = await axios.get(`${process.env.REACT_APP_CHART_SERVER_URL}/token/history/${path}`, {params: params})
        .catch( err => { return err.response })
        .then( res => { 
            if(!res) return {} 
            else return res.data 
        });

        let succ = response.success;
        if( succ ) {
            return { 
                data: response.success.data.sort((a, b) => parseFloat(a.time) - parseFloat(b.time)),  // sort data in descenting time order
                nextTime: response.success.nextTime 
            }
        } else {
            return { data: [] }
        }
    } catch(error) {
        throw new Error(`CryptoCompare request error: ${error}`);
    }
}

// Generate a symbol ID from a pair of the coins
export function generateSymbol(exchange, fromSymbol, toSymbol) {
    const short = `${fromSymbol}/${toSymbol}`;
    return {
        short,
        full: `${exchange}:${short}`,
    };
}

export async function getContractInfo(contract) {
    try {
        const response = await axios.get(`${process.env.REACT_APP_CHART_SERVER_URL}/token/basic/${contract}`)
        .catch( err => { return err.response })
        .then( res => { 
            if(!res) return {} 
            else return res.data 
         });
        return response.success ? response.success.data : [];
    } catch(error) {
        throw new Error(`Request error: ${error}`);
    }
}


// parses a crypto pair symbol
export function parseFullSymbol(fullSymbol) {
 
    const match = fullSymbol.match(/^(\w+):(\w+)\/(\w+)$/);
    if (!match) {
        return null;
    }

    return { exchange: match[1], fromSymbol: match[2], toSymbol: match[3] };
}