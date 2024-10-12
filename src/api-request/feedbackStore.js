import axios from "axios";
import { create } from "zustand";
const baseUrl = `https://protfillo-backend.vercel.app/api/v1`;

const feedbackStore = create((set) => ({
    feedbackList: [],
    feedbackListApi: async () => {
        let res = await axios.get(`${baseUrl}/all-feedback`);
        if (res.data.status === "success") {
            set({ feedbackList: res.data.data });
        } else {
            return false;
        }
    },

}));

export default feedbackStore;
