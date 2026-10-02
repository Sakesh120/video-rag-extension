const API_BASE_URL = "http://localhost:5000/api";

/**
 * Send a question about the current video to the backend.
 *
 * @param {string} videoId
 * @param {string} question
 * @returns {Promise<Object>}
 */
export async function askQuestion(videoId, question) {
  const response = await fetch(`${API_BASE_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      videoId,
      question,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to get response from the server.");
  }

  return response.json();
}

/**
 * Load/process a YouTube video on the backend.
 *
 * @param {string} videoId
 * @returns {Promise<Object>}
 */
export async function loadVideo(videoId) {
  const response = await fetch(`${API_BASE_URL}/video/load`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      videoId,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to load the video.");
  }

  return response.json();
}
