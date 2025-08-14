
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Calendar, Phone, MessageSquare, Mail, MapPin, Clock, Zap, Brain, Network, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [currentBranch, setCurrentBranch] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const neuralBranches = [
    "Analyzing your business patterns...",
    "Optimizing lead capture strategies...", 
    "Evolving conversion algorithms...",
    "Self-learning customer insights..."
  ];

  // Auto-rotate neural activity
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBranch((prev) => (prev + 1) % neuralBranches.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="fixed inset-0 neural-network-bg opacity-10 pointer-events-none"></div>
      
      {/* Floating Data Streams */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="data-stream-1"></div>
        <div className="data-stream-2"></div>
        <div className="data-stream-3"></div>
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full neural-pulse opacity-60"></div>
        <div className="absolute bottom-40 right-20 w-6 h-6 bg-accent rounded-full neural-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 right-40 w-3 h-3 bg-secondary rounded-full neural-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      <Header />
      
      <div className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container-width section-padding">
            <div className="text-center animate-fade-up">
              {/* AI Core */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-primary rounded-full neural-pulse shadow-2xl"></div>
                <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-primary rounded-full quantum-spin"></div>
                </div>
                {/* Orbiting particles */}
                <div className="absolute inset-0">
                  <div className="absolute w-3 h-3 bg-primary rounded-full orbital-path-1"></div>
                  <div className="absolute w-2 h-2 bg-accent rounded-full orbital-path-2"></div>
                  <div className="absolute w-1.5 h-1.5 bg-secondary rounded-full orbital-path-3"></div>
                </div>
              </div>

              <h1 className="hero-title font-bold mb-6 text-reveal">
                <span className="gradient-text text-shimmer floating-element">Svvayam AI</span>{' '}
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground/70 font-serif block sm:inline">(स्वयम्)</span>
                <br />
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-medium block mt-4">
                  "Self-driven. Self-aware. Self-evolving."
                </span>
              </h1>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 sm:p-6 mb-8 smart-hover interactive-glow max-w-2xl mx-auto">
                <p className="text-sm sm:text-base text-primary font-medium mb-2">
                  From Sanskrit "स्वयम्" meaning automatic intelligence
                </p>
                <p className="text-xs sm:text-sm text-foreground/80">
                  Connect with the autonomous AI that evolves your business growth
                </p>
              </div>
              
              {/* Neural Activity Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Brain className="w-5 h-5 text-primary neural-pulse" />
                  <span className="text-sm text-primary font-medium">Neural Activity</span>
                </div>
                <div className="text-lg font-semibold gradient-text transition-all duration-500 consciousness-wave">
                  {neuralBranches[currentBranch]}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods Grid */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container-width section-padding">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {/* Neural Connection Form */}
              <Card className="md:col-span-2 glassmorphism border-primary/20 p-6 lg:p-8 relative overflow-hidden animate-fade-up">
                <div className="absolute inset-0 neural-network-bg opacity-5"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center neural-pulse">
                      <Network className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold gradient-text">Neural Connection</h3>
                      <p className="text-sm text-foreground/60">Establish direct link with Svvayam AI</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="glassmorphism border-primary/20 focus:border-primary"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="glassmorphism border-primary/20 focus:border-primary"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Company</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="glassmorphism border-primary/20 focus:border-primary"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="glassmorphism border-primary/20 focus:border-primary min-h-32"
                        placeholder="Tell us about your business goals and how Svvayam AI can help you evolve..."
                      />
                    </div>

                    <Button type="submit" className="w-full btn-primary liquid-button group">
                      Initiate Neural Connection
                      <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    </Button>
                  </form>
                </div>
              </Card>

              {/* Quick Connect Methods */}
              <div className="space-y-6">
                <Card className="glassmorphism border-accent/20 p-6 smart-hover quantum-shift animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold">Strategy Session</h4>
                  </div>
                  <p className="text-sm text-foreground/70 mb-4">
                    30-minute AI evolution consultation
                  </p>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Schedule Now
                  </Button>
                </Card>

                <Card className="glassmorphism border-secondary/20 p-6 smart-hover quantum-shift animate-fade-up" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <h4 className="text-lg font-semibold">Direct Line</h4>
                  </div>
                  <p className="text-sm text-foreground/70 mb-2">
                    Immediate AI assistance
                  </p>
                  <div className="text-lg font-bold text-secondary mb-3">
                    +1 (AI) SVVAYAM
                  </div>
                  <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10">
                    Call Now
                  </Button>
                </Card>

                <Card className="glassmorphism border-primary/20 p-6 smart-hover quantum-shift animate-fade-up" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center neural-pulse">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">Priority Access</h4>
                  </div>
                  <p className="text-sm text-foreground/70 mb-4">
                    Fast-track AI integration
                  </p>
                  <Button className="w-full btn-primary">
                    Apply Now
                  </Button>
                </Card>
              </div>
            </div>

            {/* Location & Hours */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glassmorphism border-border/50 p-6 lg:p-8 animate-fade-up holographic-shift" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Neural Headquarters</h3>
                </div>
                <div className="space-y-3 text-foreground/80">
                  <p>Global AI Network</p>
                  <p>Cloud Infrastructure Cluster 7</p>
                  <p>Autonomous Operation Center</p>
                  <p className="text-sm text-primary">Available worldwide through neural connections</p>
                </div>
              </Card>

              <Card className="glassmorphism border-border/50 p-6 lg:p-8 animate-fade-up holographic-shift" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold">AI Availability</h3>
                </div>
                <div className="space-y-3 text-foreground/80">
                  <p>24/7 Autonomous Operation</p>
                  <p>Self-Learning: Continuous</p>
                  <p>Human Support: Mon-Fri 9AM-6PM EST</p>
                  <p className="text-sm text-accent">AI never sleeps, always evolving</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
          <div className="container-width section-padding relative z-10">
            <div className="text-center animate-fade-up">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-primary rounded-full neural-pulse"></div>
                <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-primary rounded-full quantum-spin"></div>
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
                Ready to Evolve Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
                Join the autonomous intelligence revolution. Let Svvayam AI transform your business operations while you focus on growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary liquid-button group px-8 py-4 text-lg">
                  Activate Svvayam AI
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg smart-hover">
                  <Brain className="mr-2 w-5 h-5" />
                  Explore AI Capabilities
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
