import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginPage() {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const setToken = (res) => {
        localStorage.setItem("token", res.data.token)
    };
    const setRole = (res) => {
        localStorage.setItem("role", res.data.role)
    }
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const payload = {
            email, password
        };
        try {
            setLoading(true)
            const res = await axios.post(`https://protfillo-backend.vercel.app/api/v1/login`, payload);
            console.log(res)
            setLoading(false)
            if (res.data.role === "admin") {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: `${res.data.role} login successfully`
                });
                navigate("/admin-dashboard");
                setToken(res);
                setRole(res)
                e.target.reset();
                return;
            } else {
                setRole(res)
                navigate("/");
                e.target.reset();
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: `${res.data.role} login successfully`
                });
                return;
            }
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-2xl shadow-lg w-96"
            >
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
                <div className="mb-4 relative">
                    <label className="block text-gray-700 font-medium">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <span
                        className="absolute right-3 top-9 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 flex justify-center items-center"
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Login"}
                </button>
            </form>
            <Toaster position="top-center" ></Toaster>
        </div>
    );
}
