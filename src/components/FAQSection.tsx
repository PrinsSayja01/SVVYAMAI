
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer: "Most clients start seeing qualified leads within 30-45 days of launch. However, the system continues to optimize and improve over time. By month 3, you'll typically see a 200-400% increase in lead generation compared to your previous methods."
    },
    {
      question: "What exactly is included in the $3,500/month investment?",
      answer: "Everything you need for complete lead generation automation: custom website design, AI chatbot setup, email automation sequences, CRM integration, landing pages, monthly reporting, dedicated account management, and ongoing optimization. Think of it as your complete marketing department."
    },
    {
      question: "Do you guarantee results?",
      answer: "Yes! We offer a 90-day guarantee. If you don't see a significant increase in qualified leads within 90 days, we'll continue working for free until you do. We're that confident in our system because we've never had to honor this guarantee."
    },
    {
      question: "What if I'm in a competitive industry?",
      answer: "We actually prefer competitive industries because they validate market demand. Our systems are designed to help you stand out from the competition through superior positioning, better user experience, and more sophisticated automation. We've succeeded in every industry we've worked in."
    },
    {
      question: "How is this different from hiring a marketing agency?",
      answer: "Traditional agencies often use cookie-cutter approaches and require you to manage multiple vendors. We build you a complete, integrated system that works 24/7 without ongoing management. Plus, our premium client limit ensures you get the attention and results that larger agencies simply can't provide."
    },
    {
      question: "What technology platforms do you use?",
      answer: "We use best-in-class technology including HubSpot or Salesforce for CRM, advanced AI chatbots, email automation platforms, and custom-built websites optimized for conversion. All platforms are enterprise-grade and integrate seamlessly together."
    },
    {
      question: "How much of my time is required during setup?",
      answer: "Minimal. We handle 95% of the work. You'll need about 2-3 hours per week during the first month for strategy calls, content review, and approval processes. After launch, it's typically just 30 minutes per week for performance reviews."
    },
    {
      question: "Can you work with my existing website and systems?",
      answer: "We can integrate with existing systems, but we typically recommend a fresh approach for maximum results. Our conversion-optimized websites and unified systems typically outperform pieced-together solutions by 300-500%."
    },
    {
      question: "What kind of reporting do you provide?",
      answer: "Comprehensive monthly reports covering lead generation metrics, conversion rates, ROI analysis, and optimization recommendations. You'll also have real-time access to your dashboard to monitor performance 24/7."
    },
    {
      question: "Why do you limit your client roster?",
      answer: "Quality over quantity. By limiting our clients to 5 per quarter, we can provide the level of personalized attention and strategic focus that drives exceptional results. This isn't a volume business for us—it's about creating transformational success for each client."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-card/30">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked
            <span className="gradient-text"> Questions</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Get answers to the most common questions about our lead generation system and process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className={`bg-card border-border transition-all duration-300 animate-fade-up ${
                  openFAQ === index ? 'border-primary/30 shadow-lg' : ''
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-card/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-foreground/60" />
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-border/30">
                      <p className="text-foreground/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <div className="bg-gradient-primary rounded-2xl p-8 text-background relative overflow-hidden">
              {/* Video Background */}
              <div className="absolute inset-0 w-full h-full">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                >
                  <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                  <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Background Elements */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-background/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 right-4 w-20 h-20 bg-background/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-lg opacity-90 mb-6">
                  Schedule a free strategy call to discuss your specific situation and see if we're the right fit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-background text-primary hover:bg-background/90 px-8 py-3 rounded-lg font-semibold transition-colors">
                    Schedule Free Call
                  </button>
                  <button className="border border-background/20 hover:bg-background/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                    Send Us a Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
