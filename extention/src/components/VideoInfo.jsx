function VideoInfo() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
          Current Video
        </span>

        <span className="rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-medium text-amber-400">
          Not loaded
        </span>
      </div>

      <div className="flex gap-3">
        {/* Thumbnail placeholder */}
        <div className="flex h-14 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-800">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-6 w-6 text-slate-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m10 8 5 4-5 4V8Z"
            />
            <rect width="18" height="14" x="3" y="5" rx="2" />
          </svg>
        </div>

        {/* Video details */}
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-sm font-medium text-slate-200">
            No YouTube video detected
          </h2>

          <p className="mt-1 text-xs leading-4 text-slate-500">
            Open a YouTube video to start chatting about it.
          </p>
        </div>
      </div>

      {/* Load button */}
      <button
        type="button"
        disabled
        className="mt-3 w-full rounded-lg bg-blue-500 px-3 py-2 text-xs font-medium text-white opacity-50 transition"
      >
        Load Video
      </button>
    </div>
  );
}

export default VideoInfo;
