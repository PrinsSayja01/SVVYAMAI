import { ArrowRight, TrendingUp, Gamepad2, User, BarChart3, Box, Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const tools = [
    {
      id: 'growth-predictor',
      title: 'Growth Predictor',
      subtitle: 'AI-Powered Business Forecasting',
      description: 'Leverage advanced machine learning algorithms to predict your business growth trajectory with unprecedented accuracy.',
      icon: TrendingUp,
      href: '/business-growth-predictor',
      gradient: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      features: [
        'Revenue forecasting with 95% accuracy',
        'Market trend analysis and predictions',
        'Growth opportunity identification',
        'Risk assessment and mitigation strategies',
        'Competitive landscape analysis',
        'Investment planning recommendations'
      ],
      benefits: [
        'Make data-driven strategic decisions',
        'Anticipate market changes before competitors',
        'Optimize resource allocation',
        'Reduce business risks by 60%'
      ],
      demoAvailable: true,
      estimatedTime: '5-10 minutes'
    },
    {
      id: 'lead-game',
      title: 'Lead Generation Game',
      subtitle: 'Gamified Customer Acquisition',
      description: 'Transform lead generation into an engaging, interactive experience that converts prospects into loyal customers.',
      icon: Gamepad2,
      href: '/lead-generation-game',
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      features: [
        'Interactive quiz-based lead capture',
        'Personalized customer journey mapping',
        'Real-time engagement analytics',
        'Automated follow-up sequences',
        'Social sharing and referral systems',
        'Multi-channel integration'
      ],
      benefits: [
        'Increase lead quality by 40%',
        'Boost conversion rates by 3x',
        'Enhance user engagement time',
        'Reduce customer acquisition costs'
      ],
      demoAvailable: true,
      estimatedTime: '3-5 minutes'
    },
    {
      id: 'ai-persona',
      title: 'AI Persona Generator',
      subtitle: 'Deep Customer Intelligence',
      description: 'Create detailed, data-driven customer personas using advanced AI analysis of behavioral patterns and preferences.',
      icon: User,
      href: '/ai-persona-generator',
      gradient: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      features: [
        'Behavioral pattern analysis',
        'Psychographic profiling',
        'Purchase intent prediction',
        'Communication preference mapping',
        'Journey stage identification',
        'Personalization recommendations'
      ],
      benefits: [
        'Improve targeting accuracy by 85%',
        'Increase message relevance',
        'Enhance customer satisfaction',
        'Optimize marketing spend efficiency'
      ],
      demoAvailable: true,
      estimatedTime: '7-12 minutes'
    },
    {
      id: 'analytics',
      title: 'Analytics Dashboard',
      subtitle: 'Real-Time Business Intelligence',
      description: 'Comprehensive analytics platform providing actionable insights across all business operations and customer touchpoints.',
      icon: BarChart3,
      href: '/analytics-dashboard',
      gradient: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      features: [
        'Real-time performance monitoring',
        'Predictive analytics and forecasting',
        'Custom KPI tracking',
        'Automated report generation',
        'Cross-platform data integration',
        'Advanced visualization tools'
      ],
      benefits: [
        'Make faster, informed decisions',
        'Identify trends before they impact business',
        'Optimize performance across all channels',
        'Save 15+ hours weekly on reporting'
      ],
      demoAvailable: true,
      estimatedTime: '8-15 minutes'
    },
    {
      id: '3d-showcase',
      title: '3D Showcase',
      subtitle: 'Immersive Experience Gallery',
      description: 'Interactive 3D visualization platform showcasing success stories, use cases, and product demonstrations.',
      icon: Box,
      href: '/use-case-3d-carousel',
      gradient: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950/20',
      features: [
        'Interactive 3D environments',
        'Immersive case study presentations',
        'Virtual product demonstrations',
        'Animated success metrics',
        'Multi-perspective viewing',
        'Social sharing capabilities'
      ],
      benefits: [
        'Increase engagement by 200%',
        'Improve information retention',
        'Create memorable brand experiences',
        'Differentiate from competitors'
      ],
      demoAvailable: true,
      estimatedTime: '5-8 minutes'
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

        <Tabs defaultValue="growth-predictor" className="w-full">
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 w-full h-auto p-1 bg-muted/50 rounded-xl mb-8">
            {tools.map((tool) => (
              <TabsTrigger
                key={tool.id}
                value={tool.id}
                className="flex flex-col items-center gap-2 p-3 sm:p-4 data-[state=active]:bg-background data-[state=active]:shadow-md rounded-lg transition-all duration-300"
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${tool.gradient} flex items-center justify-center`}>
                  <tool.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-center leading-tight">{tool.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tools.map((tool) => (
            <TabsContent key={tool.id} value={tool.id} className="mt-6">
              <Card className="border-2 border-primary/10 hover:border-primary/20 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center`}>
                        <tool.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl sm:text-2xl md:text-3xl gradient-text mb-1">
                          {tool.title}
                        </CardTitle>
                        <CardDescription className="text-base sm:text-lg text-primary font-medium">
                          {tool.subtitle}
                        </CardDescription>
                      </div>
                    </div>
                    {tool.demoAvailable && (
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-xs sm:text-sm text-muted-foreground">
                          Demo available
                        </span>
                        <span className="text-xs text-muted-foreground">
                          ~{tool.estimatedTime}
                        </span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-foreground">Key Features</h4>
                      <ul className="space-y-2">
                        {tool.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm sm:text-base">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tool.gradient} mt-2 flex-shrink-0`} />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-foreground">Benefits</h4>
                      <ul className="space-y-2">
                        {tool.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm sm:text-base">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tool.gradient} mt-2 flex-shrink-0`} />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/50">
                    <Button 
                      size="lg" 
                      className="flex-1 btn-primary text-sm sm:text-base"
                      onClick={() => window.location.href = tool.href}
                    >
                      Launch {tool.title}
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Button>
                    {tool.demoAvailable && (
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="flex-1 text-sm sm:text-base"
                        onClick={() => window.location.href = tool.href}
                      >
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Watch Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

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