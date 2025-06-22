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
      color: "text-agency-green",
      bgColor: "bg-agency-green/10",
      borderColor: "border-agency-green/30"
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
    <section id="services" className="py-24">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The 3 Pillars of Your
            <span className="gradient-text"> Lead Generation Machine</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Our proven methodology combines cutting-edge technology, strategic design, and powerful positioning to create an unstoppable lead generation system.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`bg-card border ${service.borderColor} p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl group animate-fade-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className={`${service.color} font-medium mb-4`}>{service.subtitle}</p>

              {/* Description */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 ${service.bgColor} rounded-full`}></div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="ghost" className={`w-full group/btn hover:${service.bgColor} hover:${service.color}`}>
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-background">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Lead Generation Machine?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's create a custom system that captures, nurtures, and converts high-quality leads for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-agency-blue text-background hover:bg-agency-blue/90 px-8 py-4 text-lg font-semibold">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-background/20 text-background hover:bg-background/10 px-8 py-4 text-lg font-semibold">
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
