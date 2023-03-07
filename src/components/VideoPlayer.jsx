
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoId, muted }) => {
  const [video, setVideo] = useState(null);
  const [videoTitle, setVideoTitle] = useState(null);


  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyDb9qFHPemuFLMJuBrmxjg5awl5DWVoAHk&part=snippet`
      )
      .then((response) => {
        const title = response.data.items[0].snippet.title;
        const url = `https://www.youtube.com/watch?v=${videoId}`;
        setVideoTitle(title);
        setVideo(url);
      })
      .catch(
        (error) => {
          console.log(error);
        },
        [videoId]
      );
  });


  return (
    <div>
      {video ? (
        <ReactPlayer
          width="740px"
          height="550px"
          url={video}
          playing={true}
          controls={false}
          loop={true}
          muted={muted}
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
                modestbranding: 1,
                disablekb: 1,
                showinfo: 0,
              },
            },
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VideoPlayer;
