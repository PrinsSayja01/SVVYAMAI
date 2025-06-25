
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
        <Card className="w-80 h-96 flex flex-col shadow-2xl border-0 animate-slide-in-bottom transform-gpu backdrop-blur-xl bg-gradient-to-br from-slate-900/95 to-purple-900/95 border border-purple-500/20 overflow-hidden">
          <ChatHeader onClose={() => setIsOpen(false)} />

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-br from-slate-800/50 to-purple-800/30">
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
