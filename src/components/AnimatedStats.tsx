import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, Zap, Target } from 'lucide-react';

const AnimatedStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    companies: 0,
    accuracy: 0,
    efficiency: 0,
    growth: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Companies Transformed',
      key: 'companies' as keyof typeof counts,
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: Target,
      value: 98,
      suffix: '%',
      label: 'AI Accuracy Rate',
      key: 'accuracy' as keyof typeof counts,
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Zap,
      value: 75,
      suffix: '%',
      label: 'Process Efficiency',
      key: 'efficiency' as keyof typeof counts,
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: TrendingUp,
      value: 300,
      suffix: '%',
      label: 'Average Growth',
      key: 'growth' as keyof typeof counts,
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Animate numbers
          stats.forEach((stat, index) => {
            setTimeout(() => {
              let current = 0;
              const increment = stat.value / 60; // 60 frames for smooth animation
              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                  current = stat.value;
                  clearInterval(timer);
                }
                setCounts(prev => ({
                  ...prev,
                  [stat.key]: Math.floor(current),
                }));
              }, 16); // ~60fps
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gradient-to-r from-background via-secondary/10 to-background relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container-width relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Powering Business Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI solutions deliver measurable results across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`glass-card p-6 text-center group hover:scale-105 transition-all duration-300 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-3xl font-bold gradient-text mb-2">
                {counts[stat.key]}{stat.suffix}
              </div>
              
              <p className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;