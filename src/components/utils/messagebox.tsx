import { useRef } from "react";
import Chatbubble from "./chatbubble";
import SendMessage from "./sendMessage";

export default function Messagebox() {
    // Ref to the message container
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="h-[90dvh]">
            <div className="h-[78dvh] md:h-[80dvh] p-4 px-8 box-border overflow-auto">
                {[...Array(10)].map((data, key) => {
                    console.log(data)
                    return <Chatbubble key={key} idx={key} />;
                })}
                {/* Element to mark the end of the messages */}
                <div ref={messagesEndRef} />
            </div>
            <SendMessage />
        </div>
    );
}
