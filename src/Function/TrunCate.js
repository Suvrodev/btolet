
function trunCateWord(str, num) {
   
    if (str.length <= num) {
      return str;
    }
    const characters = str.split('');
    const truncatedString = characters.slice(0, num).join('');
    return truncatedString + '...';
  }
  
  export default trunCateWord
  
  