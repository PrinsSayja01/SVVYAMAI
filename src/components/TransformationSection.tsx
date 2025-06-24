
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, Check, ArrowRight, Clock, Users, Target } from 'lucide-react';

const TransformationSection = () => {
  const beforeItems = [
    {
      icon: Clock,
      title: "Manual Lead Capture",
      description: "Spending hours manually following up with prospects and losing leads"
    },
    {
      icon: Users,
      title: "Inconsistent Results",
      description: "Unpredictable lead flow with feast or famine cycles"
    },
    {
      icon: Target,
      title: "Low-Quality Leads",
      description: "Wasting time on unqualified prospects who never convert"
    }
  ];

  const afterItems = [
    {
      icon: Clock,
      title: "24/7 Automated Systems",
      description: "AI-powered systems capture and nurture leads around the clock"
    },
    {
      icon: Users,
      title: "Predictable Lead Flow",
      description: "Consistent stream of high-quality prospects every month"
    },
    {
      icon: Target,
      title: "Pre-Qualified Prospects",
      description: "Only speak with leads who are ready and able to buy"
    }
  ];

  return (
    <section className="py-24 particle-system morphing-bg">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-up magnetic-field">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-reveal magnetic-hover">
            Transform Your Business
            <span className="gradient-text text-shimmer floating-element"> Forever</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto breathing animate-intelligent-hover">
            See the dramatic difference our lead generation machine makes for businesses like yours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Before - Left Side */}
          <div className="animate-slide-left magnetic-field">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-destructive/20 border border-destructive/30 rounded-full px-6 py-3 mb-4 smart-hover interactive-glow breathing">
                <X className="w-5 h-5 text-destructive floating-element" />
                <span className="font-semibold text-destructive text-shimmer">BEFORE</span>
              </div>
              <h3 className="text-3xl font-bold text-foreground/70 magnetic-hover">The Struggle</h3>
            </div>

            <div className="space-y-6">
              {beforeItems.map((item, index) => (
                <Card 
                  key={index}
                  className="glassmorphism border-destructive/20 p-6 relative overflow-hidden smart-hover animate-intelligent-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-destructive/10 to-transparent particle-system"></div>
                  
                  <div className="relative z-10 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center flex-shrink-0 interactive-glow breathing">
                      <item.icon className="w-6 h-6 text-destructive/70 floating-element" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground/70 magnetic-hover">{item.title}</h4>
                      <p className="text-foreground/60 leading-relaxed breathing">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Struggle Stats */}
            <div className="mt-8 p-6 glassmorphism border border-destructive/20 rounded-xl smart-hover magnetic-field">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "5-10", label: "Leads/Month" },
                  { value: "20+", label: "Hours/Week" },
                  { value: "2-5%", label: "Conversion" }
                ].map((stat, index) => (
                  <div key={index} className="animate-intelligent-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-2xl font-bold text-destructive/70 text-shimmer floating-element">{stat.value}</div>
                    <div className="text-sm text-foreground/60 breathing">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* After - Right Side */}
          <div className="animate-slide-right magnetic-field">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/30 rounded-full px-6 py-3 mb-4 smart-hover interactive-glow breathing">
                <Check className="w-5 h-5 text-primary floating-element" />
                <span className="font-semibold text-primary text-shimmer">AFTER</span>
              </div>
              <h3 className="text-3xl font-bold gradient-text text-shimmer magnetic-hover floating-element">The Success</h3>
            </div>

            <div className="space-y-6">
              {afterItems.map((item, index) => (
                <Card 
                  key={index}
                  className="glassmorphism border-primary/20 p-6 relative overflow-hidden smart-hover interactive-glow magnetic-field animate-intelligent-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Success overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent particle-system"></div>
                  
                  <div className="relative z-10 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 interactive-glow breathing">
                      <item.icon className="w-6 h-6 text-primary floating-element" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 magnetic-hover text-shimmer">{item.title}</h4>
                      <p className="text-foreground/80 leading-relaxed breathing">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Success Stats */}
            <div className="mt-8 p-6 bg-gradient-primary rounded-xl text-background interactive-glow magnetic-field fractal-bg">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "150+", label: "Leads/Month" },
                  { value: "5", label: "Hours/Week" },
                  { value: "35%", label: "Conversion" }
                ].map((stat, index) => (
                  <div key={index} className="animate-intelligent-hover floating-element" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-2xl font-bold breathing">{stat.value}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Center Arrow */}
        <div className="flex justify-center my-12">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center smart-pulse interactive-glow magnetic-field floating-element fractal-bg">
            <ArrowRight className="w-8 h-8 text-background breathing" />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-up magnetic-field morphing-bg rounded-2xl p-8" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-reveal magnetic-hover">
            Ready for Your Transformation?
          </h3>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto breathing animate-intelligent-hover">
            Join 200+ businesses that have transformed their lead generation with our proven system.
          </p>
          <Button className="liquid-button group magnetic-field interactive-glow">
            Start Your Transformation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform floating-element" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
