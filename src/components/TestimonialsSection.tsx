
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
      content: "LeadAgency transformed our business completely. We went from 5 leads per month to 150+ qualified prospects. The automation system they built saves us 20 hours per week.",
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
      content: "Working with LeadAgency was a game-changer. The automated nurturing sequences they created convert 35% better than our old manual process.",
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
    <section id="testimonials" className="py-24 bg-card/30">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Are Saying
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Real results from real businesses. See how we've helped companies transform their lead generation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border p-8 md:p-12 relative animate-scale-in">
            {/* Quote Marks */}
            <div className="absolute top-6 left-6 text-6xl text-primary/20 font-serif">"</div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl font-medium text-center mb-8 leading-relaxed">
                {currentTestimonial.content}
              </blockquote>

              {/* Results Badge */}
              <div className="text-center mb-8">
                <span className="inline-block bg-primary/20 border border-primary/30 rounded-full px-6 py-2 text-primary font-semibold">
                  {currentTestimonial.results}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                />
                <div className="text-center">
                  <div className="font-semibold text-lg">{currentTestimonial.name}</div>
                  <div className="text-foreground/60">
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
              className="w-12 h-12 rounded-full border-border hover:border-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-foreground/20'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-border hover:border-primary transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">200+</div>
            <div className="text-foreground/80">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">5M+</div>
            <div className="text-foreground/80">Leads Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">300%</div>
            <div className="text-foreground/80">Average ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
