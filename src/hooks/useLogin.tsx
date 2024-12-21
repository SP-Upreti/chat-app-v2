import { useState } from "react";
import { useAppContext } from "../context/appcontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
    const [loading, setLoading] = useState(false);
    const { setLoggedIn } = useAppContext();
    const navigate = useNavigate();

    async function userLogin({ email, password }: { email: string, password: string }) {
        try {
            setLoading(true);

            // Input validation
            if (!email || !password) {
                toast.error("Fill both email and password fields");
                return;
            }

            // API Request
            const req = await fetch("https://chat-server-v2.vercel.app/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
                credentials: "include"
            });
            const res = await req.json();

            // Handle response
            if (res.success) {
                setLoggedIn(true);
                toast.success("Logged in");
                localStorage.setItem('userAuthenticated', JSON.stringify(res._user));
                navigate("/");
                return;
            }
            toast.error(res.message);
        } catch (err) {
            toast.error("Login Error");
        } finally {
            setLoading(false); // Ensure loading is reset
        }
    }

    return { loading, userLogin };
}
