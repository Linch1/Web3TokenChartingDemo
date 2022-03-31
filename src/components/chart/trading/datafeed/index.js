import { getBarsRequest, parseFullSymbol, generateSymbol, getContractInfo } from './helper.js';

const configurationData = {
    supported_resolutions: ['1', '5', '1H', '12H', '1D'],
    exchanges: [
        {
            value: 'Mine',
            name: 'Mine',
            desc: 'Mine',
        }
    ],
    symbols_types: [
        {
            name: 'crypto',
            value: 'crypto',
        }
    ],
};

export default {
    onReady: (callback) => {
        console.log('[onReady]: Method call');
        setTimeout(() => callback(configurationData));
    },
    searchSymbols: (userInput, exchange, symbolType, onResultReadyCallback) => {
        console.log('[searchSymbols]: Method call');
    },
    resolveSymbol: async (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
        let href = window.location.href;
        let contract = href.split('/').pop().split('?').shift();

        console.log('[resolveSymbol]: Method call',  contract);
        const tokenInfos = await getContractInfo(contract);

        const symbolInfo = {
            ticker: contract,
            name: tokenInfos.name || "Not Found",
            description: `${tokenInfos.symbol || "Not Found"}/USD`,
            type: "crypto",
            session: '24x7',
            timezone: 'Europe/Rome',
            exchange: 'Mine.cc',
            minmov: tokenInfos.minmov,
            has_intraday: true,
            has_no_volume: true,
            has_weekly_and_monthly: false,
            supported_resolutions: configurationData.supported_resolutions,
            volume_precision: 2,
            data_status: 'streaming',
            pricescale: tokenInfos.pricescale ,
        };
        console.log('[resolveSymbol]: Symbol resolved', symbolName);
        onSymbolResolvedCallback(symbolInfo);
    },
    getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
        const { from, to, firstDataRequest } = periodParams;
        periodParams.resolution = resolution;
        
        let contract = window.location.href.split('/').pop();
        console.log('[getBars]: Method call', resolution, from, to, periodParams);
        try {
            const { data, nextTime } = await getBarsRequest(contract, periodParams);
            if( data.length === 0 && nextTime ){
                return onHistoryCallback([], { noData: false, nextTime: nextTime });
            }
            if (data.length === 0) {
                // "noData" should be set if there is no data in the requested period.
                return onHistoryCallback([], { noData: true });
            }
            let bars = [];
            data.forEach(bar => {
                bars = [...bars, {
                    time: bar.time * 1000,
                    low: bar.low,
                    high: bar.high,
                    open: bar.open,
                    close: bar.close,
                }];
            });
            console.log(`[getBars]: returned ${bars.length} bar(s)`);
            onHistoryCallback(bars, { noData: false });
        } catch (error) {
            console.log('[getBars]: Get error', error);
            onErrorCallback(error);
        }
    },
    subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback) => {
        console.log('[subscribeBars]: Method call with subscribeUID:', subscribeUID);
    },
    unsubscribeBars: (subscriberUID) => {
        console.log('[unsubscribeBars]: Method call with subscriberUID:', subscriberUID);
    },
};