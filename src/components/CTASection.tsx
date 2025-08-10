
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Clock, Star, Shield, Phone, Calendar, Users } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container-width section-padding">
        {/* Main CTA */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="bg-gradient-primary rounded-3xl p-12 md:p-16 text-background relative overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              >
                <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Background Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-background/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-background/10 rounded-full blur-xl"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your AI Automation Machine Awaits
              </h2>
              <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                Join the exclusive group of businesses generating 300%+ more leads with our proven automation system.
              </p>

              {/* Urgency Elements */}
              <div className="flex items-center justify-center space-x-2 mb-8">
                <Clock className="w-5 h-5" />
                <span className="text-lg font-semibold">Only 2 spots remaining this quarter</span>
              </div>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button className="bg-agency-orange text-background hover:bg-agency-orange/90 px-8 py-4 text-lg font-semibold text-center group">
                  Claim Your Spot Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-background/20 text-background hover:bg-background/10 px-8 py-4 text-lg font-semibold">
                  Schedule Strategy Call
                </Button>
              </div>

              {/* Trust Elements */}
              <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>90-Day Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>98% Client Satisfaction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>200+ Success Stories</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card border-border p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-agency-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-agency-purple" />
            </div>
            <h3 className="text-xl font-bold mb-4">Book a Strategy Call</h3>
            <p className="text-foreground/80 mb-6">
              Free 30-minute consultation to discuss your lead generation goals and see if we're the right fit.
            </p>
            <Button className="w-full bg-agency-purple hover:bg-agency-purple/90 text-background">
              Schedule Call
            </Button>
          </Card>

          <Card className="bg-card border-border p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-agency-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-agency-orange" />
            </div>
            <h3 className="text-xl font-bold mb-4">Call Us Direct</h3>
            <p className="text-foreground/80 mb-6">
              Speak with our team immediately. We're standing by to answer your questions and get you started.
            </p>
            <div className="text-2xl font-bold text-agency-orange mb-4">
              (555) 123-LEADS
            </div>
            <Button variant="outline" className="w-full border-agency-orange text-agency-orange hover:bg-agency-orange/10">
              Call Now
            </Button>
          </Card>

          <Card className="bg-card border-border p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-16 bg-agency-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ArrowRight className="w-8 h-8 text-agency-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4">Fast Track Application</h3>
            <p className="text-foreground/80 mb-6">
              Skip the wait. Fill out our priority application and we'll contact you within 24 hours.
            </p>
            <Button className="w-full bg-agency-blue hover:bg-agency-blue/90 text-background">
              Apply Now
            </Button>
          </Card>
        </div>

        {/* Risk Reversal */}
        <div className="bg-card/50 rounded-2xl p-8 md:p-12 text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-3xl font-bold mb-6">
            Zero Risk. All Reward.
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="w-6 h-6 text-agency-green mr-3" />
                90-Day Guarantee
              </h4>
              <p className="text-foreground/80">
                If you don't see a significant increase in qualified leads within 90 days, 
                we'll work for free until you do. That's how confident we are in our system.
              </p>
            </div>
            <div className="text-left">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Star className="w-6 h-6 text-agency-orange mr-3" />
                Success Guarantee
              </h4>
              <p className="text-foreground/80">
                We only succeed when you succeed. Our entire business model is built around 
                delivering measurable results that transform your business.
              </p>
            </div>
          </div>
        </div>

        {/* Final Urgency */}
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '1s' }}>
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-destructive mb-2">
              Don't Let This Opportunity Pass
            </h4>
            <p className="text-foreground/80 mb-4">
              Every day you wait is another day your competitors are getting ahead. 
              The businesses that act fast are the ones that dominate their markets.
            </p>
            <Button className="bg-agency-purple hover:bg-agency-purple/90 text-background">
              Secure Your Spot Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
