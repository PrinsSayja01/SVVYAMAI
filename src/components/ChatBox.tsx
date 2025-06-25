
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageCircle, X, Send, User, Bot, Sparkles, Zap, Star } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  emotion?: 'happy' | 'excited' | 'thinking' | 'helpful';
}

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "🚀 Hey there! I'm your AI lead generation specialist. Ready to 10x your business? Let's create some magic together!",
      sender: 'bot',
      timestamp: new Date(),
      emotion: 'excited'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState<string[]>([]);
  const [userMood, setUserMood] = useState<'neutral' | 'interested' | 'skeptical' | 'excited'>('neutral');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const analyzeUserMood = (input: string): 'neutral' | 'interested' | 'skeptical' | 'excited' => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('amazing') || lowerInput.includes('great') || lowerInput.includes('awesome') || lowerInput.includes('!')) {
      return 'excited';
    }
    if (lowerInput.includes('how') || lowerInput.includes('tell me') || lowerInput.includes('want to know')) {
      return 'interested';
    }
    if (lowerInput.includes('doubt') || lowerInput.includes('really?') || lowerInput.includes('sure')) {
      return 'skeptical';
    }
    return 'neutral';
  };

  const getIntelligentResponse = (userInput: string, context: string[], mood: string): { text: string; emotion: 'happy' | 'excited' | 'thinking' | 'helpful' } => {
    const input = userInput.toLowerCase();
    
    // Context-aware responses
    if (context.includes('pricing') && (input.includes('expensive') || input.includes('cost'))) {
      return {
        text: "I understand budget is important! 💰 Think of it as an investment - our clients typically see 5-10x ROI. Plus, we offer flexible payment plans. What's your current marketing spend?",
        emotion: 'helpful'
      };
    }

    if (context.includes('leads') && input.includes('quality')) {
      return {
        text: "🎯 Quality over quantity, absolutely! We use AI to score leads based on 47 different parameters. Only the hottest prospects make it to your pipeline. Want to see our lead qualification process?",
        emotion: 'excited'
      };
    }

    // Mood-based responses
    if (mood === 'excited') {
      if (input.includes('price') || input.includes('cost')) {
        return {
          text: "🔥 I love your enthusiasm! Our packages start at $2,997/month, but here's the thing - most clients break even in week 3. Ready for a custom quote that'll blow your mind?",
          emotion: 'excited'
        };
      }
    }

    if (mood === 'skeptical') {
      if (input.includes('really') || input.includes('proof')) {
        return {
          text: "I get it - you've probably been burned before. 📊 Here's the thing: we have a 97% client retention rate and our average client sees 340% ROI. Want to see some real case studies?",
          emotion: 'helpful'
        };
      }
    }

    // Advanced keyword matching
    if (input.includes('ai') || input.includes('artificial intelligence')) {
      return {
        text: "🤖 Now we're talking! Our AI doesn't just find leads - it predicts which ones will convert, personalizes outreach, and even optimizes send times. It's like having a crystal ball for sales!",
        emotion: 'excited'
      };
    }

    if (input.includes('competition') || input.includes('competitor')) {
      return {
        text: "💪 While others are playing checkers, we're playing 4D chess! Our proprietary algorithm finds leads your competitors don't even know exist. Ready to leave them in the dust?",
        emotion: 'excited'
      };
    }

    if (input.includes('time') || input.includes('how long') || input.includes('when')) {
      return {
        text: "⚡ Speed is our middle name! Most clients see their first qualified leads within 72 hours. Full system optimization? 30 days max. We move fast because opportunities don't wait!",
        emotion: 'excited'
      };
    }

    if (input.includes('demo') || input.includes('consultation') || input.includes('call')) {
      return {
        text: "🎯 Perfect timing! I can book you a VIP strategy session right now. Our CEO personally handles these calls - no junior staff. Ready to unlock your growth potential?",
        emotion: 'helpful'
      };
    }

    if (input.includes('results') || input.includes('success') || input.includes('roi')) {
      return {
        text: "📈 Results speak louder than words! Average client sees 340% ROI, 10x more qualified leads, and 67% shorter sales cycles. One client went from $50K to $500K in 6 months. What's your growth goal?",
        emotion: 'excited'
      };
    }

    if (input.includes('price') || input.includes('cost') || input.includes('pricing')) {
      return {
        text: "💎 Investment starts at $2,997/month - but here's the kicker: our average client makes that back in their first deal. Plus, we guarantee results or your money back. Want a custom quote?",
        emotion: 'helpful'
      };
    }

    // Default intelligent responses
    const responses = [
      {
        text: "🚀 That's exactly what I wanted to hear! Every successful business owner asks smart questions. What's your biggest lead generation challenge right now?",
        emotion: 'excited' as const
      },
      {
        text: "💡 Interesting point! You know what separates 7-figure businesses from the rest? They invest in systems that scale. Want to see how we can scale yours?",
        emotion: 'thinking' as const
      },
      {
        text: "🎯 I can tell you're serious about growth - I love that! Let me ask you this: what would an extra 50 qualified leads per month do for your business?",
        emotion: 'helpful' as const
      }
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMood = analyzeUserMood(inputMessage);
    setUserMood(newMood);

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    // Update context
    const newContext = [...conversationContext];
    if (inputMessage.toLowerCase().includes('price') || inputMessage.toLowerCase().includes('cost')) {
      newContext.push('pricing');
    }
    if (inputMessage.toLowerCase().includes('lead')) {
      newContext.push('leads');
    }
    setConversationContext(newContext);

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate more realistic typing time
    const typingTime = Math.min(Math.max(inputMessage.length * 50, 1000), 3000);
    
    setTimeout(() => {
      const response = getIntelligentResponse(inputMessage, newContext, newMood);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        emotion: response.emotion
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, typingTime);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const getBotIcon = (emotion?: string) => {
    switch (emotion) {
      case 'excited': return <Zap className="w-3 h-3 text-yellow-400 animate-bounce" />;
      case 'thinking': return <Sparkles className="w-3 h-3 text-purple-400 animate-pulse" />;
      case 'helpful': return <Star className="w-3 h-3 text-blue-400 animate-spin" />;
      default: return <Bot className="w-3 h-3 text-muted-foreground animate-pulse" />;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Enhanced Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
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
      )}

      {/* Enhanced Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 flex flex-col shadow-2xl border-0 animate-slide-in-bottom transform-gpu backdrop-blur-xl bg-gradient-to-br from-slate-900/95 to-purple-900/95 border border-purple-500/20 overflow-hidden">
          {/* Animated Header */}
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
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 transition-all duration-500 hover:rotate-180 hover:scale-110 relative z-10"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Enhanced Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-br from-slate-800/50 to-purple-800/30">
            {messages.map((message, index) => (
              <div
                key={message.id}
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
            ))}
            
            {/* Enhanced Typing Indicator */}
            {isTyping && (
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
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Enhanced Input */}
          <div className="p-4 border-t border-purple-500/30 animate-slide-in-bottom animation-delay-300 bg-gradient-to-r from-slate-800/80 to-purple-800/40 backdrop-blur-sm">
            <div className="flex space-x-3">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about lead generation..."
                className="flex-1 transition-all duration-500 focus:scale-[1.02] focus:shadow-xl focus:shadow-purple-500/20 bg-slate-700/50 border-slate-500/50 text-white placeholder-gray-300 focus:border-purple-400 backdrop-blur-sm"
              />
              <Button 
                onClick={handleSendMessage} 
                size="icon" 
                disabled={!inputMessage.trim()}
                className="transition-all duration-500 hover:scale-110 disabled:opacity-50 disabled:scale-100 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
              >
                <Send className="w-4 h-4 transition-transform duration-500 hover:rotate-12" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ChatBox;
