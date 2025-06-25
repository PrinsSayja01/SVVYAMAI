
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm here to help you get started with your lead generation. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('price') || input.includes('cost')) {
      return "Our lead generation packages start at $2,997/month. Would you like to schedule a free consultation to discuss your specific needs?";
    }
    if (input.includes('lead') || input.includes('generate')) {
      return "We help businesses generate 10x more qualified leads using AI automation. Our clients typically see 300%+ ROI within 90 days. What's your current biggest challenge with lead generation?";
    }
    if (input.includes('time') || input.includes('how long')) {
      return "Most clients start seeing results within 30 days, with full optimization achieved in 90 days. We provide weekly reports so you can track progress every step of the way.";
    }
    if (input.includes('demo') || input.includes('consultation')) {
      return "I'd love to set up a free 30-minute consultation! You can book directly at calendly.com/leadagency or give us a call at (555) 123-LEADS.";
    }
    
    return "That's a great question! I'd recommend scheduling a free consultation with our team to give you a personalized answer. Would you like me to help you book that?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-500 animate-bounce-slow hover:animate-pulse transform hover:scale-110 group"
        >
          <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 flex flex-col shadow-2xl border-border animate-slide-in-bottom transform-gpu backdrop-blur-sm bg-card/95">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg animate-slide-in-top">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-pulse-scale">
                <Bot className="w-4 h-4 animate-bounce" />
              </div>
              <div>
                <div className="font-semibold animate-fade-in">LeadAgency Support</div>
                <div className="text-xs opacity-80 flex items-center gap-1 animate-fade-in animation-delay-200">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Online now
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-white/20 transition-all duration-300 hover:rotate-90"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex animate-slide-in-bottom ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    message.sender === 'user' ? 'bg-primary animate-pulse-scale' : 'bg-muted animate-float'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="w-3 h-3 text-primary-foreground" />
                    ) : (
                      <Bot className="w-3 h-3 text-muted-foreground" />
                    )}
                  </div>
                  <div className={`p-3 rounded-lg transition-all duration-300 hover:scale-105 transform ${
                    message.sender === 'user' 
                      ? 'bg-primary text-primary-foreground animate-slide-in-right' 
                      : 'bg-muted text-muted-foreground animate-slide-in-left'
                  }`}>
                    <div className="text-sm animate-typing">{message.text}</div>
                    <div className="text-xs opacity-60 mt-1 animate-fade-in animation-delay-500">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-bounce-in">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center animate-pulse">
                    <Bot className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border animate-slide-in-bottom animation-delay-300">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
              />
              <Button 
                onClick={handleSendMessage} 
                size="icon" 
                disabled={!inputMessage.trim()}
                className="transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:scale-100"
              >
                <Send className="w-4 h-4 transition-transform duration-300 hover:rotate-12" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ChatBox;
