
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  const toolItems = [
    { label: 'Growth Predictor', href: '/business-growth-predictor' },
    { label: 'Lead Game', href: '/lead-generation-game' },
    { label: 'AI Persona', href: '/ai-persona-generator' },
    { label: 'Analytics', href: '/analytics-dashboard' },
    { label: '3D Showcase', href: '/use-case-3d-carousel' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-sm">LA</span>
            </div>
            <span className="text-xl font-bold gradient-text">LeadAgency</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-border mx-4"></div>
            {toolItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium bg-primary/10 px-3 py-1 rounded-full text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button className="btn-primary">
              Get Your Lead Machine
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-border pt-4 mt-4">
                <p className="text-sm text-muted-foreground mb-2">Interactive Tools</p>
                {toolItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4">
                <ThemeToggle />
                <Button className="btn-primary flex-1 ml-4">
                  Get Your Lead Machine
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
