
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Calendar, Search } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "AI Automation",
      subtitle: "Smart Lead Capture & Nurturing",
      description: "Advanced AI systems that work 24/7 to capture, qualify, and nurture leads through personalized automated sequences.",
      features: [
        "Intelligent chatbots and forms",
        "Automated email sequences",
        "Lead scoring and qualification",
        "CRM integration and management"
      ],
      color: "text-agency-blue",
      bgColor: "bg-agency-blue/10",
      borderColor: "border-agency-blue/30"
    },
    {
      icon: Calendar,
      title: "Web Design",
      subtitle: "Conversion-Optimized Websites",
      description: "High-converting websites designed specifically to turn visitors into leads with strategic design and optimization.",
      features: [
        "Mobile-responsive design",
        "A/B tested layouts",
        "Speed optimized performance",
        "SEO-ready architecture"
      ],
      color: "text-agency-blue",
      bgColor: "bg-agency-blue/10",
      borderColor: "border-agency-blue/30"
    },
    {
      icon: Search,
      title: "Brand Strategy",
      subtitle: "Complete Brand Positioning",
      description: "Comprehensive brand strategy that positions you as the premium choice in your market with compelling messaging.",
      features: [
        "Market positioning strategy",
        "Compelling brand messaging",
        "Visual identity design",
        "Content strategy development"
      ],
      color: "text-agency-purple",
      bgColor: "bg-agency-purple/10",
      borderColor: "border-agency-purple/30"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* AI-themed Background with Blur Effects */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/50"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-l from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-t from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Neural network pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-accent rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <line x1="25%" y1="25%" x2="75%" y2="33%" stroke="url(#lineGradient)" strokeWidth="1"/>
          <line x1="33%" y1="33%" x2="50%" y2="66%" stroke="url(#lineGradient)" strokeWidth="1"/>
          <line x1="66%" y1="25%" x2="20%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1"/>
          <line x1="75%" y1="66%" x2="25%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1"/>
        </svg>
        
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 backdrop-blur-[0.5px] bg-background/20"></div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-reveal">
            The 3 Pillars of Your
            <span className="gradient-text text-shimmer"> Lead Generation Machine</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto breathing">
            Our proven methodology combines cutting-edge technology, strategic design, and powerful positioning to create an unstoppable lead generation system.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`bg-card/80 backdrop-blur-sm border ${service.borderColor} p-8 smart-hover interactive-glow magnetic-field particle-system animate-fade-up relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-card/30 pointer-events-none"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 ${service.bgColor} backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 smart-pulse floating-element`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 magnetic-hover">{service.title}</h3>
                <p className={`${service.color} font-medium mb-4 text-shimmer`}>{service.subtitle}</p>

                {/* Description */}
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 animate-intelligent-hover" style={{ animationDelay: `${featureIndex * 0.1}s` }}>
                      <div className={`w-2 h-2 ${service.bgColor} rounded-full smart-pulse`}></div>
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="ghost" className={`w-full liquid-button group/btn hover:${service.bgColor} hover:${service.color}`}>
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-up fractal-bg rounded-2xl relative overflow-hidden" style={{ animationDelay: '0.6s' }}>
          {/* CTA background with blur */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl"></div>
          
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-background glassmorphism relative backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-reveal">
              Ready to Build Your Lead Generation Machine?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto breathing">
              Let's create a custom system that captures, nurtures, and converts high-quality leads for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="liquid-button bg-agency-blue text-background hover:bg-agency-blue/90 px-8 py-4 text-lg font-semibold magnetic-field">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-background/20 text-background hover:bg-background/10 px-8 py-4 text-lg font-semibold smart-hover backdrop-blur-sm">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
