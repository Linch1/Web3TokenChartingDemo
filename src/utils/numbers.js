function firstSignificant(n) {
    return Math.abs(Math.ceil(-Math.log10(n)));
}
function shrinkNumberZeros( amount ){
    if(!amount) return 0;
    let firstSign = firstSignificant(amount);
    let num = amount;
    if( amount > 1 && firstSign > 4 ) num = amount.toFixed(3);
    else num = amount.toFixed(firstSign+3);
    if( num.startsWith('0.000') && firstSign > 4) num = '0.000' + num.replace( num.substr(0, firstSign), '...'); 
    return num;
}
let UtilsNumber = {
    shrinkNumberZeros
}
export default UtilsNumber;