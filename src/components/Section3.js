import React, { useState, useEffect, useRef } from "react"; 
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Video from '../videos/Video.mp4';
import Video1 from '../videos/Video1.mp4';
import Video2 from '../videos/Video2.mp4';
import Video3 from '../videos/Video3.mp4';
import Video4 from '../videos/Video4.mp4';
import Video5 from '../videos/Video5.mp4';
import Video6 from '../videos/Video6.mp4';

const videos = [
  Video,
  Video1,
  Video2,
  Video3,
  Video4,
  Video5,
  Video6,
];

const Section3 = () => {
  const [mainIndex, setMainIndex] = useState(0);
  const videoRefs = useRef([]);

  const handleSlideChange = (index) => {
    // Stop all videos and mute them
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.muted = true; // Ensure all videos are muted initially
      }
    });

    // Start playing the current video with sound
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
      videoRefs.current[index].muted = false; // Unmute the current video
    }
    setMainIndex(index);
  };

  const slideNext = () => {
    const newIndex = mainIndex < videos.length - 1 ? mainIndex + 1 : 0; // Loop back to the start
    handleSlideChange(newIndex);
  };

  const slidePrev = () => {
    const newIndex = mainIndex > 0 ? mainIndex - 1 : videos.length - 1; // Loop back to the end
    handleSlideChange(newIndex);
  };

  const handleVideoClick = (index) => {
    const currentVideo = videoRefs.current[index];

    if (currentVideo) {
      if (currentVideo.paused) {
        // If the video is paused, play it
        currentVideo.play();
        currentVideo.muted = false; // Unmute the video when played
      } else {
        // If the video is playing, pause it
        currentVideo.pause();
        currentVideo.muted = true; // Mute the video when paused
      }
    }

    // Ensure all other videos are paused and muted
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
        video.muted = true; // Mute all other videos
      }
    });
  };

  const items = videos.map((videoSrc, index) => (
    <div className="item video" key={index} onClick={() => handleVideoClick(index)}>
      <video
        className="media"
        ref={(el) => (videoRefs.current[index] = el)} // Store the video reference
        autoPlay={index === mainIndex} // Auto-play only the current video
        muted // Start muted to prevent sound until needed
        loop
        playsInline
        src={videoSrc}
      />
    </div>
  ));

  return (
    <div id="gallery" className="carousel section3">
      <AliceCarousel
        activeIndex={mainIndex}
        onSlideChanged={({ item }) => handleSlideChange(item)}
        disableButtonsControls
        items={items}
      />
      <div className="btn-prev" onClick={slidePrev}>
        &lang;
      </div>
      <div className="btn-next" onClick={slideNext}>
        &rang;
      </div>
    </div>
  );
}

export default Section3;
