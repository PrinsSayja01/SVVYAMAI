
import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Message, UserMood } from '@/types/chat';
import { analyzeUserMood, getIntelligentResponse } from '@/utils/chatUtils';
import ChatToggleButton from '@/components/ChatToggleButton';
import ChatHeader from '@/components/ChatHeader';
import ChatMessage from '@/components/ChatMessage';
import ChatTypingIndicator from '@/components/ChatTypingIndicator';
import ChatInput from '@/components/ChatInput';

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
  const [userMood, setUserMood] = useState<UserMood>('neutral');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <ChatToggleButton onClick={() => setIsOpen(true)} />
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 flex flex-col shadow-2xl border-0 animate-slide-in-bottom transform-gpu backdrop-blur-xl bg-card/95 border border-border overflow-hidden relative">
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-20 right-16 w-1 h-1 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-agency-blue/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-10 right-10 w-1 h-1 bg-agency-orange/40 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>

          <ChatHeader onClose={() => setIsOpen(false)} />

          {/* Messages with enhanced background */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-br from-muted/50 to-accent/10 relative">
            {/* Animated grid pattern */}
            <div className="absolute inset-0 opacity-10 bg-cyber-grid bg-grid animate-electric-flow"></div>
            
            {messages.map((message, index) => (
              <ChatMessage key={message.id} message={message} index={index} />
            ))}
            
            {/* Typing Indicator */}
            {isTyping && <ChatTypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          <ChatInput 
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            onSendMessage={handleSendMessage}
            onKeyPress={handleKeyPress}
          />
        </Card>
      )}
    </div>
  );
};

export default ChatBox;
