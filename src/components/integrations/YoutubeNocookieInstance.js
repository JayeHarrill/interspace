import React from "react";

function YoutubeNocookieInstance({width, height, roomData}) {
  return (
    <iframe
      title="Youtube Livestream"
      width={width}
      height={height}
      src={`https://www.youtube-nocookie.com/embed/${roomData.videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default YoutubeNocookieInstance;
