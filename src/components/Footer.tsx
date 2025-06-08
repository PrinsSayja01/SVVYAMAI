
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
        <div className="grid lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-sm">LA</span>
              </div>
              <span className="text-xl font-bold gradient-text">LeadAgency</span>
            </div>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              We build 24/7 lead generation machines that transform businesses. 
              Join 200+ companies generating 300%+ more qualified leads.
            </p>
            <div className="space-y-3">
              {trustElements.map((element, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-foreground/80">
                  <element.icon className="w-4 h-4 text-primary" />
                  <span>{element.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center group"
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
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get Started</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-foreground/80">(555) 123-LEADS</span>
              </div>
              <div className="text-sm text-foreground/60">
                Monday - Friday: 9AM - 6PM EST<br />
                Weekend: Emergency support available
              </div>
            </div>
            
            <div className="bg-gradient-primary rounded-lg p-4 text-background">
              <h4 className="font-semibold mb-2">Ready to Get Started?</h4>
              <p className="text-sm opacity-90 mb-3">
                Only 2 spots left this quarter
              </p>
              <button className="bg-background text-primary hover:bg-background/90 px-4 py-2 rounded font-semibold text-sm w-full transition-colors">
                Claim Your Spot
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-foreground/60">
              © 2024 LeadAgency. All rights reserved.
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
