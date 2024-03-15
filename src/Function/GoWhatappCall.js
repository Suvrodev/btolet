const handleWhatsAppCall=(wapp)=>{
    const text=`Hey there👋! I saw your sweet listing on btolet - is it still up for sale? I'm super interested. 😊 Please let me know what you think.`;
    const encodedText = encodeURIComponent(text);
    // window.location.href = `whatsapp://send?phone=${wapp}`;
    window.location.href = `whatsapp://send?phone=${wapp}&text=${encodedText}`;

    // const text = "Hey there! I saw your sweet listing on btolet - is it still up for sale? I'm super interested. Please let me know what you think.";
    // const encodedText = encodeURIComponent(text);
    // window.open(`https://wa.me/${wapp}?text=${encodedText}`, '_blank');

    
}
export default handleWhatsAppCall;