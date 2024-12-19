import { useState } from "react";
import Setting from "./modals/setting.modal";
import Users from "./modals/users.modal";



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
            name: 'new chat',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="#1C274C" stroke-width="1.5" />
                <path opacity="0.5" d="M8 12H8.009M11.991 12H12M15.991 12H16" stroke="#1C274C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
                className={`w-full h-dvh border-r bg-white space-y-8 max-[650px]:w-dvw md:w-52 xl:w-80  `}>
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
                                        <a href={item.href} className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg capitalize  hover:bg-gray-50 active:bg-gray-100 duration-150">
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
                                    modals.settingToggle && <Setting onClose={handleSettingToggle} />
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