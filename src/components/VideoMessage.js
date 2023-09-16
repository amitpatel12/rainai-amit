import React, { useEffect, useRef } from 'react'

const VideoMessage = () => {
    const videoRef = useRef(null);

    const videoUrl = 'https://player.vimeo.com/progressive_redirect/playback/790178813/rendition/1080p/file.mp4?loc=external&signature=a0bf52abc36ebb88d4b3a0390c99207500fd99839be70fc84e3b7c8279fee3a8'

    const playVideo = () => {
        const video = videoRef.current;
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      };

  

  return (
    <div className='w-full' onClick={playVideo}>
      <video className='!object-cover' ref={videoRef}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoMessage
