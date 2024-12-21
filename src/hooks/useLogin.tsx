import { useState } from "react";
import { useAppContext } from "../context/appcontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
    const [loading, setLoading] = useState(false);
    const { setLoggedIn } = useAppContext();
    const navigate = useNavigate();

    // Utility function to validate email format
    const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

    async function userLogin({ email, password }: { email: string, password: string }) {
        try {
            setLoading(true);

            // Input validation
            if (!email || !password) {
                toast.error("Fill both email and password fields");
                return;
            }

            if (!isValidEmail(email)) {
                toast.error("Invalid email format");
                return;
            }

            // API Request
            const req = await fetch("https://chat-server-v2.vercel.app/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
                },
                body: JSON.stringify({ email, password }),
                credentials: "include", // Include this only if required
            });

            if (!req.ok) {
                // If the response status is not OK, throw an error
                throw new Error(`HTTP error! Status: ${req.status}`);
            }

            const res = await req.json();

            // Handle response
            if (res.success) {
                setLoggedIn(true);
                toast.success("Logged in");
                localStorage.setItem('userAuthenticated', JSON.stringify(res._user));
                navigate("/");
                return;
            }

            toast.error(res.message || "Login failed");
        } catch (err: unknown) {
            if (err instanceof Error) {
                toast.error(`Error: ${err.message}`);
            } else {
                toast.error("An unknown error occurred");
            }
        } finally {
            setLoading(false); // Ensure loading is reset
        }
    }

    return { loading, userLogin };
}
