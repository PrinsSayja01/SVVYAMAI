
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      title: "CEO",
      company: "TechGrow Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "Svvyam AI transformed our business completely. We went from 5 leads per month to 150+ qualified prospects. The autonomous intelligence system saves us 20 hours per week.",
      results: "3000% increase in leads"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      title: "Founder",
      company: "ScaleUp Ventures",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "The ROI has been incredible. In just 6 months, we've generated over $500K in new revenue directly from their lead generation system. Best investment we've ever made.",
      results: "$500K+ new revenue"
    },
    {
      id: 3,
      name: "Emily Chen",
      title: "Marketing Director",
      company: "InnovateNow",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "Their systematic approach to lead generation is phenomenal. The quality of leads has improved dramatically, and our sales team is closing 40% more deals.",
      results: "40% higher close rate"
    },
    {
      id: 4,
      name: "David Rodriguez",
      title: "Owner",
      company: "GrowthCorp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "Working with Svvyam AI was a game-changer. The autonomous nurturing sequences convert 35% better than our old manual process.",
      results: "35% better conversion"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 morphing-bg particle-system">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-up magnetic-field">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-reveal magnetic-hover">
            What Our Clients Are Saying
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto breathing animate-intelligent-hover">
            Real results from real businesses. See how we've helped companies transform their lead generation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glassmorphism border-border p-8 md:p-12 relative smart-hover interactive-glow magnetic-field fractal-bg">
            {/* Quote Marks */}
            <div className="absolute top-6 left-6 text-6xl text-primary/20 font-serif floating-element">"</div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary smart-pulse floating-element" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl font-medium text-center mb-8 leading-relaxed magnetic-hover text-reveal">
                {currentTestimonial.content}
              </blockquote>

              {/* Results Badge */}
              <div className="text-center mb-8">
                <span className="inline-block bg-primary/20 border border-primary/30 rounded-full px-6 py-2 text-primary font-semibold smart-hover interactive-glow text-shimmer breathing">
                  {currentTestimonial.results}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4 magnetic-field">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30 floating-element interactive-glow"
                />
                <div className="text-center">
                  <div className="font-semibold text-lg magnetic-hover text-shimmer">{currentTestimonial.name}</div>
                  <div className="text-foreground/60 breathing">
                    {currentTestimonial.title} at {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-border hover:border-primary transition-colors smart-hover magnetic-field interactive-glow"
            >
              <ArrowLeft className="w-5 h-5 floating-element" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors smart-hover smart-pulse ${
                    index === currentIndex ? 'bg-primary interactive-glow' : 'bg-foreground/20'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-border hover:border-primary transition-colors smart-hover magnetic-field interactive-glow"
            >
              <ArrowRight className="w-5 h-5 floating-element" />
            </Button>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fade-up morphing-bg rounded-2xl p-8" style={{ animationDelay: '0.3s' }}>
          {[
            { value: "200+", label: "Happy Clients" },
            { value: "5M+", label: "Leads Generated" },
            { value: "300%", label: "Average ROI" }
          ].map((stat, index) => (
            <div key={index} className="text-center smart-hover magnetic-field animate-intelligent-hover" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl font-bold gradient-text text-shimmer floating-element mb-2">{stat.value}</div>
              <div className="text-foreground/80 breathing">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
