
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
    <section className="py-24">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Business
            <span className="gradient-text"> Forever</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            See the dramatic difference our lead generation machine makes for businesses like yours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Before - Left Side */}
          <div className="animate-slide-left">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-destructive/20 border border-destructive/30 rounded-full px-6 py-3 mb-4">
                <X className="w-5 h-5 text-destructive" />
                <span className="font-semibold text-destructive">BEFORE</span>
              </div>
              <h3 className="text-3xl font-bold text-foreground/70">The Struggle</h3>
            </div>

            <div className="space-y-6">
              {beforeItems.map((item, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 border-destructive/20 p-6 relative overflow-hidden"
                >
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-destructive/10 to-transparent"></div>
                  
                  <div className="relative z-10 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-destructive/70" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground/70">{item.title}</h4>
                      <p className="text-foreground/60 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Struggle Stats */}
            <div className="mt-8 p-6 bg-card/30 border border-destructive/20 rounded-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-destructive/70">5-10</div>
                  <div className="text-sm text-foreground/60">Leads/Month</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-destructive/70">20+</div>
                  <div className="text-sm text-foreground/60">Hours/Week</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-destructive/70">2-5%</div>
                  <div className="text-sm text-foreground/60">Conversion</div>
                </div>
              </div>
            </div>
          </div>

          {/* After - Right Side */}
          <div className="animate-slide-right">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/30 rounded-full px-6 py-3 mb-4">
                <Check className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">AFTER</span>
              </div>
              <h3 className="text-3xl font-bold gradient-text">The Success</h3>
            </div>

            <div className="space-y-6">
              {afterItems.map((item, index) => (
                <Card 
                  key={index}
                  className="bg-card border-primary/20 p-6 relative overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  {/* Success overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
                  
                  <div className="relative z-10 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                      <p className="text-foreground/80 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Success Stats */}
            <div className="mt-8 p-6 bg-gradient-primary rounded-xl text-background">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-sm opacity-90">Leads/Month</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm opacity-90">Hours/Week</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">35%</div>
                  <div className="text-sm opacity-90">Conversion</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Arrow */}
        <div className="flex justify-center my-12">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse">
            <ArrowRight className="w-8 h-8 text-background" />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Transformation?
          </h3>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join 200+ businesses that have transformed their lead generation with our proven system.
          </p>
          <Button className="btn-primary group">
            Start Your Transformation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
