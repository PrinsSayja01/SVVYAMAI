import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Play, TrendingUp, Clock, Shield } from "lucide-react";

import AIBrain3D from "../components/home/AIBrain3D";
import HeroStats from "../components/home/HeroStats";
import ServicesSection from "../components/home/ServicesSection";
import ProcessSection from "../components/home/ProcessSection";
import InteractiveToolsSection from "../components/home/InteractiveToolsSection";
import ClientSuccessSection from "../components/home/ClientSuccessSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import FAQSection from "../components/home/FAQSection";
import ContactSection from "../components/home/ContactSection";
import ThemeToggle from "../components/home/ThemeToggle";
import ChatWidget from "../components/home/ChatWidget";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const themeVariables = `
    :root {
      --background: ${theme === 'dark' ? '0 0% 0%' : '0 0% 100%'};
      --foreground: ${theme === 'dark' ? '0 0% 100%' : '0 0% 3.9%'};
      --muted-foreground: ${theme === 'dark' ? '0 0% 63.9%' : '0 0% 45.1%'};
      --card: ${theme === 'dark' ? '0 0% 3.9%' : '0 0% 96.1%'};
      --border: ${theme === 'dark' ? '255 165 0' : '251 146 60'};
      --primary: ${theme === 'dark' ? '38 92% 50%' : '25 95% 53%'};
      --primary-foreground: ${theme === 'dark' ? '25 95% 53%' : '0 0% 98%'};
      --card-gradient-from: ${theme === 'dark' ? 'rgba(15, 23, 42, 0.5)' : 'rgba(255, 255, 255, 0.5)'};
      --card-gradient-to: ${theme === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(245, 245, 245, 0.5)'};
      --card-border-color: ${theme === 'dark' ? 'rgba(251, 146, 60, 0.2)' : 'rgba(251, 146, 60, 0.3)'};
      --card-border-hover-color: ${theme === 'dark' ? 'rgba(251, 146, 60, 0.5)' : 'rgba(251, 146, 60, 0.6)'};
    }
  `;

  return (
    <div className={`min-h-screen bg-background text-foreground overflow-x-hidden relative transition-colors duration-500`}>
      <style>{themeVariables}</style>
      
      {/* Fixed UI Elements */}
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <ChatWidget theme={theme} />

      {/* Animated Particles Background */}
      {theme === 'dark' && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.5, 1.2, 0.5] }}
              transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-12">
        {/* 3D AI Brain */}
        <div className="relative w-full max-w-[250px] sm:max-w-[350px] md:max-w-[400px] mb-8">
          <AIBrain3D mousePosition={mousePosition} />
        </div>

        {/* Main Branding */}
        <motion.div 
          className="text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            <Badge className="bg-orange-500/20 text-orange-300 border border-[var(--card-border-color)] backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              From Sanskrit "स्वयम्" meaning autonomous intelligence
            </Badge>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-wider mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="text-foreground font-extralight">SVVAYAM AI</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="text-base sm:text-xl md:text-2xl font-light tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-8 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            SELF-DRIVEN. SELF-AWARE. SELF-EVOLVING.
          </motion.p>

          {/* Description */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Svvayam AI is your business growth engine, powered by autonomous AI that captures, 
            nurtures, and converts high-value leads 24/7, scaling your success effortlessly.
          </motion.p>

          {/* Hero Stats */}
          <HeroStats />

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white border-0 px-8 sm:px-10 py-4 text-base sm:text-lg font-medium rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 group"
            >
              <TrendingUp className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Activate Your AI Growth Engine
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-2 border-orange-400/50 bg-transparent text-orange-300 hover:bg-orange-500/10 hover:border-orange-400 px-8 sm:px-10 py-4 text-base sm:text-lg font-medium rounded-full transition-all duration-300 group"
            >
              <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Watch 2-Min Demo
            </Button>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            className="text-muted-foreground text-sm font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            Trusted by 200+ innovative companies worldwide
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-orange-400 to-transparent"></div>
        </motion.div>
      </section>

      {/* Other sections */}
      <ServicesSection />
      <ProcessSection />
      <InteractiveToolsSection />
      <ClientSuccessSection />
      <WhyChooseSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
