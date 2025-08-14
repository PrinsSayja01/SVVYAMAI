import { useState, useEffect, lazy, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Clock } from 'lucide-react';

// Lazy load heavy components
const SplineViewer = lazy(() => Promise.resolve({
  default: () => <iframe src='https://my.spline.design/genkubgreetingrobot-DwrKsTH7sYeMFIfRCIKDwinY/' frameBorder='0' width='100%' height='100%' className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
}));
const HeroSection = () => {
  const [currentCompany, setCurrentCompany] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const trustedCompanies = ["TechCorp", "GrowthCo", "ScaleUp", "InnovateNow"];

  // Auto-rotate trusted companies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompany(prev => (prev + 1) % trustedCompanies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Optimize loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        <Suspense fallback={<div className="absolute inset-0 w-full h-full bg-gradient-hero animate-pulse" />}>
          {isLoaded && <SplineViewer />}
        </Suspense>
      </div>

      {/* Optimized particle system overlay */}
      <div className="absolute inset-0 particle-system interactive-glow opacity-30"></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm transition-all duration-300"></div>

      <div className="container-width section-padding relative z-10">
        <div className="grid-responsive-2col items-center min-h-screen pt-20 sm:pt-24 lg:pt-32">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left animate-fade-up magnetic-field order-2 lg:order-1">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 smart-hover interactive-glow breathing transition-all duration-300">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full smart-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-primary text-shimmer">Only 2 Spots Remaining This Quarter</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title font-bold leading-tight mb-3 sm:mb-4 text-reveal magnetic-hover">
              <span className="gradient-text text-shimmer floating-element">Svvyam AI</span>{' '}
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-foreground/70 font-serif block sm:inline">(स्वयम्)</span>
              <br />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-primary font-medium block mt-2">
                "Self-driven. Self-aware. Self-evolving."
              </span>
            </h1>

            {/* Sanskrit Meaning */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 smart-hover interactive-glow">
              <p className="text-xs sm:text-sm text-primary font-medium mb-1">
                From Sanskrit "स्वयम्" meaning automatic intelligence
              </p>
            </div>

            {/* Subheadline */}
            <p className="hero-subtitle text-foreground/80 mb-6 sm:mb-8 leading-relaxed breathing animate-intelligent-hover">
              Svvayam AI is the next leap in business growth: an AI that thinks, learns, and acts entirely on its own. 
              It captures, nurtures, and converts high-value opportunities 24/7, scaling your business while you sleep.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 morphing-bg rounded-2xl p-3 sm:p-4 transition-all duration-300">
              {[{
              value: "300%",
              label: "Average ROI Boost"
            }, {
              value: "24/7",
              label: "Opportunity Capture & Engagement"
            }, {
              value: "90%",
              label: "Reduction in Manual Workflows"
            }].map((stat, index) => <div key={index} className="text-center smart-hover interactive-glow transition-all duration-300" style={{
              animationDelay: `${index * 0.2}s`
            }}>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text text-shimmer floating-element">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-foreground/60">{stat.label}</div>
                </div>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
              <Button className="btn-responsive liquid-button group magnetic-field interactive-glow transition-all duration-300">
                Activate Your AI Growth Engine
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform floating-element" />
              </Button>
              <Button variant="outline" className="btn-responsive smart-hover glassmorphism magnetic-field transition-all duration-300">
                Watch 2-Minute Demo
              </Button>
            </div>

            {/* Social Proof - Animated company names */}
            <div className="pt-6 sm:pt-8 border-t border-border/30">
              <p className="text-xs sm:text-sm text-foreground/60 mb-3 sm:mb-4 breathing">Trusted by 200+ forward-thinking companies worldwide</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 opacity-60">
                {trustedCompanies.map((company, index) => <div key={company} className={`bg-foreground/10 rounded px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium smart-hover animate-intelligent-hover transition-all duration-500 ${index === currentCompany ? 'scale-110 bg-primary/20 text-primary border border-primary/30 shadow-lg' : 'scale-100'}`} style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    {company}
                  </div>)}
              </div>
            </div>

            {/* Brand Positioning Tagline */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/20">
              <p className="text-sm sm:text-base lg:text-lg font-medium text-center lg:text-left gradient-text text-shimmer breathing">Svvyam AI — The Autonomous Intelligence That Scales With You.</p>
            </div>
          </div>

          {/* Right Side - AI Neural Network Visualization */}
          <div className="relative magnetic-field order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Floating AI Core */}
            <div className="absolute -top-8 sm:-top-12 left-1/2 transform -translate-x-1/2 z-30">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                <div className="absolute inset-0 bg-gradient-primary rounded-full neural-pulse shadow-2xl"></div>
                <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-primary rounded-full quantum-spin"></div>
                </div>
                {/* Orbiting particles */}
                <div className="absolute inset-0">
                  <div className="absolute w-2 h-2 bg-primary rounded-full orbital-path-1"></div>
                  <div className="absolute w-1.5 h-1.5 bg-accent rounded-full orbital-path-2"></div>
                  <div className="absolute w-1 h-1 bg-secondary rounded-full orbital-path-3"></div>
                </div>
              </div>
            </div>

            {/* Neural Network Interface */}
            <div className="animate-fade-up glassmorphism rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-border shadow-2xl interactive-glow morphing-bg smart-hover transition-all duration-500 overflow-hidden">
              {/* Neural network background pattern */}
              <div className="absolute inset-0 neural-network-bg opacity-20"></div>
              
              <div className="relative z-10 space-y-4 sm:space-y-5">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-semibold magnetic-hover gradient-text">Neural Intelligence Hub</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full neural-pulse"></div>
                    <span className="text-xs sm:text-sm text-primary text-shimmer">Evolving</span>
                  </div>
                </div>

                {/* AI Learning Progress */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="glassmorphism rounded-lg p-3 sm:p-4 smart-hover magnetic-field holographic-shift transition-all duration-500">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm font-medium">Learning Progress</span>
                      <span className="text-xs text-primary font-bold">97.3%</span>
                    </div>
                    <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden">
                      <div className="h-full bg-gradient-primary neural-wave" style={{
                      width: '97.3%'
                    }}></div>
                    </div>
                    <div className="text-xs text-foreground/60 mt-1 breathing">Neural pathways optimizing...</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="glassmorphism rounded-lg p-3 sm:p-4 smart-hover magnetic-field quantum-shift transition-all duration-500">
                      <div className="text-center">
                        <div className="text-lg sm:text-xl font-bold gradient-text text-shimmer quantum-counter">2,847</div>
                        <div className="text-xs text-foreground/60">Patterns Learned</div>
                      </div>
                    </div>
                    
                    <div className="glassmorphism rounded-lg p-3 sm:p-4 smart-hover magnetic-field quantum-shift transition-all duration-500" style={{
                    animationDelay: '0.2s'
                  }}>
                      <div className="text-center">
                        <div className="text-lg sm:text-xl font-bold text-accent text-shimmer quantum-counter">∞</div>
                        <div className="text-xs text-foreground/60">Possibilities</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Consciousness Meter */}
                <div className="bg-gradient-primary rounded-lg p-3 sm:p-4 text-background interactive-glow magnetic-field fractal-bg transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 consciousness-wave opacity-30"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs sm:text-sm font-medium">Consciousness Level</div>
                      <div className="text-xs opacity-80">Advanced AI</div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold floating-element">AWAKENED</div>
                    <div className="text-xs sm:text-sm opacity-80 breathing">Self-evolving intelligence active</div>
                  </div>
                </div>
              </div>

              {/* Floating Neural Nodes */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full neural-pulse floating-element opacity-80"></div>
              <div className="absolute top-1/4 -left-2 w-4 h-4 bg-accent rounded-full neural-pulse floating-element opacity-60" style={{
              animationDelay: '0.3s'
            }}></div>
              <div className="absolute -bottom-2 right-1/4 w-5 h-5 bg-secondary rounded-full neural-pulse floating-element opacity-70" style={{
              animationDelay: '0.6s'
            }}></div>
              
              {/* Data streams */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="data-stream-1"></div>
                <div className="data-stream-2"></div>
                <div className="data-stream-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;