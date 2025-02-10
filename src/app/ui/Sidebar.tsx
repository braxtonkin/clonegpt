import { useChatContext } from '@/app/context/ChatContext';
import NewChat from './NewChat';
import ChatRow from './ChatRow';

export default function Sidebar() {
  const { chatMessages } = useChatContext();

  return (
    <div className="hidden sm:flex flex-col h-screen relative p-2.5">
      <div className="flex items-center gap-5">
        <NewChat />
      </div>
      <div className="mt-4 overflow-y-scroll h-[80%]">
        {Array.from(chatMessages.entries()).map(([id]) => (
          <ChatRow key={id} id={id} />
        ))}
      </div>
    </div>
  );
}