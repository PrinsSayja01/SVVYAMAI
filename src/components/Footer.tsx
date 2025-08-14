
import { ArrowRight, Phone, Clock, Star, Shield } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const services = [
    'AI Automation',
    'Web Design',
    'Brand Strategy',
    'Lead Generation',
    'CRM Integration',
    'Email Marketing'
  ];

  const trustElements = [
    { icon: Shield, text: '90-Day Guarantee' },
    { icon: Star, text: '98% Client Satisfaction' },
    { icon: Clock, text: '24/7 Support' }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-width section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 py-12 sm:py-14 lg:py-16">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <img 
                src="/lovable-uploads/1a31cf75-6835-4315-a0aa-5c0948bac019.png" 
                alt="Svvayam AI Logo" 
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm sm:text-base text-foreground/80 mb-4 sm:mb-6 leading-relaxed">
              We build 24/7 AI automation machines that transform businesses with Svvayam AI. 
              Join 200+ companies generating 300%+ more qualified opportunities.
            </p>
            <div className="space-y-2 sm:space-y-3">
              {trustElements.map((element, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs sm:text-sm text-foreground/80">
                  <element.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span>{element.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm sm:text-base text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Get Started</h3>
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-foreground/80">(555) 123-LEADS</span>
              </div>
              <div className="text-xs sm:text-sm text-foreground/60">
                Monday - Friday: 9AM - 6PM EST<br />
                Weekend: Emergency support available
              </div>
            </div>
            
            <div className="bg-gradient-primary rounded-lg p-3 sm:p-4 text-background">
              <h4 className="text-sm sm:text-base font-semibold mb-2">Ready to Get Started?</h4>
              <p className="text-xs sm:text-sm opacity-90 mb-3">
                Only 2 spots left this quarter
              </p>
              <button className="bg-background text-primary hover:bg-background/90 px-3 sm:px-4 py-2 rounded font-semibold text-xs sm:text-sm w-full transition-colors">
                Claim Your Spot
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-foreground/60">
              © 2024 Svvayam AI. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-foreground/60">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Final Trust Signal */}
        <div className="text-center py-6 border-t border-border/50">
          <p className="text-sm text-foreground/60">
            🔒 Your information is secure and will never be shared. 
            <span className="text-primary font-medium"> SSL Encrypted</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
