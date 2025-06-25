
import { UserMood, ChatResponse } from '@/types/chat';

export const analyzeUserMood = (input: string): UserMood => {
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

export const getIntelligentResponse = (userInput: string, context: string[], mood: string): ChatResponse => {
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
