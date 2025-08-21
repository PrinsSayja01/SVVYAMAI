
import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from '@/hooks/use-toast';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      
      // Show notification on first load when auto-detecting
      if (isFirstLoad) {
        setTimeout(() => {
          toast({
            title: `🎨 Auto-detected ${systemTheme} mode`,
            description: `Your device preference has been applied. You can change it anytime using the theme toggle.`,
            duration: 4000,
          });
        }, 1500);
        setIsFirstLoad(false);
      }
      
      return;
    }

    root.classList.add(theme);
    setIsFirstLoad(false);
  }, [theme, isFirstLoad]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        const newTheme = e.matches ? 'dark' : 'light';
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(newTheme);
        
        toast({
          title: `🔄 Theme updated to ${newTheme}`,
          description: 'Your device preference changed and we updated accordingly.',
          duration: 3000,
        });
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
      
      // Show theme change notification
      if (newTheme !== 'system') {
        toast({
          title: `✨ Switched to ${newTheme} mode`,
          description: 'Theme preference saved for your next visit.',
          duration: 2000,
        });
      } else {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
        toast({
          title: `🔄 Using system preference (${systemTheme})`,
          description: 'Theme will automatically match your device settings.',
          duration: 3000,
        });
      }
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
