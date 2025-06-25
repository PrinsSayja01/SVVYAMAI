
import { Button } from '@/components/ui/button';
import { X, Bot } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-purple-500/30 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-t-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 animate-pulse"></div>
      <div className="flex items-center space-x-3 relative z-10">
        <div className="w-10 h-10 bg-gradient-to-r from-white/20 to-white/10 rounded-full flex items-center justify-center animate-pulse-scale backdrop-blur-sm border border-white/20">
          <Bot className="w-5 h-5 animate-bounce" />
        </div>
        <div>
          <div className="font-bold text-lg animate-fade-in">🚀 AI LeadBot</div>
          <div className="text-xs opacity-90 flex items-center gap-2 animate-fade-in animation-delay-200">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            <span className="animate-typing">Generating leads...</span>
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="text-white hover:bg-white/20 transition-all duration-500 hover:rotate-180 hover:scale-110 relative z-10"
      >
        <X className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default ChatHeader;
