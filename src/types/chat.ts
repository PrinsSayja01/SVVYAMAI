
export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  emotion?: 'happy' | 'excited' | 'thinking' | 'helpful';
}

export type UserMood = 'neutral' | 'interested' | 'skeptical' | 'excited';

export interface ChatResponse {
  text: string;
  emotion: 'happy' | 'excited' | 'thinking' | 'helpful';
}
