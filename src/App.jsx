import React, { useState } from "react";
import Navbar from "./components/Navbar";
import VideoCard from "./components/VideoCard";
import videosData from "./data/videos";
import "./Home.css";

function App() {
  const [search, setSearch] = useState("");

  const filteredVideos = videosData.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-layout">
      <Navbar />
      <div className="main-content">
        <h1 className="page-title">Top Videos</h1>

        <input
          type="text"
          placeholder="Search videos..."
          aria-label="Search videos"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />

        <div className="video-grid">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;