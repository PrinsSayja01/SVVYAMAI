import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Timer, Target, Star, Zap, Users, Mail, Phone, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface Lead {
  id: string;
  type: 'good' | 'bad';
  name: string;
  icon: any;
  value: number;
  x: number;
  y: number;
  speed: number;
}

const LeadGenerationGame = () => {
  const { toast } = useToast();
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'finished'>('menu');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [level, setLevel] = useState(1);
  const [multiplier, setMultiplier] = useState(1);
  const [leaderboard, setLeaderboard] = useState([
    { name: 'Sarah M.', score: 2850, level: 12 },
    { name: 'David L.', score: 2620, level: 11 },
    { name: 'Emma K.', score: 2380, level: 10 },
    { name: 'Mike R.', score: 2150, level: 9 },
    { name: 'Lisa P.', score: 1920, level: 8 },
  ]);

  const leadTypes = [
    { type: 'good', name: 'Email Subscriber', icon: Mail, value: 100 },
    { type: 'good', name: 'Phone Lead', icon: Phone, value: 150 },
    { type: 'good', name: 'Chat Inquiry', icon: MessageSquare, value: 120 },
    { type: 'good', name: 'Contact Form', icon: Users, value: 200 },
    { type: 'bad', name: 'Spam Bot', icon: Zap, value: -50 },
    { type: 'bad', name: 'Fake Email', icon: Mail, value: -30 },
  ];

  const generateLead = () => {
    const leadType = leadTypes[Math.floor(Math.random() * leadTypes.length)];
    const gameArea = gameAreaRef.current;
    if (!gameArea) return;

    const lead: Lead = {
      id: Math.random().toString(36).substr(2, 9),
      type: leadType.type as 'good' | 'bad',
      name: leadType.name,
      icon: leadType.icon,
      value: leadType.value,
      x: Math.random() * (gameArea.clientWidth - 80),
      y: -50,
      speed: Math.random() * 3 + 2 + level * 0.5,
    };

    setLeads(prev => [...prev, lead]);
  };

  const updateGame = () => {
    setLeads(prev => prev.map(lead => ({
      ...lead,
      y: lead.y + lead.speed
    })).filter(lead => lead.y < 600));
  };

  const catchLead = (leadId: string) => {
    const lead = leads.find(l => l.id === leadId);
    if (!lead) return;

    const points = lead.value * multiplier;
    setScore(prev => prev + points);
    
    if (lead.type === 'good') {
      toast({
        title: "Great catch! 🎯",
        description: `+${points} points for ${lead.name}`,
      });
      
      // Increase multiplier for consecutive good catches
      setMultiplier(prev => Math.min(prev + 0.1, 3));
    } else {
      toast({
        title: "Oops! 😅",
        description: `${points} points for catching ${lead.name}`,
        variant: "destructive"
      });
      
      setMultiplier(1); // Reset multiplier
    }

    setLeads(prev => prev.filter(l => l.id !== leadId));
  };

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setTimeLeft(60);
    setLevel(1);
    setMultiplier(1);
    setLeads([]);
  };

  const endGame = () => {
    setGameState('finished');
    setLeads([]);
  };

  // Game loop
  useEffect(() => {
    if (gameState !== 'playing') return;

    const gameLoop = setInterval(() => {
      updateGame();
      
      // Generate new leads
      if (Math.random() < 0.3 + level * 0.05) {
        generateLead();
      }
      
      // Level up
      if (score > level * 500) {
        setLevel(prev => prev + 1);
        toast({
          title: `Level ${level + 1}! 🚀`,
          description: "Game speed increased!",
        });
      }
    }, 50);

    return () => clearInterval(gameLoop);
  }, [gameState, level, score]);

  // Timer
  useEffect(() => {
    if (gameState !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container-width section-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <Target className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                  Lead Catch Game
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Test your reflexes and learn about lead generation in this fun, interactive game!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Game Area */}
        <section className="py-16">
          <div className="container-width section-padding">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Game */}
              <div className="lg:col-span-2">
                <Card className="glass-card h-[600px] relative overflow-hidden">
                  <div 
                    ref={gameAreaRef}
                    className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5"
                  >
                    {gameState === 'menu' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="text-center">
                          <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
                          <h2 className="text-3xl font-bold mb-4">Lead Catch Challenge</h2>
                          <p className="text-muted-foreground mb-8 max-w-md">
                            Catch the good leads and avoid the bad ones! 
                            Build your skills in identifying quality prospects.
                          </p>
                          <Button onClick={startGame} className="btn-primary" size="lg">
                            <Star className="h-5 w-5 mr-2" />
                            Start Game
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {gameState === 'playing' && (
                      <>
                        {/* Game HUD */}
                        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                          <div className="flex items-center space-x-4">
                            <Badge variant="secondary" className="glass-card">
                              Score: {score}
                            </Badge>
                            <Badge variant="secondary" className="glass-card">
                              Level: {level}
                            </Badge>
                            <Badge variant="secondary" className="glass-card">
                              Multiplier: {multiplier.toFixed(1)}x
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Timer className="h-4 w-4" />
                            <Badge variant={timeLeft < 10 ? "destructive" : "secondary"} className="glass-card">
                              {timeLeft}s
                            </Badge>
                          </div>
                        </div>

                        {/* CRM Basket */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                          <div className="w-32 h-16 bg-primary/20 border-2 border-primary rounded-lg flex items-center justify-center">
                            <Users className="h-8 w-8 text-primary" />
                          </div>
                          <p className="text-center text-sm mt-2 text-primary font-medium">CRM</p>
                        </div>

                        {/* Falling Leads */}
                        <AnimatePresence>
                          {leads.map((lead) => (
                            <motion.div
                              key={lead.id}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className={`absolute cursor-pointer transition-transform hover:scale-110 ${
                                lead.type === 'good' ? 'text-green-500' : 'text-red-500'
                              }`}
                              style={{
                                left: lead.x,
                                top: lead.y,
                              }}
                              onClick={() => catchLead(lead.id)}
                            >
                              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                                lead.type === 'good' 
                                  ? 'bg-green-500/20 border-2 border-green-500' 
                                  : 'bg-red-500/20 border-2 border-red-500'
                              }`}>
                                <lead.icon className="h-6 w-6" />
                              </div>
                              <div className="text-xs text-center mt-1 font-medium">
                                {lead.value > 0 ? '+' : ''}{lead.value}
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </>
                    )}

                    {gameState === 'finished' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="text-center">
                          <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                          <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
                          <div className="text-2xl font-bold text-primary mb-2">
                            Final Score: {score}
                          </div>
                          <div className="text-lg text-muted-foreground mb-8">
                            Level Reached: {level}
                          </div>
                          <Button onClick={startGame} className="btn-primary" size="lg">
                            <Star className="h-5 w-5 mr-2" />
                            Play Again
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Instructions */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      How to Play
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-green-600">Good Leads</p>
                        <p className="text-sm text-muted-foreground">Click to catch and earn points</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-red-600">Bad Leads</p>
                        <p className="text-sm text-muted-foreground">Avoid these to maintain your score</p>
                      </div>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-sm text-muted-foreground">
                        Build multipliers by catching consecutive good leads!
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Leaderboard */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Trophy className="h-5 w-5 mr-2" />
                      Leaderboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {leaderboard.map((player, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                              index === 0 ? 'bg-yellow-500 text-yellow-900' :
                              index === 1 ? 'bg-gray-400 text-gray-900' :
                              index === 2 ? 'bg-orange-500 text-orange-900' :
                              'bg-muted text-muted-foreground'
                            }`}>
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-medium">{player.name}</p>
                              <p className="text-sm text-muted-foreground">Level {player.level}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">{player.score}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Lead Types */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Lead Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {leadTypes.map((lead, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <lead.icon className={`h-4 w-4 ${
                              lead.type === 'good' ? 'text-green-500' : 'text-red-500'
                            }`} />
                            <span className="text-sm">{lead.name}</span>
                          </div>
                          <Badge variant={lead.type === 'good' ? 'default' : 'destructive'}>
                            {lead.value > 0 ? '+' : ''}{lead.value}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LeadGenerationGame;