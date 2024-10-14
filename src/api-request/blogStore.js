import axios from "axios";
import { create } from "zustand";
const baseUrl = `https://protfillo-backend.vercel.app/api/v1`;

const blogStore = create((set) => ({
    blogList: [],
    blogListApi: async () => {
        let res = await axios.get(`${baseUrl}/all-blog`);
        if (res.data.status === "success") {
            set({ blogList: res.data.data });
        } else {
            return false;
        }
    },

}));

export default blogStore;
