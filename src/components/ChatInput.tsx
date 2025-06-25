
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
    <div className="p-4 border-t border-purple-500/30 animate-slide-in-bottom animation-delay-300 bg-gradient-to-r from-slate-800/80 to-purple-800/40 backdrop-blur-sm">
      <div className="flex space-x-3">
        <Input
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder="Ask me about lead generation..."
          className="flex-1 transition-all duration-500 focus:scale-[1.02] focus:shadow-xl focus:shadow-purple-500/20 bg-slate-700/50 border-slate-500/50 text-white placeholder-gray-300 focus:border-purple-400 backdrop-blur-sm"
        />
        <Button 
          onClick={onSendMessage} 
          size="icon" 
          disabled={!inputMessage.trim()}
          className="transition-all duration-500 hover:scale-110 disabled:opacity-50 disabled:scale-100 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
        >
          <Send className="w-4 h-4 transition-transform duration-500 hover:rotate-12" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
