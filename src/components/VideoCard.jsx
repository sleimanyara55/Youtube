import React from "react";
import "./VideoCard.css";

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <a href="#">
        <img
          src={video.thumbnail}
          alt={`Thumbnail for ${video.title}`}
          className="thumbnail"
        />
      </a>
      <div className="video-info">
        <h4 className="video-title">{video.title}</h4>
        <p className="video-channel">{video.channel}</p>
        <p className="video-stats">
          {video.views} • {video.date}
        </p>
      </div>
    </div>
  );
}

export default VideoCard;