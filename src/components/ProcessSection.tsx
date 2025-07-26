
import { Card } from '@/components/ui/card';
import { Search, Users, Calendar, ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      subtitle: "Understanding Your Business",
      description: "We dive deep into your business model, target audience, and current challenges to create a customized strategy.",
      details: [
        "Market analysis & competitor research",
        "Target audience identification",
        "Current funnel audit",
        "Goal setting & KPI definition"
      ],
      color: "text-agency-blue",
      bgColor: "bg-agency-blue/10",
      borderColor: "border-agency-blue/30"
    },
    {
      number: "02",
      icon: Users,
      title: "Strategy",
      subtitle: "Custom Plan Development",
      description: "Based on our findings, we develop a comprehensive strategy tailored to your specific needs and objectives.",
      details: [
        "Custom automation workflows",
        "Content strategy creation",
        "Technology stack selection",
        "Timeline & milestone planning"
      ],
      color: "text-agency-blue",
      bgColor: "bg-agency-blue/10",
      borderColor: "border-agency-blue/30"
    },
    {
      number: "03",
      icon: Calendar,
      title: "Implementation",
      subtitle: "System Setup & Launch",
      description: "Our team builds and implements your complete lead generation system with rigorous testing and optimization.",
      details: [
        "Website design & development",
        "Automation system setup",
        "Integrations & testing",
        "Training & documentation"
      ],
      color: "text-agency-purple",
      bgColor: "bg-agency-purple/10",
      borderColor: "border-agency-purple/30"
    },
    {
      number: "04",
      icon: ArrowRight,
      title: "Optimization",
      subtitle: "Ongoing Improvements",
      description: "We continuously monitor, analyze, and optimize your system to maximize results and ROI.",
      details: [
        "Performance monitoring",
        "A/B testing & optimization",
        "Monthly strategy reviews",
        "Scaling & expansion planning"
      ],
      color: "text-agency-orange",
      bgColor: "bg-agency-orange/10",
      borderColor: "border-agency-orange/30"
    }
  ];

  return (
    <section 
      id="process" 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/lovable-uploads/ac09df35-dc80-4459-992a-564f45d01330.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay for readability */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="container-width section-padding relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-reveal">
            Our Proven 4-Step Process
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto breathing">
            From discovery to optimization, we follow a systematic approach that ensures your lead generation machine delivers exceptional results.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className={`bg-card border ${step.borderColor} p-8 smart-hover interactive-glow magnetic-field glassmorphism`}>
                <div className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 ${step.bgColor} border-4 ${step.borderColor} rounded-full flex items-center justify-center bg-background shadow-lg interactive-glow breathing fractal-bg`}>
                      <span className={`text-xl font-bold ${step.color}`}>{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center floating-element`}>
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold magnetic-hover">{step.title}</h3>
                        <p className={`${step.color} font-medium text-shimmer`}>{step.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-3 animate-intelligent-hover" style={{ animationDelay: `${detailIndex * 0.1}s` }}>
                          <div className={`w-1.5 h-1.5 ${step.bgColor} rounded-full smart-pulse`}></div>
                          <span className="text-sm text-foreground/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Timeline Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-up morphing-bg rounded-2xl p-8" style={{ animationDelay: '0.8s' }}>
          <div className="text-center smart-hover">
            <div className="text-3xl font-bold gradient-text text-shimmer mb-2">30 Days</div>
            <div className="text-foreground/80">Average Setup Time</div>
          </div>
          <div className="text-center smart-hover">
            <div className="text-3xl font-bold gradient-text text-shimmer mb-2">90%</div>
            <div className="text-foreground/80">Client Satisfaction</div>
          </div>
          <div className="text-center smart-hover">
            <div className="text-3xl font-bold gradient-text text-shimmer mb-2">24/7</div>
            <div className="text-foreground/80">Ongoing Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
