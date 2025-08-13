
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Phone, MessageSquare, Shield, Star, Users, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [currentCompany, setCurrentCompany] = useState(0);
  
  const trustedCompanies = [
    "TechCorp",
    "GrowthCo", 
    "ScaleUp",
    "InnovateNow"
  ];

  // Auto-rotate trusted companies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompany((prev) => (prev + 1) % trustedCompanies.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container-width section-padding">
            <div className="text-center animate-fade-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Get In Touch With Our
                <span className="gradient-text"> Lead Generation Experts</span>
              </h1>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
                Ready to transform your business? Choose the best way to connect with us.
              </p>
              
              {/* Trusted Companies Auto-Rotate */}
              <div className="mb-8">
                <p className="text-sm text-foreground/60 mb-2">Trusted by 200+ Growing Businesses</p>
                <div className="text-2xl font-bold gradient-text transition-all duration-500">
                  {trustedCompanies[currentCompany]}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Sections */}
        <section className="py-24">
          <div className="container-width section-padding">
            
            {/* Section 1: Still Have Questions */}
            <div className="mb-24 animate-fade-up">
              <div className="bg-gradient-primary rounded-3xl p-12 text-background relative overflow-hidden">
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
                
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Still Have Questions?</h2>
                  <p className="text-xl opacity-90 mb-8">
                    Schedule a free strategy call to discuss your specific situation and see if we're the right fit.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-agency-purple text-background hover:bg-agency-purple/90 px-8 py-4 text-lg font-semibold">
                      <Calendar className="mr-2 w-5 h-5" />
                      Schedule Free Call
                    </Button>
                    <Button variant="outline" className="border-background/20 text-background hover:bg-background/10 px-8 py-4 text-lg font-semibold">
                      <MessageSquare className="mr-2 w-5 h-5" />
                      Send Us a Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Lead Generation Machine Awaits */}
            <div className="mb-24 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card border-2 border-agency-orange/30 rounded-3xl p-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Your Lead Generation Machine Awaits
                </h2>
                <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
                  Join the exclusive group of businesses generating 300%+ more leads with our proven automation system.
                </p>

                {/* Urgency Elements */}
                <div className="flex items-center justify-center space-x-2 mb-8">
                  <Clock className="w-5 h-5 text-agency-orange" />
                  <span className="text-lg font-semibold text-agency-orange">Only 2 spots remaining this quarter</span>
                </div>

                {/* Primary CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button className="bg-agency-orange text-background hover:bg-agency-orange/90 px-8 py-4 text-lg font-semibold group">
                    Claim Your Spot Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="border-agency-orange text-agency-orange hover:bg-agency-orange/10 px-8 py-4 text-lg font-semibold">
                    Schedule Strategy Call
                  </Button>
                </div>

                {/* Trust Elements */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/80">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-agency-green" />
                    <span>90-Day Guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-agency-orange" />
                    <span>98% Client Satisfaction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-agency-blue" />
                    <span>200+ Success Stories</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Ready to Build */}
            <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-br from-agency-blue/20 to-agency-green/20 rounded-3xl p-12 text-center border border-agency-blue/30">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Build Your Lead Generation Machine?
                </h2>
                <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
                  Let's create a custom system that captures, nurtures, and converts high-quality leads for your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-agency-blue text-background hover:bg-agency-blue/90 px-8 py-4 text-lg font-semibold">
                    <ArrowRight className="mr-2 w-5 h-5" />
                    Get Started Today
                  </Button>
                  <Button variant="outline" className="border-agency-green text-agency-green hover:bg-agency-green/10 px-8 py-4 text-lg font-semibold">
                    <Calendar className="mr-2 w-5 h-5" />
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-24">
              <Card className="bg-card border-border p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-up" style={{ animationDelay: '0.6s' }}>
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

              <Card className="bg-card border-border p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-up" style={{ animationDelay: '0.8s' }}>
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

              <Card className="bg-card border-border p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-up" style={{ animationDelay: '1s' }}>
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
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
