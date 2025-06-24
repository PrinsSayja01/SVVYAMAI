
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background - New Robot Greeting */}
      <div className="absolute inset-0 w-full h-full">
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

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>

      <div className="container-width section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left animate-fade-up magnetic-field">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6 smart-hover interactive-glow breathing">
              <div className="w-2 h-2 bg-primary rounded-full smart-pulse"></div>
              <span className="text-sm font-medium text-primary text-shimmer">Only 5 Spots Available This Quarter</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-reveal magnetic-hover">
              Your{' '}
              <span className="gradient-text text-shimmer floating-element">24/7 Lead</span>
              <br />
              Generation Machine
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed breathing animate-intelligent-hover">
              Transform your business with automated systems that capture, nurture, and convert high-quality leads while you sleep.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8 morphing-bg rounded-2xl p-4">
              {[
                { value: "300%", label: "Average ROI" },
                { value: "24/7", label: "Lead Capture" },
                { value: "90%", label: "Less Manual Work" }
              ].map((stat, index) => (
                <div key={index} className="text-center smart-hover interactive-glow" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-3xl font-bold gradient-text text-shimmer floating-element">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button className="liquid-button group magnetic-field interactive-glow">
                Get Your Lead Machine
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform floating-element" />
              </Button>
              <Button variant="outline" className="smart-hover glassmorphism magnetic-field">
                Watch Demo (2 min)
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-border/30">
              <p className="text-sm text-foreground/60 mb-4 breathing">Trusted by 200+ Growing Businesses</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-60">
                {["TechCorp", "GrowthCo", "ScaleUp", "InnovateNow"].map((company, index) => (
                  <div key={company} className="bg-foreground/10 rounded px-4 py-2 text-sm font-medium smart-hover animate-intelligent-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Lead Dashboard */}
          <div className="relative magnetic-field">
            {/* Small Robot - Half visible above dashboard */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg floating-element interactive-glow smart-pulse">
                <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full breathing"></div>
                </div>
              </div>
            </div>

            {/* Lead Dashboard */}
            <div className="animate-fade-up glassmorphism rounded-2xl p-6 border border-border shadow-2xl interactive-glow morphing-bg smart-hover">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold magnetic-hover">Lead Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full smart-pulse"></div>
                    <span className="text-sm text-primary text-shimmer">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="glassmorphism rounded-lg p-4 smart-hover magnetic-field animate-intelligent-hover">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-5 w-5 text-primary floating-element" />
                      <span className="text-sm font-medium">New Leads</span>
                    </div>
                    <div className="text-2xl font-bold gradient-text text-shimmer">47</div>
                    <div className="text-xs text-foreground/60 breathing">+23% this week</div>
                  </div>

                  <div className="glassmorphism rounded-lg p-4 smart-hover magnetic-field animate-intelligent-hover" style={{ animationDelay: '0.1s' }}>
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-5 w-5 text-accent floating-element" />
                      <span className="text-sm font-medium">Response Time</span>
                    </div>
                    <div className="text-2xl font-bold text-accent text-shimmer">2m</div>
                    <div className="text-xs text-foreground/60 breathing">Automated</div>
                  </div>
                </div>

                <div className="bg-gradient-primary rounded-lg p-4 text-background interactive-glow magnetic-field fractal-bg">
                  <div className="text-sm font-medium mb-1">Conversion Rate</div>
                  <div className="text-3xl font-bold floating-element">34.5%</div>
                  <div className="text-sm opacity-80 breathing">Industry average: 12%</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full smart-pulse floating-element"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full smart-pulse floating-element" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
