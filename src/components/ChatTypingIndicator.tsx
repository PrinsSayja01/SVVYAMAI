
import { Sparkles } from 'lucide-react';

const ChatTypingIndicator = () => {
  return (
    <div className="flex justify-start animate-bounce-in">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center animate-pulse shadow-lg shadow-purple-500/30">
          <Sparkles className="w-4 h-4 text-white animate-spin" />
        </div>
        <div className="bg-gradient-to-r from-slate-700/90 to-slate-600/90 p-4 rounded-2xl backdrop-blur-sm border border-slate-500/30 shadow-lg">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce shadow-lg shadow-purple-400/50" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce shadow-lg shadow-pink-400/50" style={{ animationDelay: '200ms' }}></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce shadow-lg shadow-blue-400/50" style={{ animationDelay: '400ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatTypingIndicator;
