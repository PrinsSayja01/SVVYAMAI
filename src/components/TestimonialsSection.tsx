
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
    <section id="testimonials" className="py-24 morphing-bg particle-system video-overlay relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        >
          <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/8847346/8847346-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="text-center mb-16 smooth-enter magnetic-field">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-reveal magnetic-hover">
            What Our Clients Are Saying
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto breathing animate-intelligent-hover">
            Real results from real businesses. See how we've helped companies transform their lead generation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glassmorphism border-border p-8 md:p-12 relative ultra-smooth-hover interactive-glow magnetic-field fractal-bg rounded-3xl">
            {/* Quote Marks */}
            <div className="absolute top-8 left-8 text-7xl text-primary/20 font-serif floating-element">"</div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-8">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <div key={i} className="w-8 h-8 fill-primary text-primary smart-pulse floating-element interactive-glow" style={{ animationDelay: `${i * 0.1}s` }}>
                    ⭐
                  </div>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl font-medium text-center mb-10 leading-relaxed magnetic-hover text-reveal">
                {currentTestimonial.content}
              </blockquote>

              {/* Results Badge */}
              <div className="text-center mb-10">
                <span className="inline-block glassmorphism border border-primary/30 rounded-full px-8 py-3 text-primary font-semibold ultra-smooth-hover interactive-glow text-shimmer breathing">
                  {currentTestimonial.results}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-6 magnetic-field">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-3 border-primary/30 floating-element interactive-glow ultra-smooth-hover"
                />
                <div className="text-center">
                  <div className="font-semibold text-xl magnetic-hover text-shimmer">{currentTestimonial.name}</div>
                  <div className="text-foreground/60 breathing text-lg">
                    {currentTestimonial.title} at {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-6 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-14 h-14 rounded-full border-border hover:border-primary transition-colors ultra-smooth-hover magnetic-field interactive-glow"
            >
              <ArrowLeft className="w-6 h-6 floating-element" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-colors ultra-smooth-hover smart-pulse ${
                    index === currentIndex ? 'bg-primary interactive-glow' : 'bg-foreground/20'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-14 h-14 rounded-full border-border hover:border-primary transition-colors ultra-smooth-hover magnetic-field interactive-glow"
            >
              <ArrowRight className="w-6 h-6 floating-element" />
            </Button>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 smooth-enter glassmorphism rounded-3xl p-10" style={{ animationDelay: '0.3s' }}>
          {[
            { value: "200+", label: "Happy Clients" },
            { value: "5M+", label: "Leads Generated" },
            { value: "300%", label: "Average ROI" }
          ].map((stat, index) => (
            <div key={index} className="text-center ultra-smooth-hover magnetic-field animate-intelligent-hover" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-5xl font-bold gradient-text text-shimmer floating-element mb-3">{stat.value}</div>
              <div className="text-foreground/80 breathing text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
