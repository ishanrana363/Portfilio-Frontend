import axios from "axios";
import { create } from "zustand";
const baseUrl = `https://protfillo-backend.vercel.app/api/v1`;

const skillStore = create((set)=>({
    allSkillData : [],
    allSkillDataApi : async ()=>{
        let res = await axios.get(`${baseUrl}/all-skill`);
        if(res.data.status ==="success"){
            set({allSkillData : res.data.data});
        }else{
            return false;
        }
    }
}));

export default skillStore