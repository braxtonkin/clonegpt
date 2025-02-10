'use client';

import { useRouter } from "next/navigation";
import { useChatContext } from "@/app/context/ChatContext";


export default function NewChat() {
    const { addEmptyId } = useChatContext();
    const router = useRouter();
    const createNewChat = () => {
        const id = addEmptyId();
        router.push(`/chat/${id}`)
        
    }
    return (
      <button
      onClick={createNewChat} 
      className="flex items-center justify-center gap-2 border border-white/20 text-xs md:text-base px-2 py-1 rounded-md text-white/90 
                         hover:text-white hover:border-white/50 duration-300 w-full">
        Add New Chat
      </button>
    )
  }