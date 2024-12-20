import { FormEvent, useState } from "react"
import useLogin from "../../hooks/useLogin";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }
    const { loading, userLogin } = useLogin();

    const handleLogin = async () => { await userLogin(formData) }

    return (
        <div className="h-dvh flex justify-center items-center">
            <div className="max-w-md relative flex flex-col px-10 rounded-md text-black bg-white border p-8">
                <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span className="text-[#7747ff]">App</span></div>
                <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
                <form className="flex flex-col gap-3" onSubmit={(e: FormEvent) => { e.preventDefault(); handleLogin() }}>
                    <div className="block relative">
                        <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
                        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />

                    </div>
                    <div className="block relative">
                        <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
                        <input type="password" id="password" name="password" onChange={handleChange} value={formData.password} className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />

                    </div>
                    <div>
                        <a className="text-sm text-[#7747ff]" href="#">Forgot your password?
                        </a></div>
                    <button type="submit" className="bg-[#7747ff] w-full m-auto px-6 py-2 rounded text-white text-sm font-normal" >{loading ? "verifying.." : "Submit"}</button>

                </form>
                <div className="text-sm text-center mt-[1.6rem]">Don&apos;t have an account yet? <a className="text-sm text-[#7747ff]" href="#">Sign up for free!</a></div>
            </div>
        </div>
    )
}
