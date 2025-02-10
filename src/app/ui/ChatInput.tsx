'use client';

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useChatContext } from '@/app/context/ChatContext';

export default function ChatInput({id} : {id :string}) {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const {chatMessages, updateMessages, addEmptyId} = useChatContext();
    const router = useRouter();
    
    const pathname = usePathname();

    const sendMessageAndReroute = async (e: React.FormEvent) => {
        const newPageId = reroute();
        sendMessage(e, newPageId);
    };

    const reroute = (): string => {
        if (pathname !== '/') {
            return "";
        }

        const id = addEmptyId();
        router.push(`/chat/${id}`)

        return id;
    };

    const sendMessage = async (e: React.FormEvent, newPageId: string) => {
        e.preventDefault();

        if (newPageId !== "") {
            id = newPageId;
        }

        const input = prompt.trim();
        console.log('Input:', input);
        if (!input) return;


        const payload = {
            model: "llama2",
            prompt: input,
            stream: false
        }

        try {
            setLoading(true);
            let humanId = (chatMessages.get(id)?.length || 0).toString();
            updateMessages(id, {
                id: humanId,
                user: 'human',
                message: prompt
            });
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
                    // Add the message using updateMessages

            
            const data = await response.json();
            const botId = humanId + 1;
            
            updateMessages(id, 
                {id: botId,
                user: 'bot',
                message: data.response.replace(/^\n+/, '')});
            console.log('Response:', data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
            setPrompt('');
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center mx-auto px-4 pt-3">
            <form onSubmit={sendMessageAndReroute} className="bg-white/50 rounded-full items-center flex px-8 py-3 w-full max-w-3xl disabled:opacity-50">
                <input 
                type="text"
                disabled={loading}
                placeholder="Type a message" 
                className="bg-transparent text-black/70 outline-none w-full tracking-wide"
                onChange={(e)=>setPrompt(e.target.value)}
                value={prompt}/>
                <button
                type="submit" 
                disabled={!prompt || loading} 
                className=" ml-4 p-2 rounded-full bg-purple-500 text-purple-500 disabled:bg-purple-500/50 disabled:text-purple-500/50 duration-200"> 
                
                </button>
            </form>
        </div>
    )
  }
  