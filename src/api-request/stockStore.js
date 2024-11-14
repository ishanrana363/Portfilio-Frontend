import { create } from "zustand";
import  axios  from 'axios';

const baseUrl = `https://protfillo-backend.vercel.app/api/v1`;

const stockStore = create((set)=>({
    overflowList: [],
    overflowListApi : async (name,category)=>{
        let res = await axios.get(`${baseUrl}/all-stack`,{params: {name,category}});
        if(res.data.status ==="success"){
            console.log(res);
            set({overflowList : res.data.data});
        } else{
            return false;
        }
    }
}));

export default stockStore;