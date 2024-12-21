import { useState } from "react";
import { toast } from "react-toastify";

export default function useGetuser() {
    const [loading, setLoading] = useState(false);
    const [users, setUSers] = useState([]);
    // const { setLoggedIn, loggedIn } = useAppContext();

    async function getUsers({ email, password }: { email: String, password: String }) {
        try {
            setLoading(true);
            if (!email || !password) {
                toast.error("Fill both email and password field")
            }
            const req = await fetch("https://chat-server-v2.vercel.app/user", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            });
            const res = await req.json();
            if (res.success) {
                // setLoggedIn(true);
                // toast.success("Logged in");
                setUSers(res)
                console.log(res)
                // localStorage.setItem('userAuthenticated', res._user)
                return
            }
            toast.error(res.message)

        }
        catch (err) {
            toast.error("Use Login Error")
            console.log(err)
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, getUsers, users }
}