import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import VideoPlayer from '../../src/components/VideoPlayer';

import NewsDb from "../../src/data/newsDb.json";

export default function Video() {
  const router = useRouter();
  const { videoId, videoTitle } = router.query;

  useEffect(() => {
    if (videoTitle) {
      document.title = videoTitle;
    }
  }, [videoTitle]);


  const [videoIndex, setVideoIndex] = useState(0);
  const [newsDb, setVideoData] = useState(NewsDb.items);

  const playNext = () => {
    setVideoIndex((prevIndex) => prevIndex + 1);

    const nextVideoId = newsDb[videoIndex + 1].id.videoId;
    const nextVideoTitle = newsDb[videoIndex + 1].snippet.title;

    router.push(`/news/${nextVideoId}?videoTitle=${encodeURIComponent(nextVideoTitle).replace(/%20/g, "")}`);
  };

  const playPrev = () => {
    setVideoIndex((prevIndex) => prevIndex - 1);
  
    const prevVideoId = newsDb[videoIndex - 1].id.videoId;
    const prevVideoTitle = newsDb[videoIndex - 1].snippet.title;
  
    router.push(`/news/${prevVideoId}?videoTitle=${encodeURIComponent(prevVideoTitle).replace(/%20/g, "")}`);
  };
  

  return (
    <>

      <VideoPlayer videoId={videoId} videoTitle={videoTitle}/>
      <h1>{videoTitle}</h1>
      <p>{newsDb[videoIndex].snippet.description}</p>
      <button onClick={playPrev} disabled={videoIndex === 0}>
            Prev
          </button>
          <button onClick={playNext}>Next Video</button>
    </>
  );
}
