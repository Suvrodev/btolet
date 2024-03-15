const handleSendSMS=(phone)=>{
    const message=`Hey there👋! I saw your sweet listing on btolet App(btolet.com) - is it still up for Rent? I'm super interested. 😊 Please let me know what you think`
    const encodedMessage = encodeURIComponent(message);

    window.location.href = `sms:${phone}`;
}

export default handleSendSMS;