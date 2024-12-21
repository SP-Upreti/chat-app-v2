import { useState } from "react";
import { useAppContext } from "../context/appcontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
    const [loading, setLoading] = useState(false);
    const { setLoggedIn, loggedIn } = useAppContext();
    const navigate = useNavigate();

    async function userLogin({ email, password }: { email: String, password: String }) {
        try {
            setLoading(true);
            if (!email || !password) {
                toast.error("Fill both email and password field")
            }
            const req = await fetch("https://chat-server-v2.vercel.app/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
                credentials: "include"
            });
            const res = await req.json();
            if (res.success) {
                setLoggedIn(true);
                toast.success("Logged in");
                localStorage.setItem('userAuthenticated', res._user)
                navigate("/")
                return
            }
            toast.error(res.message)

        }
        catch (err) {
            toast.error("Use Login Error")
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }
    console.log(loggedIn)
    return { loading, userLogin }
}