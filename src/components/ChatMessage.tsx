
import { User, Bot, Zap, Sparkles, Star } from 'lucide-react';
import { Message } from '@/types/chat';

interface ChatMessageProps {
  message: Message;
  index: number;
}

const ChatMessage = ({ message, index }: ChatMessageProps) => {
  const getBotIcon = (emotion?: string) => {
    switch (emotion) {
      case 'excited': return <Zap className="w-3 h-3 text-yellow-400 animate-bounce" />;
      case 'thinking': return <Sparkles className="w-3 h-3 text-purple-400 animate-pulse" />;
      case 'helpful': return <Star className="w-3 h-3 text-blue-400 animate-spin" />;
      default: return <Bot className="w-3 h-3 text-muted-foreground animate-pulse" />;
    }
  };

  return (
    <div
      className={`flex animate-slide-in-bottom ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className={`flex items-start space-x-3 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-125 ${
          message.sender === 'user' 
            ? 'bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse-scale shadow-lg shadow-blue-500/30' 
            : 'bg-gradient-to-r from-green-500 to-teal-500 animate-float shadow-lg shadow-green-500/30'
        }`}>
          {message.sender === 'user' ? (
            <User className="w-4 h-4 text-white" />
          ) : (
            getBotIcon(message.emotion)
          )}
        </div>
        <div className={`p-4 rounded-2xl transition-all duration-500 hover:scale-105 transform backdrop-blur-sm border ${
          message.sender === 'user' 
            ? 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white animate-slide-in-right border-blue-400/30 shadow-lg shadow-blue-500/20' 
            : 'bg-gradient-to-r from-slate-700/90 to-slate-600/90 text-gray-100 animate-slide-in-left border-slate-500/30 shadow-lg shadow-slate-500/20'
        }`}>
          <div className="text-sm leading-relaxed animate-typing">{message.text}</div>
          <div className="text-xs opacity-70 mt-2 animate-fade-in animation-delay-500 flex items-center gap-1">
            <div className="w-1 h-1 bg-current rounded-full animate-pulse"></div>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
