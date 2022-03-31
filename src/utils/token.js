import EnumChainInfos from "../enum/chain";
import EnumChainId from "../enum/chain.id";
import EnumContracts from "../enum/contracts";
import UtilsNumber from "./numbers";

import questionMark from "../img/dex/question-mark.png";

function getChainLogo(chain) {
    console.log('chain: ', chain)
    if( !chain || typeof chain != "string" || !Object.keys(EnumChainInfos).includes(chain.toUpperCase())) return questionMark;
    return EnumChainInfos[chain.toUpperCase()].chain_img;
}
function getDexLogo(chain) {
    if( !chain || typeof chain != "string" || !Object.keys(EnumChainInfos).includes(chain.toUpperCase())) return "";
    return EnumChainInfos[chain.toUpperCase()].dex_img;
}
function getDexLink(chain, tokenAddress) {
    console.log('Getting dex link for: ', chain, tokenAddress)
    if( !chain || typeof chain != "string" || !Object.keys(EnumChainInfos).includes(chain.toUpperCase())) return "";
    return EnumChainInfos[chain.toUpperCase()].dex.replace("$TOKEN$", tokenAddress);
}
function getChartLogo(chain) {
    if( !chain || typeof chain != "string" || !Object.keys(EnumChainInfos).includes(chain.toUpperCase())) return "";
    return EnumChainInfos[chain.toUpperCase()].chart_img;
}
function getChartLink(chain, tokenAddress) {
    console.log("CHAIN: ", chain);
    if( !chain || typeof chain != "string" || !Object.keys(EnumChainInfos).includes(chain.toUpperCase())) return "";
    return EnumChainInfos[chain.toUpperCase()].chart.replace("$TOKEN$", tokenAddress);
}
function getExplorerLogo(chain) {
    if( !chain || typeof chain != "string" || !Object.keys(EnumChainInfos).includes(chain.toUpperCase())) return "";
    return EnumChainInfos[chain.toUpperCase()].explorer_img;
}
function getChainNameFromId( chain ){
    for( let chainName in EnumChainInfos ) {
        if( EnumChainInfos[chainName].id == chain ) {
            chain = chainName;
            break;
        }
    }
    return chain;
}
function getExplorerLink(chain, tokenAddress) {
    if( typeof chain == "number" ) chain = getChainNameFromId( chain );
   
    if( !chain || typeof chain != "string" || !Object.keys(EnumChainInfos).includes(chain.toUpperCase())) return "";
    return EnumChainInfos[chain.toUpperCase()].explorer.replace("$TOKEN$", tokenAddress);
}
function getExplorerLinkContract(chain, tokenAddress) {
    return getExplorerLink(chain, tokenAddress).replace('token', 'address') + '#code'
}
function getExplorerLinkHolders(chain, tokenAddress) {
    return getExplorerLink(chain, tokenAddress) + '#balances'
}

function stringToValidPath( string ) {
    return string.replace(/[^\w\s]/gi, '').split(" ").join("");
}

function getPrice(price, addDollar=true){
    let shrinked = UtilsNumber.shrinkNumberZeros(price);
    if( !shrinked ) return <span style={{ color: 'var(--red-text)' }}>N/A</span>;
    if(addDollar) return '$' + shrinked;
    else return shrinked;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function getRouterName( address ){
    for( let router in EnumContracts[EnumChainId.BSC].ROUTERS ){
        if( address.toLowerCase() == EnumContracts[EnumChainId.BSC].ROUTERS[router].toLowerCase() ) return capitalizeFirstLetter(router.toLowerCase());
    }
    return 'N/A'
}
function getRouterLogo( address ){
    for( let router in EnumContracts[EnumChainId.BSC].ROUTERS ){
        if( address.toLowerCase() == EnumContracts[EnumChainId.BSC].ROUTERS[router].toLowerCase() ) {
            return EnumContracts[EnumChainId.BSC].ROUTERS_LOGO[router];
        }
    }
    return questionMark;
}

let UtilsToken = {
    getPrice,
    getChainLogo,
    getDexLogo,
    getDexLink,
    getChartLogo,
    getChartLink,
    getExplorerLogo,
    getExplorerLink,
    getExplorerLinkContract,
    getExplorerLinkHolders,
    stringToValidPath,

    getRouterName,
    getRouterLogo
}

export default UtilsToken;