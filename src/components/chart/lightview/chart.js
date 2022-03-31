import React, { useEffect } from 'react';
import { createChart } from 'lightweight-charts';
import PriceManager from '../../../utils/price.manager';
import UtilsNumber from '../../../utils/numbers';
import { useLocation, useParams } from "react-router";

import "./style.css";

let chart;
let series;
let priceManager;
var MIN_MOVE = 0.1;

function onVisibleLogicalRangeChanged(newVisibleLogicalRange) {
    const barsInfo = series.barsInLogicalRange(newVisibleLogicalRange);
    if (barsInfo !== null && barsInfo.barsBefore < -20) {
        // SCRAPE NEW DATA ONLY IF PAUSE TIME IS PASSED
        retriveDatas( priceManager, chart, series );
    }
}
function getSignificantDigitCount(n) {
    var log10 = Math.log(10);
    n = Math.abs(String(n).replace(".", "")); //remove decimal and make positive
    if (n == 0) return 0;
    while (n != 0 && n % 10 == 0) n /= 10; //kill the 0s at the end of n

    return Math.floor(Math.log(n) / log10) + 1; //get number of digits
}
function firstSignificant(n) {
    return Math.ceil(-Math.log10(n));
}
async function retriveDatas( priceManager, chart, series ){
   
    let status = await priceManager.getPricesAuto();
    if(!status) return;
    
    let firstPrice = priceManager.prices[0];

    series.setData(priceManager.prices);

    chart.timeScale().fitContent();
    chart.timeScale().subscribeVisibleLogicalRangeChange(onVisibleLogicalRangeChanged);

    let signifincat_digits = getSignificantDigitCount(firstPrice.value);
    if( firstPrice.value ){
        MIN_MOVE = 1/(10**( firstSignificant(firstPrice.value) + 3 ));
    }
    series.applyOptions({
        priceFormat: {
            type: 'custom',
            precision: signifincat_digits,
            minMove: MIN_MOVE,
            formatter: price => UtilsNumber.shrinkNumberZeros(price),
        },
    });

    return priceManager.prices;
}
const LightViewChart = () => {
    const myRef = React.useRef();
    

    let { contract } = useParams(); // can have query params
    let { search } = useLocation();
    priceManager = new PriceManager(contract);

    useEffect(() => {
        chart = createChart(myRef.current);
        series = chart.addAreaSeries({  
            topColor: 'rgba(242, 68, 98, 0.2)', 
            bottomColor: 'rgba(242, 68, 98, 0)',
            lineColor: 'rgba(242, 68, 98, 1)',
            lineWidth: 3,
        });
        ( async () => {
            let datas = await retriveDatas( priceManager, chart, series );
            if(!datas || !datas.length){
                myRef.current.innerHTML = "";
            }
        })();
    }, []);

    useEffect( () => {
        if( search.includes('theme=dark') ){ // dark mode
            chart.applyOptions({
                layout: { 
                    backgroundColor: '#1b1c21',
                    textColor: '#afa4b4',
                    fontSize: 9
                },
                grid: {
                    vertLines: {
                        color: '#202025',
                    },
                    horzLines: {
                        color: '#202025',
                    },
                },
                timeScale: {
                    timeVisible: true,
                    borderColor: '#535354',
                },
                priceScale: {
                    borderColor: '#535354'
                },
            });
        } else { // light mode
            chart.applyOptions({
                layout: { 
                    backgroundColor: '#f7f7f7',
                    textColor: '#6f6f6f',
                    fontSize: 9
                },
                grid: {
                    vertLines: {
                        color: '#ececec',
                    },
                    horzLines: {
                        color: '#ececec',
                    },
                },
                priceScale: {
                    borderColor: '#9e9e9e'
                },
                timeScale: {
                    timeVisible: true,
                    borderColor: '#9e9e9e',
                }
            })
        }
    }, [search])


    return (
        <div ref={myRef} id="light-chart" style={{width: "101%", height: "100%", backgroundColor: "f7f7f7"}}/>
    );
}

export default LightViewChart;
