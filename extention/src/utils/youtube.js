export function extractVideoId(url) {
  if (!url) {
    return null;
  }

  try {
    const parsedUrl = new URL(url);

    // Standard YouTube URL:
    // https://www.youtube.com/watch?v=VIDEO_ID
    if (
      parsedUrl.hostname === "www.youtube.com" ||
      parsedUrl.hostname === "youtube.com"
    ) {
      return parsedUrl.searchParams.get("v");
    }

    // Short YouTube URL:
    // https://youtu.be/VIDEO_ID
    if (parsedUrl.hostname === "youtu.be") {
      const videoId = parsedUrl.pathname.slice(1);

      return videoId || null;
    }

    return null;
  } catch {
    return null;
  }
}
