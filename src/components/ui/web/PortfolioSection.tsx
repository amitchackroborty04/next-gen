"use client";

import type React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, X, Maximize } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface VideoItem {
  title: string;
  category: string;
  videoUrl?: string;
  youtubeId?: string;
  type: "vertical" | "horizontal";
  thumbnail?: string;
  isYouTube?: boolean;
}

export default function VideoPortfolioSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [mutedVideos, setMutedVideos] = useState<Set<number>>(new Set());
  const [fullscreenVideo, setFullscreenVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const fullscreenVideoRef = useRef<HTMLVideoElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // ===========================================
  // DYNAMIC VIDEO DATA - ADD YOUR URLS HERE
  // ===========================================
  const videoItems: VideoItem[] = [
    {
      title: "DRAMATIC MAKEOVER",
      category: "Transformation",
      youtubeId: "-_7ockHF6Z0", // Replace with your YouTube ID
      type: "vertical",
      thumbnail: "/dramatic-makeover-transformation-video.png", // Replace with your thumbnail
      isYouTube: true,
    },
    {
      title: "HEART OF NATURE",
      category: "Architecture",
      videoUrl: "/your-video-url-1.mp4", // REPLACE WITH YOUR VIDEO URL
      type: "vertical",
      thumbnail: "/images/image6.png", // Replace with your thumbnail
    },
    {
      title: "MANUAL PROCESS",
      category: "Tutorial",
      videoUrl: "/your-video-url-2.mp4", // REPLACE WITH YOUR VIDEO URL
      type: "vertical",
      thumbnail: "/manual-process-tutorial-video.png", // Replace with your thumbnail
    },
    {
      title: "MODERN INTERIOR",
      category: "Design Showcase",
      youtubeId: "UE0WzWpUspw", // Replace with your YouTube ID
      type: "horizontal",
      thumbnail: "/modern-interior-design-showcase.png", // Replace with your thumbnail
      isYouTube: true,
    },
    {
      title: "WORKSPACE DESIGN",
      category: "Commercial",
      videoUrl: "/your-video-url-3.mp4", // REPLACE WITH YOUR VIDEO URL
      type: "horizontal",
      thumbnail: "/modern-workspace-office-design.png", // Replace with your thumbnail
    },
    {
      title: "WORKSPACE DESIGN",
      category: "Commercial",
      videoUrl: "/your-video-url-3.mp4", // REPLACE WITH YOUR VIDEO URL
      type: "horizontal",
      thumbnail: "/modern-workspace-office-design.png", // Replace with your thumbnail
    },
    {
      title: "WORKSPACE DESIGN",
      category: "Commercial",
      videoUrl: "/your-video-url-3.mp4", // REPLACE WITH YOUR VIDEO URL
      type: "horizontal",
      thumbnail: "/modern-workspace-office-design.png", // Replace with your thumbnail
    },
  ];
  // ===========================================

  const handleVideoClick = (index: number) => {
    setFullscreenVideo(index);
    setPlayingVideo(index);
  };

  const closeFullscreen = () => {
    setFullscreenVideo(null);
    setPlayingVideo(null);
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.pause();
    }
  };

  const handleFullscreenVideoClick = () => {
    if (fullscreenVideoRef.current) {
      if (playingVideo === fullscreenVideo) {
        fullscreenVideoRef.current.pause();
        setPlayingVideo(null);
      } else {
        fullscreenVideoRef.current.play();
        setPlayingVideo(fullscreenVideo);
      }
    }
  };

  const toggleFullscreenMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (fullscreenVideo === null) return;

    const newMutedVideos = new Set(mutedVideos);
    if (mutedVideos.has(fullscreenVideo)) {
      newMutedVideos.delete(fullscreenVideo);
      if (fullscreenVideoRef.current) {
        fullscreenVideoRef.current.muted = false;
      }
    } else {
      newMutedVideos.add(fullscreenVideo);
      if (fullscreenVideoRef.current) {
        fullscreenVideoRef.current.muted = true;
      }
    }
    setMutedVideos(newMutedVideos);
  };

  const toggleMute = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[index];
    if (!video) return;

    const newMutedVideos = new Set(mutedVideos);
    if (mutedVideos.has(index)) {
      newMutedVideos.delete(index);
      video.muted = false;
    } else {
      newMutedVideos.add(index);
      video.muted = true;
    }
    setMutedVideos(newMutedVideos);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && fullscreenVideo !== null) {
        closeFullscreen();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [fullscreenVideo]);

  useEffect(() => {
    const firstNonYouTubeIndex = videoItems.findIndex(
      (item) => !item.isYouTube
    );
    if (firstNonYouTubeIndex !== -1) {
      const firstVideo = videoRefs.current[firstNonYouTubeIndex];
      if (firstVideo) {
        firstVideo.muted = true;
        firstVideo.play().catch((error) => {
          console.log("[v0] Autoplay failed:", error.message);
        });
        setPlayingVideo(firstNonYouTubeIndex);
        setMutedVideos(new Set([firstNonYouTubeIndex]));
      }
    }
  }, []);

  return (
    <>
      <section id="results" className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Work in Action
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how we transform raw footage into compelling content that
              drives results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Vertical videos - YouTube Reels style */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {videoItems
                .filter((item) => item.type === "vertical")
                .map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group cursor-pointer"
                    onClick={() => handleVideoClick(index)}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-gray-900 aspect-[9/16]">
                      {item.isYouTube && item.youtubeId ? (
                        <div className="relative w-full h-full">
                          <iframe
                            src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=0&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${item.youtubeId}`}
                            className="w-full h-full object-cover"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                          {/* YouTube overlay for better control */}
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <motion.div
                              initial={{ scale: 0 }}
                              whileHover={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                              }}
                              className="w-16 h-16 bg-red-600/80 rounded-full flex items-center justify-center backdrop-blur-sm"
                            >
                              <Maximize className="w-6 h-6 text-white" />
                            </motion.div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            loop
                            playsInline
                            poster={item.thumbnail}
                          >
                            <source src={item.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>

                          {/* Play/Pause overlay */}
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <motion.div
                              initial={{ scale: 0 }}
                              whileHover={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                              }}
                              className="w-16 h-16 bg-blue-600/80 rounded-full flex items-center justify-center backdrop-blur-sm"
                            >
                              <Maximize className="w-6 h-6 text-white" />
                            </motion.div>
                          </div>
                        </>
                      )}

                      {/* Title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white font-bold text-lg mb-1">
                          {item.title}
                        </h3>
                        <p className="text-blue-400 text-sm">{item.category}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>

          </div>
        </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl mx-auto mt-14  px-6">
              {videoItems
                .filter((item) => item.type === "horizontal")
                .map((item, index) => {
                  const actualIndex =
                    videoItems.filter((v) => v.type === "vertical").length +
                    index;
                  return (
                    <motion.div
                      key={actualIndex}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="group cursor-pointer"
                      onClick={() => handleVideoClick(actualIndex)}
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-gray-900 aspect-video">
                        {item.isYouTube && item.youtubeId ? (
                          <div className="relative w-full h-full">
                            <iframe
                              src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=0&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${item.youtubeId}`}
                              className="w-full h-full object-cover"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                            {/* YouTube overlay for better control */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <motion.div
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 30,
                                }}
                                className="w-16 h-16 bg-red-600/80 rounded-full flex items-center justify-center backdrop-blur-sm"
                              >
                                <Maximize className="w-6 h-6 text-white" />
                              </motion.div>
                            </div>
                          </div>
                        ) : (
                          <>
                            <video
                              ref={videoRef}
                              className="w-full h-full object-cover"
                              loop
                              playsInline
                              poster={item.thumbnail}
                            >
                              <source src={item.videoUrl} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>

                            {/* Play/Pause overlay */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <motion.div
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 30,
                                }}
                                className="w-16 h-16 bg-blue-600/80 rounded-full flex items-center justify-center backdrop-blur-sm"
                              >
                                <Maximize className="w-6 h-6 text-white" />
                              </motion.div>
                            </div>
                          </>
                        )}

                        {/* Title overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                          <h3 className="text-white font-bold text-lg mb-1">
                            {item.title}
                          </h3>
                          <p className="text-blue-400 text-sm">
                            {item.category}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
      </section>

      <AnimatePresence>
        {fullscreenVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            onClick={closeFullscreen}
          >
            {/* Close button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center p-4">
              {videoItems[fullscreenVideo]?.isYouTube &&
              videoItems[fullscreenVideo]?.youtubeId ? (
                <div
                  className={`relative ${
                    videoItems[fullscreenVideo]?.type === "vertical"
                      ? "aspect-[9/16] h-full max-h-[90vh]"
                      : "aspect-video w-full max-w-[90vw]"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${videoItems[fullscreenVideo]?.youtubeId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0`}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div
                  className={`relative ${
                    videoItems[fullscreenVideo]?.type === "vertical"
                      ? "aspect-[9/16] h-full max-h-[90vh]"
                      : "aspect-video w-full max-w-[90vw]"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <video
                    ref={fullscreenVideoRef}
                    className="w-full h-full object-contain rounded-lg"
                    loop
                    playsInline
                    autoPlay
                    muted={mutedVideos.has(fullscreenVideo)}
                    onClick={handleFullscreenVideoClick}
                    onPlay={() => setPlayingVideo(fullscreenVideo)}
                    onPause={() => setPlayingVideo(null)}
                  >
                    <source
                      src={videoItems[fullscreenVideo]?.videoUrl}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>

                  {/* Fullscreen video controls */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                      className="w-20 h-20 bg-blue-600/80 rounded-full flex items-center justify-center backdrop-blur-sm"
                    >
                      {playingVideo === fullscreenVideo ? (
                        <Pause
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                        />
                      ) : (
                        <Play
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Mute button for fullscreen */}
                  <button
                    onClick={toggleFullscreenMute}
                    className="absolute bottom-4 right-4 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-colors"
                  >
                    {mutedVideos.has(fullscreenVideo) ? (
                      <VolumeX className="w-6 h-6 text-white" />
                    ) : (
                      <Volume2 className="w-6 h-6 text-white" />
                    )}
                  </button>

                  {/* Video title in fullscreen */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">
                      {videoItems[fullscreenVideo]?.title}
                    </h3>
                    <p className="text-blue-400 text-lg">
                      {videoItems[fullscreenVideo]?.category}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
