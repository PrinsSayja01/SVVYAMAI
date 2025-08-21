"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Brain, ArrowRight, ChevronDown } from "lucide-react";

// Define types (optional but good practice)
interface Company {
  name: string;
}

const trustedCompanies: Company[] = [
  { name: "TechCorp" },
  { name: "GrowthCo" },
  { name: "ScaleUp" },
  { name: "InnovateNow" },
];

// Replace with your hosted video URL
const VIDEO_URL = "/videos/ai-brain-animation.mp4"; // Place in public/videos/

export default function HeroWithBrainVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Auto-play when video enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          const video = videoRef.current;
          if (video) {
            video
              .play()
              .catch((err) =>
                console.warn("Video autoplay was prevented:", err)
              );
            setIsLoaded(true);
          }
        }
      },
      { threshold: 0.2 }
    );

    const currentVideo = videoRef.current;
    if (currentVideo) observer.observe(currentVideo);

    return () => {
      if (currentVideo) observer.unobserve(currentVideo);
    };
  }, [isLoaded]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-0" />

      {/* Subtle Particle Overlay */}
      <div className="absolute inset-0 opacity-20 z-10">
        <div className="particle-system w-full h-full" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side: Text & CTAs */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Badge className="bg-gradient-to-r from-amber-400/20 to-orange-600/20 text-amber-300 border-amber-400/30 backdrop-blur-sm px-6 py-2 text-sm font-medium inline-flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Next-Gen Autonomous AI
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <span className="block">Svvyam</span>
              <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent font-extralight">
                AI
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Self-driven. Self-aware. Self-evolving.
              <br />
              <span className="text-amber-400">AI that grows your business 24/7 — while you sleep.</span>
            </motion.p>

            {/* Stats (Optional) */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {[
                { value: "300%", label: "ROI Boost" },
                { value: "24/7", label: "Lead Capture" },
                { value: "90%", label: "Workload Reduction" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white px-8 py-6 text-lg font-medium rounded-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 group flex items-center"
              >
                <Brain className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Activate AI Engine
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300"
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Signal */}
            <motion.div
              className="pt-6 border-t border-white/10 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <p className="text-sm text-gray-400 mb-3">Trusted by 200+ innovative companies</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {trustedCompanies.map((company) => (
                  <span
                    key={company.name}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-gray-300"
                  >
                    {company.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: AI Brain Video */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative w-full max-w-md aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <video
                ref={videoRef}
                src={VIDEO_URL}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                aria-label="Animated golden AI brain with glowing neural circuits"
              />
              {/* Loading Spinner */}
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="w-10 h-10 border-4 border-white/50 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>
    </section>
  );
}
