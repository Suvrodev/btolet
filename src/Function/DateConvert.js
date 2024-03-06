const convertDate=(textDate)=>{
    const inputDate = new Date(textDate);
    const formattedDate = `${inputDate.getDate()} ${inputDate.toLocaleString('default', { month: 'short' })}`;
    return formattedDate
}
export default convertDate;