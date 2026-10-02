function Message({ type, content }) {
  const isUser = type === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={[
          "max-w-[85%] rounded-xl px-3 py-2.5 text-xs leading-5",
          isUser
            ? "rounded-br-sm bg-blue-500 text-white"
            : "rounded-bl-sm border border-white/10 bg-white/[0.04] text-slate-300",
        ].join(" ")}
      >
        {!isUser && (
          <div className="mb-1.5 flex items-center gap-1.5">
            <div className="flex h-4 w-4 items-center justify-center rounded bg-blue-500/10 text-blue-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-2.5 w-2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12m-8.48 8.48-2.12 2.12"
                />
              </svg>
            </div>

            <span className="text-[10px] font-medium text-blue-400">
              VideoChat
            </span>
          </div>
        )}

        <p>{content}</p>
      </div>
    </div>
  );
}

export default Message;
