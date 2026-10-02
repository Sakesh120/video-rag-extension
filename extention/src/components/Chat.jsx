import Message from "./Message";
import InputBox from "./InputBox";

function Chat() {
  return (
    <div className="flex h-full min-h-0 flex-col rounded-xl border border-white/10 bg-white/[0.02]">
      {/* Chat header */}
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2.5">
        <div>
          <h2 className="text-xs font-medium text-slate-200">Conversation</h2>
          <p className="mt-0.5 text-[10px] text-slate-500">
            Ask questions about the video
          </p>
        </div>

        <span className="flex items-center gap-1.5 text-[10px] text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
          Ready
        </span>
      </div>

      {/* Messages */}
      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-3">
        <Message
          type="assistant"
          content="Hi! Load a YouTube video and ask me anything about its content."
        />
      </div>

      {/* Input */}
      <div className="border-t border-white/10 p-3">
        <InputBox />
      </div>
    </div>
  );
}

export default Chat;
