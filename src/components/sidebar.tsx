import { useState } from "react";
import Setting from "./modals/setting.modal";
import Users from "./modals/users.modal";
// import { Link } from "react-router-dom";
// import Logout from "./modals/logout.modal";


const Sidebar = () => {
    const [modals, setModals] = useState({
        settingToggle: false,
        friendsToggle: false
    });


    const handleFriendsToggle = () => {
        setModals((prevData) => ({ ...prevData, friendsToggle: !prevData.friendsToggle }))
    }
    const handleSettingToggle = () => {
        setModals((prevData) => ({ ...prevData, settingToggle: !prevData.settingToggle }))
    }


    const users = [
        {
            href: '#',
            name: 'Friends',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1992 12C12.9606 12 15.1992 9.76142 15.1992 7C15.1992 4.23858 12.9606 2 10.1992 2C7.43779 2 5.19922 4.23858 5.19922 7C5.19922 9.76142 7.43779 12 10.1992 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1 22C1.57038 20.0332 2.74795 18.2971 4.36438 17.0399C5.98081 15.7827 7.95335 15.0687 10 15C14.12 15 17.63 17.91 19 22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.8205 4.44006C18.5822 4.83059 19.1986 5.45518 19.579 6.22205C19.9594 6.98891 20.0838 7.85753 19.9338 8.70032C19.7838 9.5431 19.3674 10.3155 18.7458 10.9041C18.1243 11.4926 17.3302 11.8662 16.4805 11.97" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.3203 14.5701C18.6543 14.91 19.8779 15.5883 20.8729 16.5396C21.868 17.4908 22.6007 18.6827 23.0003 20" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            ,
        }
    ]

    const navsFooter = [
        {
            href: '/',
            name: 'Help',
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
            ,
            clickHandler: () => { alert("clicked") }
        },
        {
            href: '/setting',
            name: 'Settings',
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ,
            clickHandler: handleSettingToggle
        },
        {
            href: '/auth',
            name: 'Logout',
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
            ,
            clickHandler: () => { alert("clicked") }

        }
    ]

    return (
        <>
            <nav
                className=" w-full h-dvh border-r bg-white space-y-8 md:w-52 xl:w-80">
                <div className="flex flex-col h-full">
                    <div className='mb-5 flex items-center px-4 border-b h-[10dvh]'>
                        <a href='javascript:void(0)' className='flex-none '>
                            <h2 className=" text-3xl font-bold flex gap-2 items-center">
                                <span className="text-purple-700 font-serif">Chattter</span>
                            </h2>
                        </a>
                    </div>
                    <div className="  px-4">
                        <input type="search" enterKeyHint="search" className="border w-full px-2 py-1 rounded-sm text-lg" placeholder="search user " name="" id="" />
                    </div>
                    <div className="flex-1 flex flex-col h-full  mt-5">
                        <ul className="px-4 text-sm font-medium flex-1">
                            {
                                users.map((item, idx) => (
                                    <li key={idx} onClick={handleFriendsToggle}>
                                        <a href={item.href} className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150">
                                            <div className="text-gray-500">{item.icon}</div>
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <div>
                            <ul className="px-4 pb-4 text-sm font-medium relative">
                                {
                                    navsFooter.map((item, idx) => (
                                        <li key={idx} onClick={item.clickHandler} className="cursor-pointer">
                                            <div className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150">
                                                <div className="text-gray-500">{item.icon}</div>
                                                {item.name}
                                            </div>
                                        </li>
                                    ))
                                }
                                {
                                    modals.settingToggle && <Setting />
                                }
                            </ul>
                            <div className="py-4 px-4 border-t h-[10dvh]">
                                <div className="flex items-center gap-x-4">
                                    <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-12 h-12 rounded-full" />
                                    <div>
                                        <span className="block text-gray-700 text-sm font-semibold">Alivika tony</span>
                                        <button className="block mt-px text-gray-600 hover:text-indigo-600 text-xs">
                                            View profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </nav>
            {
                modals.friendsToggle && (<Users onClose={handleFriendsToggle} />)
            }
            {/* <Logout /> */}
        </>
    );
};

export default Sidebar;