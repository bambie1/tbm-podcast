const apiKey = import.meta.env.YOUTUBE_API_KEY;
const channelId = "UCKaBp_7rRYFuI8cmmnnJOow";
const maxResults = 1;

let videoId;

try {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
  );
  const data = await response.json();

  videoId = data.items?.[0].id.videoId;
} catch (error) {
  console.log(error);
}
