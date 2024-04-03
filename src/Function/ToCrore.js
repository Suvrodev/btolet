const numberToWord=(number)=>{
    if (number < 1000) {
        let result = number.toFixed(2);
        return result.endsWith('.00') ? result.slice(0, -3) : result;
    } else if (number < 100000) {
        let result = (number / 1000).toFixed(2);
        return result.endsWith('.00') ? result.slice(0, -3) + " Thousand" : result + " thousand";
    } else if (number < 10000000) {
        let result = (number / 100000).toFixed(2);
        return result.endsWith('.00') ? result.slice(0, -3) + " Lakh" : result + " lakh";
    } else if (number < 1000000000) {
        let result = (number / 10000000).toFixed(2);
        return result.endsWith('.00') ? result.slice(0, -3) + " Crore" : result + " crore";
    } else if (number < 100000000000) {
        let result = (number / 1000000000).toFixed(2);
        return result.endsWith('.00') ? result.slice(0, -3) + " billion" : result + " billion";
    } else {
        return "Number out of range";
    }
}

export default numberToWord