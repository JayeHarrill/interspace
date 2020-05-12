import React from "react";

function HubsRoomInstance({width, height, roomData}) {
  return (
    <iframe
      title="Hubs Room"
      src={`https://hubs.mozilla.com/${roomData.roomId}?embed_token=${roomData.embedToken}`}
      // style="width: 1024px; height: 768px;"
      allow="microphone; camera; vr; speaker;"
      width={width}
      height={height}
      allowFullScreen>
      //frameBorder="0"
      //allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    </iframe>
  );
}

export default HubsRoomInstance;
