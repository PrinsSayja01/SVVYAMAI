
import { Sparkles } from 'lucide-react';

const ChatTypingIndicator = () => {
  return (
    <div className="flex justify-start animate-bounce-in">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center animate-pulse shadow-lg shadow-primary/30">
          <Sparkles className="w-4 h-4 text-primary-foreground animate-spin" />
        </div>
        <div className="bg-gradient-to-r from-muted/90 to-secondary/90 p-4 rounded-2xl backdrop-blur-sm border border-border shadow-lg">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce shadow-lg shadow-primary/50" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-accent rounded-full animate-bounce shadow-lg shadow-accent/50" style={{ animationDelay: '200ms' }}></div>
            <div className="w-3 h-3 bg-agency-blue rounded-full animate-bounce shadow-lg shadow-agency-blue/50" style={{ animationDelay: '400ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatTypingIndicator;
