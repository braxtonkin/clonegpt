`use client`;

// src/context/ChatContext.tsx
import { createContext, useContext, useState } from 'react';

interface ChatMessage {
  id: string;
  user: 'human' | 'bot';
  message: string;
}

interface ChatContextProps {
  chatMessages: Map<string, ChatMessage[]>;
  updateMessages: (id: string, message: ChatMessage) => void;
  addEmptyId: () => string;
}

const ChatContext = createContext<ChatContextProps>({
  chatMessages: new Map(),
  updateMessages: () => {},
  addEmptyId: () => '',
});

export const useChatContext = () => useContext(ChatContext);

interface ChatProviderProps {
  children: React.ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [chatMessages, setChatMessages] = useState<Map<string, ChatMessage[]>>(new Map());

  const updateMessages = (id: string, message: ChatMessage) => {
    setChatMessages((prevMap) => {
      const updatedMap = new Map(prevMap);
      const existingMessages = updatedMap.get(id) || [];
      updatedMap.set(id, [...existingMessages, message]);
      return updatedMap;
    });
  };

  const addEmptyId = () => {
    const newId = String(chatMessages.size + 1);

    setChatMessages((prevMap) => {
      const updatedMap = new Map(prevMap);
      updatedMap.set(newId, []);
      return updatedMap;
    });

    return newId;
  };

  return (
    <ChatContext.Provider value={{ chatMessages, updateMessages, addEmptyId }}>
      {children}
    </ChatContext.Provider>
  );
};