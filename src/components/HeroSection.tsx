
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container-width section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Only 5 Spots Available This Quarter</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Your{' '}
              <span className="gradient-text">24/7 Lead</span>
              <br />
              Generation Machine
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
              Transform your business with automated systems that capture, nurture, and convert high-quality leads while you sleep.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">300%</div>
                <div className="text-sm text-foreground/60">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-foreground/60">Lead Capture</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">90%</div>
                <div className="text-sm text-foreground/60">Less Manual Work</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-primary group">
                Get Your Lead Machine
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-secondary">
                Watch Demo (2 min)
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 pt-8 border-t border-border/30">
              <p className="text-sm text-foreground/60 mb-4">Trusted by 200+ Growing Businesses</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-60">
                <div className="bg-foreground/10 rounded px-4 py-2 text-sm font-medium">TechCorp</div>
                <div className="bg-foreground/10 rounded px-4 py-2 text-sm font-medium">GrowthCo</div>
                <div className="bg-foreground/10 rounded px-4 py-2 text-sm font-medium">ScaleUp</div>
                <div className="bg-foreground/10 rounded px-4 py-2 text-sm font-medium">InnovateNow</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-card rounded-2xl p-8 border border-border shadow-2xl">
              {/* Dashboard Preview */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Lead Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm text-primary">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">New Leads</span>
                    </div>
                    <div className="text-2xl font-bold gradient-text">47</div>
                    <div className="text-xs text-foreground/60">+23% this week</div>
                  </div>

                  <div className="bg-background rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-5 w-5 text-accent" />
                      <span className="text-sm font-medium">Response Time</span>
                    </div>
                    <div className="text-2xl font-bold text-accent">2m</div>
                    <div className="text-xs text-foreground/60">Automated</div>
                  </div>
                </div>

                <div className="bg-gradient-primary rounded-lg p-4 text-background">
                  <div className="text-sm font-medium mb-1">Conversion Rate</div>
                  <div className="text-3xl font-bold">34.5%</div>
                  <div className="text-sm opacity-80">Industry average: 12%</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
