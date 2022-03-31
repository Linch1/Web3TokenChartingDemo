import chainAvalanche from "../img/chain/avalanche.png";
import chainBsc from "../img/chain/bsc.png";
import chainEth from "../img/chain/eth.png";
import chainPolygon from "../img/chain/polygon.png";
import chainSolana from "../img/chain/solana.png";
import chainTron from "../img/chain/tron.png";

import chartAvalanche from "../img/charts/pangolin.png";
import chartBsc from "../img/charts/poocoin.png";
import chartEth from "../img/charts/dextools.png";
import chartPolygon from "../img/charts/dextools.png";
import chartSolana from "../img/charts/solape.png";
import chartTron from "../img/charts/justswap.png";

import dexAvalanche from "../img/dex/pangolin.png";
import dexBsc from "../img/dex/pancakeswap.png";
import dexEth from "../img/dex/uniswap.png";
import dexPolygon from "../img/dex/quickswap.png";
import dexSolana from "../img/dex/raydium.png";
import dexTron from "../img/dex/justswap.png";

import explorerAvalanche from "../img/explorer/avax_explorer.png";
import explorerBsc from "../img/explorer/bscscan.png";
import explorerEth from "../img/explorer/etherscan.png";
import explorerPolygon from "../img/explorer/polygonscan.png";
import explorerSolana from "../img/explorer/solana.png";
import explorerTron from "../img/explorer/tronscan.png";


const EnumChainInfos = {
    BSC: {
        id: 56,
        "dex": "https://pancakeswap.finance/swap?outputCurrency=$TOKEN$",
        "chart": "https://poocoin.app/tokens/$TOKEN$",
        "explorer": "https://bscscan.com/token/$TOKEN$",
        "dex_img": dexBsc,
        "chart_img": chartBsc,
        "explorer_img": explorerBsc,
        "chain_img": chainBsc
    },
    ETH: {
        id: 1,
        "dex": "https://app.uniswap.org/#/swap?outputCurrency=$TOKEN$",
        "chart": "https://www.dextools.io/app/ether/pair-explorer/$TOKEN$",
        "explorer": "https://etherscan.io/token/$TOKEN$",
        "dex_img": dexEth,
        "chart_img": chartEth,
        "explorer_img": explorerEth,
        "chain_img": chainEth
    },
    POLYGON: {
        id: 137,
        "dex": "https://quickswap.exchange/#/swap?outputCurrency=$TOKEN$",
        "chart": "https://www.dextools.io/app/polygon/pair-explorer/$TOKEN$",
        "explorer": "https://polygonscan.com/token/$TOKEN$",
        "dex_img": dexPolygon,
        "chart_img": chartPolygon,
        "explorer_img": explorerPolygon,
        "chain_img": chainPolygon
    },
    SOLANA: {
        id: -1, // not exists
        "dex": "https://raydium.io/swap/",
        "chart": "https://solapeswap.io/#/market/$TOKEN$",
        "explorer": "https://explorer.solana.com/address/$TOKEN$",
        "dex_img": dexSolana,
        "chart_img": chartSolana,
        "explorer_img": explorerSolana,
        "chain_img": chainSolana
    },
    TRON: {
        id: -1, // not exists
        "dex": "https://justswap.io/#/home",
        "chart": "https://justswap.io/#/scan/detail/trx/$TOKEN$",
        "explorer": "https://tronscan.org/#/token20/$TOKEN$",
        "dex_img": dexTron,
        "chart_img": chartTron,
        "explorer_img": explorerTron,
        "chain_img": chainTron
    },
    AVALANCHE: {
        id: 43114,
        "dex": "https://app.pangolin.exchange/#/swap",
        "chart": "https://info.pangolin.exchange/#/token/$TOKEN$",
        "explorer": "https://explorer.avax.network/asset/$TOKEN$",
        "dex_img": dexAvalanche,
        "chart_img": chartAvalanche,
        "explorer_img": explorerAvalanche,
        "chain_img": chainAvalanche
    }
}
export default EnumChainInfos;