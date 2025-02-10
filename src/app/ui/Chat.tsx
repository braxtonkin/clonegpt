'use client';

import Message from "./Message";
import { useChatContext } from '@/app/context/ChatContext';

export default function Chat({ id }: { id: string }) {
    const { chatMessages } = useChatContext();
    let messages = chatMessages.get(id) || [];
    return (
        <div className="max-w-3xl mx-auto">
            {messages.map((message) => (
                <div key={message.id}>
                    <Message 
                        message={message.message}
                        user={message.user}
                    />
                </div>
            ))}
        </div>
    );
}
