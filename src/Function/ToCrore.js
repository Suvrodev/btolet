// const numberToWord=(number)=>{
//     if (number < 1000) {
//         let result = number.toFixed(2);
//         return result.endsWith('.00') ? result.slice(0, -3) : result;
//     } else if (number < 100000) {
//         let result = (number / 1000).toFixed(2);
//         return result.endsWith('.00') ? result.slice(0, -3) + " Thousand" : result + " thousand";
//     } else if (number < 10000000) {
//         let result = (number / 100000).toFixed(2);
//         return result.endsWith('.00') ? result.slice(0, -3) + " Lakh" : result + " lakh";
//     } else if (number < 1000000000) {
//         let result = (number / 10000000).toFixed(2);
//         return result.endsWith('.00') ? result.slice(0, -3) + " Crore" : result + " crore";
//     } else if (number < 100000000000) {
//         let result = (number / 1000000000).toFixed(2);
//         return result.endsWith('.00') ? result.slice(0, -3) + " billion" : result + " billion";
//     } else {
//         return "Number out of range";
//     }
// }
const numberToWord=(amount)=>{
   
    let formattedAmount;
    if (Math.abs(amount) >= 10000000) {
        formattedAmount = (amount / 10000000).toFixed(2) + ' Crore';
    } else if (Math.abs(amount) >= 100000) {
        formattedAmount = (amount / 100000).toFixed(2) + ' Lakh';
    } else if (Math.abs(amount) >= 1000) {
        formattedAmount = (amount / 1000).toFixed(2) + 'K';
    } else {
        formattedAmount = amount.toFixed(2);
    }
    formattedAmount = formattedAmount.replace(/\.00/g, '');
    return formattedAmount;
    
}

export default numberToWord