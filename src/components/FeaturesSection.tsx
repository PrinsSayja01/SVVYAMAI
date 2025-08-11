import { ArrowRight, TrendingUp, Gamepad2, User, BarChart3, Box } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Growth Predictor',
      description: 'AI-powered business growth forecasting and strategic insights',
      icon: TrendingUp,
      href: '/business-growth-predictor',
      gradient: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20'
    },
    {
      title: 'Lead Game',
      description: 'Gamified lead generation experience with interactive challenges',
      icon: Gamepad2,
      href: '/lead-generation-game',
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20'
    },
    {
      title: 'AI Persona',
      description: 'Generate detailed customer personas using advanced AI analysis',
      icon: User,
      href: '/ai-persona-generator',
      gradient: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20'
    },
    {
      title: 'Analytics',
      description: 'Comprehensive dashboard with real-time business intelligence',
      icon: BarChart3,
      href: '/analytics-dashboard',
      gradient: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20'
    },
    {
      title: '3D Showcase',
      description: 'Interactive 3D visualization of use cases and success stories',
      icon: Box,
      href: '/use-case-3d-carousel',
      gradient: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950/20'
    }
  ];

  return (
    <section className="section-padding section-spacing bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container-width">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
            Interactive AI Tools
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of Svvayam AI through our suite of interactive tools designed to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative overflow-hidden rounded-2xl ${feature.bgColor} border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2`}
            >
              <div className="p-4 sm:p-6 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground line-clamp-3">
                    {feature.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-4 pt-4 border-t border-border/30">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    onClick={() => window.location.href = feature.href}
                  >
                    Try Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm sm:text-base text-muted-foreground mb-6">
            Ready to experience the full power of autonomous AI?
          </p>
          <Button size="lg" className="btn-primary text-sm sm:text-base px-6 sm:px-8">
            Activate Your AI Growth Engine
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;