
import { Button } from '@/components/ui/button';
import { X, Bot } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-t-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse"></div>
      <div className="flex items-center space-x-3 relative z-10">
        <div className="w-10 h-10 bg-gradient-to-r from-primary-foreground/20 to-primary-foreground/10 rounded-full flex items-center justify-center animate-pulse-scale backdrop-blur-sm border border-primary-foreground/20">
          <Bot className="w-5 h-5 animate-bounce" />
        </div>
        <div>
          <div className="font-bold text-lg animate-fade-in">🚀 AI LeadBot</div>
          <div className="text-xs opacity-90 flex items-center gap-2 animate-fade-in animation-delay-200">
            <div className="w-2 h-2 bg-agency-green rounded-full animate-pulse shadow-lg shadow-agency-green/50"></div>
            <span className="animate-typing">Generating leads...</span>
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-500 hover:rotate-180 hover:scale-110 relative z-10"
      >
        <X className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default ChatHeader;
