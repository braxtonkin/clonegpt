// Message.tsx
interface MessageProps {
  message: string;
  user: string;
}

export default function Message({ message, user }: MessageProps) {
  return (
    <div className={`py-5 text-black flex ${user === "bot" ? "justify-end" : "justify-start"}`}>
          <div className={`flex space-x-2.5 sm:space-x-5 sm:px-10 ${user === "bot" ? "flex-row-reverse gap-6" : ""}`}>
              <div className=" bg-white/50 border border-gray-200 w-9 h-9 rounded-full overflow-hidden text-center text-xl">
                  {user === "bot" ? "👾" : "👤"}
              </div>
              <div className={`flex flex-col max-w-md ${user === "bot" ? "items-start" : "items-end"}`}>
                  <p className={`${user === "bot" ? "bg-purple-200" : "bg-blue-100"} px-4 py-2 rounded-lg shadow-sm text-base font-medium tracking-wide whitespace-pre-wrap`}>
                      {message}
                  </p>
              </div>
          </div>
      </div>
  );
}