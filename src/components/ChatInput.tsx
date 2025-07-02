
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

interface ChatInputProps {
  inputMessage: string;
  setInputMessage: (message: string) => void;
  onSendMessage: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
}

const ChatInput = ({ inputMessage, setInputMessage, onSendMessage, onKeyPress }: ChatInputProps) => {
  return (
    <div className="p-4 border-t border-border animate-slide-in-bottom animation-delay-300 bg-gradient-to-r from-muted/80 to-accent/40 backdrop-blur-sm">
      <div className="flex space-x-3">
        <Input
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder="Ask me about lead generation..."
          className="flex-1 transition-all duration-500 focus:scale-[1.02] focus:shadow-xl focus:shadow-primary/20 bg-background/50 border-border text-foreground placeholder-muted-foreground focus:border-primary backdrop-blur-sm"
        />
        <Button 
          onClick={onSendMessage} 
          size="icon" 
          disabled={!inputMessage.trim()}
          className="transition-all duration-500 hover:scale-110 disabled:opacity-50 disabled:scale-100 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg shadow-primary/30 hover:shadow-primary/50"
        >
          <Send className="w-4 h-4 transition-transform duration-500 hover:rotate-12" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
