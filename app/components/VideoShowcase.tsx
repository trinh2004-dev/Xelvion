"use client";

import React, { useState, useRef } from "react";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  RotateCcw, 
  Sparkles, 
  Film, 
  ShoppingCart, 
  Server,
  Layers,
  CheckCircle2,
  Globe
} from "lucide-react";

export function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSegment, setActiveSegment] = useState<"cinevn" | "megamart" | "catalog" | "arch">("cinevn");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const seekTo = (seconds: number, segment: "cinevn" | "megamart" | "catalog" | "arch") => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = seconds;
    videoRef.current.play();
    setIsPlaying(true);
    setActiveSegment(segment);
  };

  return (
    <section id="demo" className="section section-video">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge-pill">
            <Film className="w-4 h-4 text-cyan-400" />
            <span>Interactive Media Demonstration</span>
          </div>
          <h2 className="section-title">
            Live Product Demo &amp; Video Walkthrough
          </h2>
          <p className="section-subtitle">
            Experience our responsive media engine and web storefront in real-time. 
            Demonstrating live production interfaces at <strong>cinevn.me</strong> and <strong>megamart24.tech</strong>.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="video-player-wrapper">
          {/* Ambient Glow effect behind the video player (simulates CineVN's Ambilight) */}
          <div className="ambilight-glow" aria-hidden="true" />

          <div className="video-player-card">
            {/* Player Header */}
            <div className="player-topbar">
              <div className="player-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="player-title">
                <span>xelvion-production-reel.mp4 · 1080p 30fps H.264 · Live Domains Capture</span>
              </div>
              <div className="player-badge">
                <span className="live-dot" />
                <span>LIVE ECOSYSTEM</span>
              </div>
            </div>

            {/* Video Viewport */}
            <div className="video-viewport" onClick={togglePlay}>
              <video
                ref={videoRef}
                src="/videos/product-showcase.mp4"
                className="main-video"
                autoPlay
                loop
                muted
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Play / Pause overlay button */}
              {!isPlaying && (
                <div className="play-overlay">
                  <div className="play-btn-circle">
                    <Play className="w-8 h-8 fill-white text-white ml-1" />
                  </div>
                </div>
              )}

              {/* Timestamp watermarks */}
              <div className="video-overlay-tags">
                <span className="video-tag">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Live Capture: cinevn.me &amp; megamart24.tech
                </span>
              </div>
            </div>

            {/* Controls Bar */}
            <div className="player-controls">
              <div className="control-left">
                <button 
                  type="button" 
                  className="control-btn" 
                  onClick={togglePlay}
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button 
                  type="button" 
                  className="control-btn" 
                  onClick={toggleMute}
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-slate-400" /> : <Volume2 className="w-5 h-5 text-cyan-400" />}
                </button>
                <button 
                  type="button" 
                  className="control-btn" 
                  onClick={restartVideo}
                  title="Replay from start"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Timeline Chapter Selectors */}
              <div className="chapter-jump-group">
                <button
                  type="button"
                  className={`chapter-btn ${activeSegment === "cinevn" ? "active" : ""}`}
                  onClick={(e) => { e.stopPropagation(); seekTo(0, "cinevn"); }}
                >
                  <span>0:00</span> CineVN (cinevn.me)
                </button>
                <button
                  type="button"
                  className={`chapter-btn ${activeSegment === "megamart" ? "active" : ""}`}
                  onClick={(e) => { e.stopPropagation(); seekTo(4, "megamart"); }}
                >
                  <span>0:04</span> MegaMart (megamart24.tech)
                </button>
                <button
                  type="button"
                  className={`chapter-btn ${activeSegment === "catalog" ? "active" : ""}`}
                  onClick={(e) => { e.stopPropagation(); seekTo(8, "catalog"); }}
                >
                  <span>0:08</span> Multi-Genre Filter
                </button>
                <button
                  type="button"
                  className={`chapter-btn ${activeSegment === "arch" ? "active" : ""}`}
                  onClick={(e) => { e.stopPropagation(); seekTo(12, "arch"); }}
                >
                  <span>0:12</span> DevOps Blueprint
                </button>
              </div>

              <div className="control-right">
                <span className="hd-indicator">1080p HD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="video-features-grid mt-10">
          <div className="feature-highlight-card">
            <div className="feature-icon bg-cyan-500/10 text-cyan-400">
              <Film className="w-5 h-5" />
            </div>
            <h4>Adaptive HLS &amp; Canvas Glow</h4>
            <p>
              Tested in live production at <code>https://cinevn.me</code>. Video frames are sampled in real-time 
              to project a reactive Ambilight ambient glow around the display.
            </p>
          </div>

          <div className="feature-highlight-card">
            <div className="feature-icon bg-indigo-500/10 text-indigo-400">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <h4>Instant Catalog &amp; 3D Preview</h4>
            <p>
              Live at <code>https://megamart24.tech</code>. High-throughput retail platform with Redis flash-sale inventory locks, 
              Zustand persistent cart, and 3D WebGL product inspection.
            </p>
          </div>

          <div className="feature-highlight-card">
            <div className="feature-icon bg-emerald-500/10 text-emerald-400">
              <Server className="w-5 h-5" />
            </div>
            <h4>Cloud Edge Architecture</h4>
            <p>
              Containerized Caddy 2 reverse proxy with automated Let&apos;s Encrypt TLS certificates, 
              isolated Docker bridge networks, and automatic container health-checks on Ubuntu 24.04 LTS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
