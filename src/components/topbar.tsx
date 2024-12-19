import { useState } from "react";
import ChatOptions from "./modals/chat.option";

export default function Topbar() {
    const [toggle, setToggle] = useState(false);

    const toggleShow = () => {
        setToggle(!toggle)
    }
    return (
        <nav className="h-[10dvh] border-b w-full p-4  sm:px-8 flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <span className="hidden max-[650px]:block ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>

                </span>
                <h2 className="sm:text-xl font-semibold capitalize text-gray-700/50">Surendra Upreti</h2>
            </div>
            <div className="flex gap-4 sm:gap-10 items-center">
                <div className="h-8 w-8 sm:w-12 sm:h-12 bg-slate-100 rounded-full">
                    <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="user" />
                </div>
                <div className="relative" onClick={toggleShow}>
                    <button>
                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 12H18.01M12 12H12.01M6 12H6.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12ZM7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    {
                        toggle && <ChatOptions />
                    }
                </div>
            </div>
        </nav>
    )
}
