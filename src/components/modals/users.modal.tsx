import { useAppContext } from "../../context/appcontext"

export default function Users({ onClose }: { onClose: () => void }) {
    const { toggleSidebar, setToggleSidebar } = useAppContext()
    return (
        <div className="fixed inset-0 h-screen w-screen bg-black/50 flex z-[50] justify-center items-center py-20 ">
            <div className="bg-white w-full mx-4 md:w-[50%] min-h-[50dvh] p-4 md:p-8 rounded-sm max-h-[90dvh] overflow-auto">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold capitalize">select user to chat</h2>
                    <button onClick={onClose}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F" />
                        </svg>
                    </button>
                </div>
                <ul className="my-5">
                    {
                        [...Array(10)].map(
                            (key) => {
                                return (
                                    <li onClick={() => { setToggleSidebar(!toggleSidebar); onClose }} key={key} className="flex justify-between gap-5 sm:gap-10 items-center border-b py-4 hover:bg-slate-100 cursor-pointer px-2">
                                        <div className="flex gap-4 items-center">
                                            <div className="h-10 w-10 md:h-16 md:w-16 bg-slate-100 overflow-hidden rounded-full flex justify-center items-center">
                                                <img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" width={'200px'} className="" alt="user avatar" />
                                            </div>
                                            <div className="">
                                                <h2 className="sm:text-xl font-semibold capitalize">Surendra Upreti</h2>
                                                <p className="max-[640px]:text-sm">@surendra9812</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-5 items-center">
                                            <div className="flex h-4 w-4 bg-green-500 rounded-full "></div>
                                            <div className="hidden sm:flex">
                                                <h2>online</h2>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
