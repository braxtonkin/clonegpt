import Chat from "@/app/ui/Chat";
import ChatInput from "@/app/ui/ChatInput";

export default async function ChatPage({params:{id}}: {params: {id: string}}) {
    return (
      <div className = "flex flex-col justify-center h-[100%] p-10 overflow-hidden">
        <div className="flex-1 overflow-y-scroll pt-10 md:pt-5"> 
          <Chat id={id}/>
           </div>
        <ChatInput id={id} />
      </div>
    )
  }
  