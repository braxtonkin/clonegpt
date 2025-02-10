import Image from "next/image";
import ChatInput from "./ui/ChatInput";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-2">
      <div className="mx-auto flex flex-col items-center gap-5 w-full ">
        <h2 className="text-xl md:text-4xl font-semibold text-purple-950"> AlienGPT 👾 </h2>
        <ChatInput id={""}/>
      </div>
    </main>
  );
}
