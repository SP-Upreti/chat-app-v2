import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import Messagebox from "../components/utils/messagebox";
import { useAppContext } from "../context/appcontext";

export default function Home() {
    const { toggleSidebar } = useAppContext();
    console.log("sidebar", toggleSidebar)
    return (
        <div className="flex w-screen overflow-hidden">
            <div className={` ${toggleSidebar ? "max-[650px]:block fixed sm:relative inset-0 w-dvw sm:w-auto z-[99]" : "max-[650px]:hidden"}`}>
                <Sidebar />
            </div>
            <div className="h-dvh overflow-auto flex flex-col w-full">
                <Topbar />
                <Messagebox />
            </div>
        </div>
    )
}
