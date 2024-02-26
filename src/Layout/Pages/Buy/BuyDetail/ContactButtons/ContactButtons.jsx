import React from 'react';
import './ContactButton.css'


// import { ReactComponent as SmsIcon } from '../../../../../assets/icons/home/message.svg';

import  SmsIcon from '../../../../../assets/icons/home/sms_white.svg'
import whatsappIcon from '../../../../../assets/icons/home/wapp.svg'
import { FaPhone, FaPhoneAlt } from 'react-icons/fa';

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
            <button onClick={()=>handlePhoneCall(phone)} className=' btn bg-[#F36150] border-0 text-white'> <FaPhoneAlt className='text-[18px]' /> Call</button>  
            <button onClick={()=>handleWhatsAppCall(wapp)} className=' btn bg-[#25D569] text-white border-0'><img className='w-[30px] ' src={whatsappIcon} alt="" />Whatsapp</button>  
            <button onClick={()=>handleSendSMS(phone)} className=' btn bg-[#2196F5] border-0 text-white'><img className='w-[20px] sms-icon '  src={SmsIcon} alt="" />SMS</button>  
           
      </div>
    );
};

export default ContactButtons;