import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import Messagebox from "../components/utils/messagebox";

export default function Home() {
    return (
        <div className="flex">
            <div className="max-[650px]:hidden">
                <Sidebar />
            </div>
            <div className="h-dvh overflow-auto flex flex-col w-full">
                <Topbar />
                <Messagebox />
            </div>
        </div>
    )
}
