type ChatbubbleProps = {
    idx: number;
};
export default function Chatbubble({ idx }: ChatbubbleProps) {
    return (
        <div className={`flex   items-start gap-2.5 my-4 ${idx % 2 === 0 ? "flex-row-reverse" : ""}`}>
            <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="user" className="w-8 h-8 rounded-full hidden sm:block" />
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl ">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 ">Bonnie Green</span>
                    <span className="text-sm font-normal text-gray-500 ">11:46</span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 ">That's awesome. I think our users will really appreciate the improvements.</p>
            </div>
            <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none" type="button">
                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
            </button>
            <div id="dropdownDots" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 ">
                <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownMenuIconButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Reply</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Forward</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Copy</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Report</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Delete</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
