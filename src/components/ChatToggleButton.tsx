
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface ChatToggleButtonProps {
  onClick: () => void;
}

const ChatToggleButton = ({ onClick }: ChatToggleButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 animate-bounce hover:animate-none transform hover:scale-110 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
      <MessageCircle className="w-6 h-6 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 relative z-10" />
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-ping"></div>
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
        AI
      </div>
      
      {/* Floating particles */}
      <div className="absolute -top-4 -left-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
      <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
      <div className="absolute -top-6 -right-2 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
    </Button>
  );
};

export default ChatToggleButton;
