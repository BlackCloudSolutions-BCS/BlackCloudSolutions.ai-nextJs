'use client';

import { useEffect, useRef, memo } from 'react';

function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      console.log('Video element mounted');

      const playVideo = async () => {
        try {
          await video.play();
          console.log('Video playing successfully');
        } catch (error) {
          console.error('Error playing video:', error);
        }
      };

      // Try to play when loaded
      if (video.readyState >= 2) {
        playVideo();
      }
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-screen overflow-hidden" style={{ zIndex: 0 }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0, display: 'block' }}
        onLoadStart={() => console.log('Video load started')}
        onLoadedMetadata={() => console.log('Video metadata loaded')}
        onLoadedData={() => console.log('Video data loaded')}
        onCanPlay={() => console.log('Video can play')}
        onPlaying={() => console.log('Video is playing')}
        onError={(e) => console.error('Video error event:', e)}
        src="/assets/landing.mp4"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" style={{ zIndex: 10 }}></div>
    </div>
  );
}

export default memo(VideoBackground);
