import { useEffect, useState } from 'react';
import { Bot, Zap, Brain, Settings, Cpu, Network, Sparkles, Target } from 'lucide-react';

const FloatingAIIcons = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const icons = [
    { Icon: Bot, delay: 0, position: { top: '10%', left: '5%' } },
    { Icon: Zap, delay: 1, position: { top: '20%', right: '8%' } },
    { Icon: Brain, delay: 2, position: { top: '60%', left: '3%' } },
    { Icon: Settings, delay: 3, position: { top: '70%', right: '5%' } },
    { Icon: Cpu, delay: 4, position: { top: '35%', left: '10%' } },
    { Icon: Network, delay: 5, position: { top: '80%', left: '15%' } },
    { Icon: Sparkles, delay: 6, position: { top: '45%', right: '12%' } },
    { Icon: Target, delay: 7, position: { top: '15%', left: '20%' } },
  ];

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className="absolute opacity-20 dark:opacity-30"
          style={{
            ...position,
            animation: `float-ai ${6 + (delay * 0.5)}s ease-in-out infinite`,
            animationDelay: `${delay * 0.3}s`,
          }}
        >
          <Icon 
            className="w-8 h-8 sm:w-12 sm:h-12 text-primary/40 dark:text-primary/60 drop-shadow-lg" 
            style={{
              filter: 'drop-shadow(0 0 10px rgba(21, 101, 192, 0.3))',
            }}
          />
        </div>
      ))}
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse-slow" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-success/20 to-primary/20 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default FloatingAIIcons;