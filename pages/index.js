import { useState } from "react";
import { useRouter } from "next/router";
import VideoPlayer from "../src/components/VideoPlayer";


import NewsDb from "../src/data/newsDb.json";

export default function Home() {
  const router = useRouter();


  const [videoIndex, setVideoIndex] = useState(0);
  const [newsDb, setVideoData] = useState(NewsDb.items);

  const playNext = () => {
    setVideoIndex((prevIndex) => prevIndex + 1);

    const nextVideoId = newsDb[videoIndex + 1].id.videoId;
    const nextVideoTitle = newsDb[videoIndex + 1].snippet.title;

    router.push(`/news/${nextVideoId}`);
  };

  const playPrev = () => {
    setVideoIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <>
      <div className="wrapper">
        <div className="player">
          <VideoPlayer
            videoId={newsDb[videoIndex].id.videoId}
            onEnd={playNext}
          />
          <button onClick={playPrev} disabled={videoIndex === 0}>
            Prev
          </button>
          <button onClick={playNext}>Next Video</button>
        </div>
      </div>
    </>
  );
}
