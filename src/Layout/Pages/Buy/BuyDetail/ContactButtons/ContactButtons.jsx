import React from 'react';

const ContactButtons = ({phone,wapp}) => {

    const handlePhoneCall=(phone)=>{
        window.location.href = `tel:${phone}`;
    }

    const handleWhatsAppCall=(wapp)=>{
        window.location.href = `whatsapp://send?phone=${wapp}`;
    }

    const handleSendSMS=(phone)=>{
        // window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent("message")}`;
        console.log('SMS');
    }

    return (
        <div className=' flex gap-4 items-center'>
            <button onClick={()=>handlePhoneCall(phone)} className=' btn btn-warning'>Call</button>  
            <button onClick={()=>handleWhatsAppCall(wapp)} className=' btn btn-success'>Whatsapp</button>  
            <button onClick={()=>handleSendSMS(phone)} className=' btn btn-success'>Message</button>  
      </div>
    );
};

export default ContactButtons;