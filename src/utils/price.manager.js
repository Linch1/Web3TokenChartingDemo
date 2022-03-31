import ApiChart from "../api/chart";

let unixDay = 60 * 60 * 24;
class PriceManager {
    constructor( token ){
        this.prices = [];
        this.requestedRange = null;
        this.token = token;
        this.stop = false;

        this.cooldown = 1000; // ms
        this.lastCallTime = null;

        this.requesting = false;
        this.countback = 150;
    }
    async getPricesFixed( params ){
        if( this.requestedRange ) {
            // time frame lower than the previous one requested
            if( params.from < this.requestedRange.from && params.to <= this.requestedRange.from ) {} 
            // time frame overlapping lower the previous one requested
            else if( 
                params.from < this.requestedRange.from && 
                params.to > this.requestedRange.from &&
                params.to < this.requestedRange.to ){
                // update the params
                params.to = this.requestedRange.from; 
                // update requested range
                this.requestedRange.from = params.from; 
            } 
            // time frame inside the previous one requested
            else if( params.from > this.requestedRange.from && params.to < this.requestedRange.to ){ return } 
            // cannot happen. time frame overlapping superior the previous one requested
            else if( 
                params.from < this.requestedRange.to && 
                params.to > this.requestedRange.to ){
                return; 
            }
            // cannot happen. time frame higher than the previouse one requested
            else if( params.from >= this.requestedRange.to && params.to > this.requestedRange.to ){ return } 
        } else {
            this.requestedRange = params;
        }
        let pricesRes = await ApiChart.getPrices( this.token, params );

        let data = pricesRes.data;
        if( pricesRes.nextTime ) {
            this.requestedRange.from = pricesRes.nextTime;
            return;
        }

        this.prices.unshift(...data);
    }
    async getPricesAuto(){

        if( this.stop ) return; // if stopped, just quit
        if( this.requesting ) return; // if another request is running, just quit
        if( this.lastCallTime ){
            if( Date.now() < this.lastCallTime + this.cooldown ) return; // if the cooldown is not passed, just quit
        } 
        
        // adjust the time range to request
        let params;
        if( !this.requestedRange ) {
            let now = Math.floor( Date.now()/1000 );
            this.requestedRange = { from: now - unixDay, to: now, countBack: this.countback }
            params = this.requestedRange;
        } else {
            let lastFrom = this.requestedRange.from;
            params = { from: lastFrom - unixDay, to: lastFrom, countBack: this.countback }
            this.requestedRange.from = lastFrom - unixDay;
        }

        //console.log('From: ', new Date(params.from * 1000))
        //console.log('To: ', new Date(params.to * 1000))

        this.requesting = true; // blocck the other concurrent requests
        let pricesRes = await ApiChart.getPrices( this.token, params ); // request for the prices
        

        let data = pricesRes.data;
        if( pricesRes.nextTime ) { // if the range is empty, but there are more records, make another request with adjusted time range
            this.requestedRange.to = pricesRes.nextTime;
            this.requestedRange.from = pricesRes.nextTime - unixDay;
            this.requesting = false; // unlock the other requests
            return await this.getPricesAuto();
        }
        if( (!data || !data.length) && !pricesRes.nextTime ) {
            this.stop = true; // If no prices are returned then stop asking them
            return;
        }

        data.sort((a, b) => parseFloat(a.time) - parseFloat(b.time));  // sort data in descenting time order
        this.prices.unshift(...data);
        let times = {};

        for( let i in this.prices ){ // remove cloned prices from list
            let price = this.prices[i];
            if( !times[price.time] ) times[price.time] = true;
            else this.prices.splice(i, 1); // remove cloned element
        }
        
        this.requestedRange.from = data[0].time; // update the from range with the oldest record retrived
        this.requesting = false; // unlock the other requests
        this.lastCallTime = Date.now(); // update last call time
        return true;
    }
}

export default PriceManager;