
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '/contact' },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 animate-smooth">
      <div className="container-responsive">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-bold text-xs sm:text-sm md:text-base">SA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl md:text-2xl font-bold gradient-text leading-tight">Svvayam AI</span>
              <span className="text-xs text-muted-foreground hidden sm:block">(स्वयम्)</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-sm xl:text-base focus-ring rounded-md px-2 py-1"
              >
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-border mx-4"></div>
            {toolItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium bg-primary/10 px-3 py-1.5 rounded-full text-sm hover-lift focus-ring"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button and Theme Toggle - Desktop */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <ThemeToggle />
            <Button className="btn-primary text-sm xl:text-base">
              Activate Your AI
            </Button>
          </div>

          {/* Mobile/Tablet Controls */}
          <div className="flex lg:hidden items-center space-x-2 sm:space-x-3">
            <ThemeToggle />
            <button
              className="interactive-element p-2 rounded-md hover:bg-muted transition-colors duration-200 focus-ring"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border mobile-menu-enter">
            <nav className="py-4 space-responsive">
              {/* Main Navigation */}
              <div className="space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium rounded-lg focus-ring interactive-element"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              
              {/* Tools Section */}
              <div className="border-t border-border pt-4 mt-4">
                <p className="text-sm text-muted-foreground mb-3 px-3 font-medium">Interactive Tools</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {toolItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-3 py-3 text-primary hover:text-primary/80 transition-all duration-300 font-medium bg-primary/10 hover:bg-primary/20 rounded-lg focus-ring interactive-element"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="border-t border-border pt-4 mt-4">
                <Button className="btn-primary w-full" onClick={() => setIsMenuOpen(false)}>
                  Activate Your AI
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
