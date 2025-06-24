
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden video-overlay">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/5377684/5377684-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Spline 3D Background overlay */}
      <div className="absolute inset-0 w-full h-full opacity-60">
        <iframe 
          src='https://my.spline.design/genkubgreetingrobot-DwrKsTH7sYeMFIfRCIKDwinY/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Intelligent particle system overlay */}
      <div className="absolute inset-0 particle-system interactive-glow"></div>

      <div className="container-width section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left smooth-enter magnetic-field">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 glassmorphism rounded-full px-6 py-3 mb-8 ultra-smooth-hover interactive-glow breathing">
              <div className="w-3 h-3 bg-primary rounded-full smart-pulse"></div>
              <span className="text-sm font-medium text-primary text-shimmer">Only 5 Spots Available This Quarter</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-reveal magnetic-hover">
              Your{' '}
              <span className="gradient-text text-shimmer floating-element">24/7 Lead</span>
              <br />
              Generation Machine
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-foreground/80 mb-10 leading-relaxed breathing animate-intelligent-hover">
              Transform your business with automated systems that capture, nurture, and convert high-quality leads while you sleep.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10 glassmorphism rounded-2xl p-6">
              {[
                { value: "300%", label: "Average ROI" },
                { value: "24/7", label: "Lead Capture" },
                { value: "90%", label: "Less Manual Work" }
              ].map((stat, index) => (
                <div key={index} className="text-center ultra-smooth-hover interactive-glow" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-3xl font-bold gradient-text text-shimmer floating-element">{stat.value}</div>
                  <div className="text-sm text-foreground/60 breathing">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-10">
              <Button className="liquid-button group magnetic-field interactive-glow px-10 py-4 text-lg">
                Get Your Lead Machine
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform floating-element" />
              </Button>
              <Button variant="outline" className="ultra-smooth-hover glassmorphism magnetic-field px-10 py-4 text-lg">
                Watch Demo (2 min)
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-border/30">
              <p className="text-sm text-foreground/60 mb-6 breathing">Trusted by 200+ Growing Businesses</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-70">
                {["TechCorp", "GrowthCo", "ScaleUp", "InnovateNow"].map((company, index) => (
                  <div key={company} className="glassmorphism rounded-lg px-6 py-3 text-sm font-medium ultra-smooth-hover animate-intelligent-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Lead Dashboard */}
          <div className="relative magnetic-field smooth-enter" style={{ animationDelay: '0.3s' }}>
            {/* Small Robot - Half visible above dashboard */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg floating-element interactive-glow smart-pulse">
                <div className="w-10 h-10 bg-backgroun rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-primary rounded-full breathing"></div>
                </div>
              </div>
            </div>

            {/* Lead Dashboard */}
            <div className="glassmorphism rounded-3xl p-8 border border-border shadow-2xl interactive-glow morphing-bg ultra-smooth-hover">
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-semibold magnetic-hover">Lead Dashboard</h3>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full smart-pulse"></div>
                    <span className="text-sm text-primary text-shimmer font-medium">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="glassmorphism rounded-xl p-6 ultra-smooth-hover magnetic-field animate-intelligent-hover">
                    <div className="flex items-center space-x-3 mb-3">
                      <Users className="h-6 w-6 text-primary floating-element" />
                      <span className="text-sm font-medium">New Leads</span>
                    </div>
                    <div className="text-3xl font-bold gradient-text text-shimmer">47</div>
                    <div className="text-xs text-foreground/60 breathing">+23% this week</div>
                  </div>

                  <div className="glassmorphism rounded-xl p-6 ultra-smooth-hover magnetic-field animate-intelligent-hover" style={{ animationDelay: '0.1s' }}>
                    <div className="flex items-center space-x-3 mb-3">
                      <Clock className="h-6 w-6 text-accent floating-element" />
                      <span className="text-sm font-medium">Response Time</span>
                    </div>
                    <div className="text-3xl font-bold text-accent text-shimmer">2m</div>
                    <div className="text-xs text-foreground/60 breathing">Automated</div>
                  </div>
                </div>

                <div className="bg-gradient-primary rounded-xl p-6 text-background interactive-glow magnetic-field fractal-bg">
                  <div className="text-sm font-medium mb-2">Conversion Rate</div>
                  <div className="text-4xl font-bold floating-element">34.5%</div>
                  <div className="text-sm opacity-80 breathing">Industry average: 12%</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-10 h-10 bg-primary rounded-full smart-pulse floating-element"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-accent rounded-full smart-pulse floating-element" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
