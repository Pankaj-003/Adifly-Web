// VideoHeroSection.jsx - Background video only
"use client";

import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import video from "../assets/adifly.webm"; // Make sure path is correct

const VideoHeroSection = () => {
  const videoRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (videoRef.current && inView) {
      videoRef.current.play();
    }
  }, [inView]);

  return (
    <section ref={ref} className="relative video-mian h-screen overflow-hidden bg-dark">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for better contrast (optional) */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    </section>
  );
};

export default VideoHeroSection;
