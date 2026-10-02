import { useState } from "react";

function InputBox() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!message.trim()) {
      return;
    }

    // RAG API integration will be added later.
    console.log("Question:", message);

    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <div className="relative min-w-0 flex-1">
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Ask about the video..."
          rows={1}
          className="block max-h-24 min-h-9 w-full resize-none rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 pr-3 text-xs leading-5 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-blue-500/40 focus:bg-white/[0.06]"
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              event.currentTarget.form?.requestSubmit();
            }
          }}
        />
      </div>

      <button
        type="submit"
        disabled={!message.trim()}
        aria-label="Send message"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500 text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5 12 14-7-4 14-3-6-7-1Z"
          />
        </svg>
      </button>
    </form>
  );
}

export default InputBox;
