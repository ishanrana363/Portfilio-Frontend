import axios from "axios";
import { create } from "zustand";
const baseUrl = `https://protfillo-backend.vercel.app/api/v1`;

const projectStore = create((set)=>({
    projectDataList : [],
    projectDataListApi : async ()=>{
        let res = await axios.get(`${baseUrl}/all-projects`);
        if(res.data.status ==="success"){
            set({projectDataList : res.data.data});
        } else{
            return false;
        }
        
    }
}));


export default projectStore;