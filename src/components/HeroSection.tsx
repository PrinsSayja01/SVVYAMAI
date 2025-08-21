import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Sparkles, 
  ArrowRight, 
  Users, 
  Clock, 
  ChevronDown 
} from "lucide-react";
import { lazy, Suspense } from "react";

// Lazy-loaded 3D Spline Viewer
const SplineViewer = lazy(() => Promise.resolve({
  default: () => (
    <iframe
      src="https://my.spline.design/genkubgreetingrobot-DwrKsTH7sYeMFIfRCIKDwinY/"
      frameBorder="0"
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      loading="lazy"
      title="3D AI Greeting Robot"
    />
  )
}));

// Trusted Companies
const trustedCompanies = ["TechCorp", "GrowthCo", "ScaleUp", "InnovateNow", "FutureLabs"];

export default function HeroSection() {
  const [currentCompany, setCurrentCompany] = useState(0);

  // Auto-rotate companies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompany((prev) => (prev + 1) % trustedCompanies.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* 3D Background with Suspense */}
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary/20 to-black animate-pulse" />
          }
        >
          <SplineViewer />
        </Suspense>
      </div>

      {/* Subtle Particle Overlay */}
      <div className="absolute inset-0 z-10 opacity-30">
        <div className="particle-system h-full w-full" />
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10"></div>

      {/* Main Content */}
      <motion.div
        className="max-w-7xl mx-auto z-20 relative text-center lg:text-left px-4 lg:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side: Text & CTAs */}
          <motion.div
            className="space-y-8"
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
                Autonomous AI for Growth
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

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {[
                { value: "300%", label: "ROI Boost" },
                { value: "24/7", label: "Lead Capture" },
                { value: "90%", label: "Workload Reduction" }
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
              transition={{ duration: 0.8, delay: 1.3 }}
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
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <p className="text-sm text-gray-400 mb-3">Trusted by 200+ innovative companies</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {trustedCompanies.map((company, i) => (
                  <span
                    key={company}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-500 ${
                      i === currentCompany
                        ? "bg-amber-500/30 border-amber-400 text-amber-200 scale-110 shadow-lg"
                        : "bg-white/10 border-white/20 text-gray-300 scale-100"
                    }`}
                  >
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: AI Visualization */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Floating AI Core */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/40 to-orange-700/40 rounded-full blur-xl scale-75 lg:scale-90"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-amber-500/20 to-orange-700/20 backdrop-blur-sm rounded-3xl border border-amber-400/40 flex items-center justify-center">
                <Brain className="w-20 h-20 text-amber-400 drop-shadow-2xl" />
              </div>

              {/* Orbiting Particles */}
              <div className="absolute inset-0 rounded-full animate-spin duration-[6000ms]">
                <div className="w-4 h-4 bg-amber-400 rounded-full absolute top-4 left-1/2 transform -translate-x-1/2"></div>
                <div className="w-3 h-3 bg-orange-400 rounded-full absolute bottom-4 right-1/3"></div>
                <div className="w-2 h-2 bg-yellow-300 rounded-full absolute top-1/3 left-4"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

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
