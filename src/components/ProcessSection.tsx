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
    <section id="process" className="py-24 bg-card/30">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Proven 4-Step Process
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            From discovery to optimization, we follow a systematic approach that ensures your lead generation machine delivers exceptional results.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary via-accent to-agency-orange"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`flex flex-col md:flex-row items-center gap-8 animate-fade-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Left Content (odd) or Right Content (even) */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                  <Card className={`bg-card border ${step.borderColor} p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center`}>
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                        <p className={`${step.color} font-medium`}>{step.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-3">
                          <div className={`w-1.5 h-1.5 ${step.bgColor} rounded-full`}></div>
                          <span className="text-sm text-foreground/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                {/* Center Number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 ${step.bgColor} border-4 ${step.borderColor} rounded-full flex items-center justify-center bg-background shadow-lg`}>
                    <span className={`text-xl font-bold ${step.color}`}>{step.number}</span>
                  </div>
                </div>

                {/* Right Space (odd) or Left Space (even) */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">30 Days</div>
            <div className="text-foreground/80">Average Setup Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">90%</div>
            <div className="text-foreground/80">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-foreground/80">Ongoing Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
