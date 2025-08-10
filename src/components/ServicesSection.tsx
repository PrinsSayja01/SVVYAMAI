
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
      {/* AI Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/e8749392-108e-4985-8aa4-1df5802c4127.png')`
          }}
        ></div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]"></div>
        
        {/* Additional blur effects and gradients for depth */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-l from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-t from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 backdrop-blur-[0.5px] bg-background/20"></div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16 animate-fade-up">
          <h2 className="hero-title font-bold mb-4 sm:mb-6 text-reveal">
            The 3 Pillars of Your
            <span className="gradient-text text-shimmer"> AI Automation Machine</span>
          </h2>
          <p className="text-responsive-base text-foreground/90 max-w-3xl mx-auto breathing">
            Our proven methodology combines cutting-edge technology, strategic design, and powerful positioning to create an unstoppable AI automation system.
          </p>
        </div>

        <div className="grid-responsive-cards mb-12 sm:mb-14 lg:mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`bg-card/90 backdrop-blur-md border ${service.borderColor} p-4 sm:p-6 lg:p-8 smart-hover interactive-glow magnetic-field particle-system animate-fade-up relative overflow-hidden shadow-lg`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-card/60 to-card/40 pointer-events-none"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${service.bgColor} backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 smart-pulse floating-element`}>
                  <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${service.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 magnetic-hover">{service.title}</h3>
                <p className={`${service.color} font-medium mb-3 sm:mb-4 text-shimmer text-sm sm:text-base`}>{service.subtitle}</p>

                {/* Description */}
                <p className="text-sm sm:text-base text-foreground/90 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 sm:space-x-3 animate-intelligent-hover" style={{ animationDelay: `${featureIndex * 0.1}s` }}>
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${service.bgColor} rounded-full smart-pulse flex-shrink-0`}></div>
                      <span className="text-xs sm:text-sm text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="ghost" className={`w-full liquid-button group/btn hover:${service.bgColor} hover:${service.color} text-sm sm:text-base`}>
                  Learn More
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-up fractal-bg rounded-xl sm:rounded-2xl relative overflow-hidden" style={{ animationDelay: '0.6s' }}>
          {/* CTA background with blur */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl"></div>
          
          <div className="bg-gradient-primary rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-background glassmorphism relative backdrop-blur-sm">
            <h3 className="text-responsive-lg font-bold mb-3 sm:mb-4 text-reveal">
              Ready to Build Your AI Automation Machine?
            </h3>
            <p className="text-sm sm:text-base lg:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto breathing">
              Let's create a custom AI system that captures, nurtures, and converts high-quality opportunities for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button className="btn-responsive liquid-button bg-agency-blue text-background hover:bg-agency-blue/90 font-semibold magnetic-field">
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button variant="outline" className="btn-responsive border-background/20 text-background hover:bg-background/10 font-semibold smart-hover backdrop-blur-sm">
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
