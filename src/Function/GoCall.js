import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Modal from "../Layout/Pages/Home/Rent/Rent/Modal/Modal";

// const {currentUser} = useContext(AuthContext);


const handlePhoneCall=(phone)=>{
    
    window.location.href = `tel:${phone}`;
}
export default handlePhoneCall