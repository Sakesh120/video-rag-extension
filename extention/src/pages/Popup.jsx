import Chat from "../components/Chat";
import VideoInfo from "../components/VideoInfo";

function Popup() {
  return (
    <main className="flex h-[600px] w-[380px] flex-col bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-base font-semibold">VideoChat</h1>
            <p className="mt-0.5 text-xs text-slate-400">
              Chat with this YouTube video
            </p>
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h8M8 14h5m7-2a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* Current video */}
      <section className="px-4 pt-3">
        <VideoInfo />
      </section>

      {/* Chat */}
      <section className="min-h-0 flex-1 px-4 py-3">
        <Chat />
      </section>
    </main>
  );
}

export default Popup;
