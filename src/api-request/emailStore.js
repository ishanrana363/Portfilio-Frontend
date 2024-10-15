import axios from "axios";
import { create } from "zustand";
const baseUrl = `https://protfillo-backend.vercel.app/api/v1`;


const emailStore = create((set)=>({
    sendEmailApi : async (payload)=>{
        let res = await axios.post(`${baseUrl}/send/email`, payload);
        if(res.data.status ==="success"){
            return true;
        } else{
            return false;
        }
    },
}));

export default emailStore;