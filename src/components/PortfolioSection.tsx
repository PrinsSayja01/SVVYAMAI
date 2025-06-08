
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, TrendingUp } from 'lucide-react';

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'saas', label: 'SaaS' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'consulting', label: 'Consulting' },
    { id: 'healthcare', label: 'Healthcare' }
  ];

  const projects = [
    {
      id: 1,
      title: "TechFlow SaaS Platform",
      category: "saas",
      industry: "Software",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      results: {
        metric: "Lead Increase",
        value: "450%",
        timeframe: "6 months"
      },
      description: "Complete lead generation overhaul for B2B SaaS company resulting in explosive growth.",
      tags: ["AI Automation", "Web Design", "Lead Nurturing"]
    },
    {
      id: 2,
      title: "HealthCare Plus",
      category: "healthcare",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      results: {
        metric: "ROI Increase",
        value: "380%",
        timeframe: "4 months"
      },
      description: "Patient acquisition system for healthcare provider with automated appointment booking.",
      tags: ["Patient Portal", "Automation", "CRM Integration"]
    },
    {
      id: 3,
      title: "RetailMax E-commerce",
      category: "ecommerce",
      industry: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      results: {
        metric: "Revenue Growth",
        value: "$2.3M",
        timeframe: "8 months"
      },
      description: "E-commerce lead generation and customer retention system with AI recommendations.",
      tags: ["E-commerce", "AI Personalization", "Email Marketing"]
    },
    {
      id: 4,
      title: "ConsultPro Services",
      category: "consulting",
      industry: "Consulting",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      results: {
        metric: "Lead Quality",
        value: "290%",
        timeframe: "3 months"
      },
      description: "Premium consulting firm lead qualification and nurturing system.",
      tags: ["Lead Scoring", "Consultation Booking", "Premium Positioning"]
    },
    {
      id: 5,
      title: "FinanceGrow Solutions",
      category: "saas",
      industry: "Fintech",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      results: {
        metric: "Conversion Rate",
        value: "340%",
        timeframe: "5 months"
      },
      description: "Financial services lead generation with compliance-ready automation systems.",
      tags: ["Compliance", "Financial CRM", "Automated Workflows"]
    },
    {
      id: 6,
      title: "EduTech Academy",
      category: "saas",
      industry: "Education",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      results: {
        metric: "Student Acquisition",
        value: "520%",
        timeframe: "7 months"
      },
      description: "Online education platform with automated student onboarding and engagement.",
      tags: ["Education", "Student Portal", "Learning Management"]
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-card/30">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success Stories &
            <span className="gradient-text"> Case Studies</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Real results from real businesses across diverse industries. See how we've helped companies achieve extraordinary growth.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-primary/10 hover:border-primary/30'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-card border-border overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.industry}
                  </span>
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div className="bg-gradient-primary/10 rounded-lg p-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">
                      {project.results.value}
                    </div>
                    <div className="text-sm text-foreground/80">
                      {project.results.metric}
                    </div>
                    <div className="text-xs text-foreground/60 mt-1">
                      in {project.results.timeframe}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button variant="ghost" className="w-full group/btn">
                  View Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">200+</div>
            <div className="text-foreground/80">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">15+</div>
            <div className="text-foreground/80">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">$50M+</div>
            <div className="text-foreground/80">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">98%</div>
            <div className="text-foreground/80">Client Retention</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Be Our Next Success Story?
          </h3>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's create a custom lead generation system that delivers results like these for your business.
          </p>
          <Button className="btn-primary group">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
