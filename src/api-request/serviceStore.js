
import axios from "axios";
import { create } from "zustand";
const baseUrl = `https://protfillo-backend.vercel.app/api/v1`;


const serviceStore = create((set)=>({
    serviceDataList : [],
    serviceDataListApi : async ()=>{
        let res = await axios.get(`${baseUrl}/all-service`);
        if(res.data.status ==="success"){
            set({serviceDataList : res.data.data});
        } else{
            return false;
        }
    },
}));

export default serviceStore;