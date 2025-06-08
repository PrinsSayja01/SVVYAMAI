
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Clock, Star } from 'lucide-react';

const PricingSection = () => {
  const features = [
    "Complete lead generation automation system",
    "Custom conversion-optimized website",
    "AI-powered chatbot and lead qualification",
    "Automated email nurturing sequences",
    "CRM setup and integration",
    "Landing pages and lead magnets",
    "Monthly performance reporting",
    "24/7 monitoring and optimization",
    "Dedicated account manager",
    "Ongoing strategy consultations"
  ];

  const bonuses = [
    "Lead generation audit ($2,500 value)",
    "Competitor analysis report ($1,500 value)",
    "Brand messaging guide ($1,000 value)",
    "90-day optimization guarantee"
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium Investment for
            <span className="gradient-text"> Premium Results</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            This isn't just another service—it's a complete business transformation. Our premium positioning reflects the exceptional value we deliver.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Urgency Banner */}
          <div className="bg-gradient-primary rounded-2xl p-6 mb-8 text-background text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Limited Availability</span>
            </div>
            <p className="text-lg">Only 5 spots available this quarter - We limit our client intake to ensure exceptional results</p>
          </div>

          {/* Main Pricing Card */}
          <Card className="bg-card border-primary/30 p-8 md:p-12 relative overflow-hidden animate-scale-in" style={{ animationDelay: '0.4s' }}>
            {/* Premium Badge */}
            <div className="absolute top-6 right-6">
              <div className="bg-gradient-primary rounded-full p-3">
                <Star className="w-6 h-6 text-background" />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Investment Details */}
              <div>
                <h3 className="text-3xl font-bold mb-4">Complete Lead Generation System</h3>
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-5xl font-bold gradient-text">$3,500</span>
                    <span className="text-xl text-foreground/60">/month</span>
                  </div>
                  <p className="text-foreground/80">6-month minimum commitment</p>
                </div>

                {/* Value Proposition */}
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
                  <h4 className="font-semibold text-primary mb-3">What You Get:</h4>
                  <div className="space-y-3">
                    {features.slice(0, 5).map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI Calculator */}
                <div className="bg-gradient-primary rounded-lg p-6 text-background">
                  <h4 className="font-semibold mb-3">ROI Projection:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-2xl font-bold">300%+</div>
                      <div className="opacity-90">Average ROI</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">$21K</div>
                      <div className="opacity-90">Monthly Investment</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-background/20">
                    <div className="text-2xl font-bold">$84K+</div>
                    <div className="opacity-90">Expected Monthly Return</div>
                  </div>
                </div>
              </div>

              {/* Right: Complete Feature List */}
              <div>
                <h4 className="text-xl font-semibold mb-6">Everything Included:</h4>
                <div className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bonuses */}
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
                  <h4 className="font-semibold text-accent mb-4">Exclusive Bonuses (Limited Time):</h4>
                  <div className="space-y-3">
                    {bonuses.map((bonus, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Star className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{bonus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <Button className="w-full btn-primary group text-lg py-4">
                    Apply for Your Spot
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="w-full btn-secondary">
                    Schedule Strategy Call
                  </Button>
                </div>

                {/* Guarantee */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-foreground/80">
                    <strong className="text-primary">90-Day Guarantee:</strong> If you don't see a significant increase in qualified leads within 90 days, we'll work for free until you do.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Why Premium Pricing */}
          <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold mb-6">Why Premium Investment?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card/50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">Exclusive Access</h4>
                <p className="text-sm text-foreground/80">Limited client roster ensures personalized attention and exceptional results.</p>
              </div>
              <div className="bg-card/50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">Proven Systems</h4>
                <p className="text-sm text-foreground/80">Battle-tested strategies that have generated $50M+ for our clients.</p>
              </div>
              <div className="bg-card/50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">Premium Support</h4>
                <p className="text-sm text-foreground/80">Dedicated team, 24/7 monitoring, and ongoing optimization included.</p>
              </div>
            </div>
          </div>

          {/* Final Urgency */}
          <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-destructive mb-2">Don't Wait - Spots Fill Fast</h4>
              <p className="text-foreground/80 mb-4">
                We only take on 5 new clients per quarter to maintain our high standard of service. 
                Once these spots are filled, there's a waiting list.
              </p>
              <Button className="btn-primary">
                Reserve Your Spot Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
