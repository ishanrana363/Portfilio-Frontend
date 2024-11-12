import axios from "axios";
import { create } from "zustand";
const baseUrl = `https://protfillo-backend.vercel.app/api/v1`;

const logoStore = create((set) => ({
    logoList: [],
    logoListApi: async () => {
        let res = await axios.get(`${baseUrl}/all-logo`);
        if (res.data.status === "success") {
            set({ logoList: res.data.data });
        } else {
            return false;
        }
    },

}));

export default logoStore;
