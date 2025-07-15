import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { BarChart3, Users, MousePointer, TrendingUp, TrendingDown, Eye, Mail, Phone, MessageSquare, Calendar, Clock, Target, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AnalyticsDashboard = () => {
  const [realTimeData, setRealTimeData] = useState({
    currentVisitors: 47,
    totalLeads: 1247,
    conversionRate: 3.2,
    revenue: 125670
  });

  const [timeRange, setTimeRange] = useState('30d');

  // Generate realistic sample data
  const generateSampleData = () => {
    const days = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90;
    const data = [];
    
    for (let i = days; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      
      data.push({
        date: date.toISOString().split('T')[0],
        visitors: Math.floor(Math.random() * 500) + 200,
        leads: Math.floor(Math.random() * 50) + 10,
        revenue: Math.floor(Math.random() * 5000) + 1000,
        conversionRate: (Math.random() * 3 + 1).toFixed(1)
      });
    }
    
    return data;
  };

  const [analyticsData, setAnalyticsData] = useState(generateSampleData());

  useEffect(() => {
    setAnalyticsData(generateSampleData());
  }, [timeRange]);

  // Real-time updates simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        currentVisitors: Math.floor(Math.random() * 100) + 20,
        totalLeads: prev.totalLeads + Math.floor(Math.random() * 3),
        conversionRate: Math.round((Math.random() * 2 + 2) * 10) / 10,
        revenue: prev.revenue + Math.floor(Math.random() * 1000)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const trafficSources = [
    { name: 'Organic Search', value: 45, color: '#8884d8' },
    { name: 'Social Media', value: 25, color: '#82ca9d' },
    { name: 'Direct', value: 20, color: '#ffc658' },
    { name: 'Email', value: 10, color: '#ff7300' }
  ];

  const funnelData = [
    { stage: 'Visitors', count: 10000, conversion: 100 },
    { stage: 'Leads', count: 320, conversion: 3.2 },
    { stage: 'Qualified', count: 128, conversion: 1.28 },
    { stage: 'Customers', count: 32, conversion: 0.32 }
  ];

  const leadChannels = [
    { channel: 'Contact Form', leads: 145, trend: 'up' },
    { channel: 'Email Subscribe', leads: 89, trend: 'up' },
    { channel: 'Phone Calls', leads: 67, trend: 'down' },
    { channel: 'Live Chat', leads: 45, trend: 'up' }
  ];

  const recentActivity = [
    { type: 'lead', message: 'New lead from contact form', time: '2 minutes ago', icon: Mail },
    { type: 'conversion', message: 'Lead converted to customer', time: '15 minutes ago', icon: Target },
    { type: 'visit', message: 'High-value visitor on pricing page', time: '23 minutes ago', icon: Eye },
    { type: 'chat', message: 'Live chat session started', time: '35 minutes ago', icon: MessageSquare }
  ];

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
                <BarChart3 className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                  Analytics Dashboard
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real-time insights and performance metrics for your lead generation campaigns
              </p>
            </motion.div>
          </div>
        </section>

        {/* Real-time Overview */}
        <section className="py-16">
          <div className="container-width section-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Current Visitors</p>
                        <p className="text-3xl font-bold">{realTimeData.currentVisitors}</p>
                      </div>
                      <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-600">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Live
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Total Leads</p>
                        <p className="text-3xl font-bold">{realTimeData.totalLeads}</p>
                      </div>
                      <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center">
                        <Target className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-600">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +12% this week
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Conversion Rate</p>
                        <p className="text-3xl font-bold">{realTimeData.conversionRate}%</p>
                      </div>
                      <div className="h-12 w-12 bg-green-500/20 rounded-full flex items-center justify-center">
                        <MousePointer className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-600">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +0.3% this month
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Revenue</p>
                        <p className="text-3xl font-bold">${realTimeData.revenue.toLocaleString()}</p>
                      </div>
                      <div className="h-12 w-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-yellow-600" />
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-600">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +24% this month
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Main Dashboard */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="traffic">Traffic</TabsTrigger>
                <TabsTrigger value="funnel">Funnel</TabsTrigger>
                <TabsTrigger value="leads">Leads</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card className="glass-card">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Performance Trend</CardTitle>
                      <div className="flex space-x-2">
                        <Button 
                          variant={timeRange === '7d' ? 'default' : 'outline'} 
                          size="sm"
                          onClick={() => setTimeRange('7d')}
                        >
                          7d
                        </Button>
                        <Button 
                          variant={timeRange === '30d' ? 'default' : 'outline'} 
                          size="sm"
                          onClick={() => setTimeRange('30d')}
                        >
                          30d
                        </Button>
                        <Button 
                          variant={timeRange === '90d' ? 'default' : 'outline'} 
                          size="sm"
                          onClick={() => setTimeRange('90d')}
                        >
                          90d
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={analyticsData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="visitors" stroke="hsl(var(--primary))" strokeWidth={2} />
                          <Line type="monotone" dataKey="leads" stroke="hsl(var(--accent))" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle>Traffic Sources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={trafficSources}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {trafficSources.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        {trafficSources.map((source, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }}></div>
                            <span className="text-sm">{source.name}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center space-x-4 p-3 bg-background/50 rounded-lg">
                          <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
                            <activity.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{activity.message}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="traffic" className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Traffic Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <AreaChart data={analyticsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="visitors" stackId="1" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.6} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="funnel" className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Conversion Funnel</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {funnelData.map((stage, index) => (
                        <div key={index} className="relative">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{stage.stage}</span>
                            <span className="text-sm text-muted-foreground">{stage.conversion}%</span>
                          </div>
                          <div className="w-full bg-background/50 rounded-full h-3">
                            <div 
                              className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-300"
                              style={{ width: `${stage.conversion}%` }}
                            ></div>
                          </div>
                          <div className="text-right text-sm text-muted-foreground mt-1">
                            {stage.count.toLocaleString()} users
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="leads" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle>Lead Channels</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {leadChannels.map((channel, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center">
                                <Mail className="h-4 w-4 text-primary" />
                              </div>
                              <span className="font-medium">{channel.channel}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="font-bold">{channel.leads}</span>
                              {channel.trend === 'up' ? (
                                <TrendingUp className="h-4 w-4 text-green-500" />
                              ) : (
                                <TrendingDown className="h-4 w-4 text-red-500" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle>Lead Quality Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-primary mb-2">8.7</div>
                          <p className="text-sm text-muted-foreground">Average Lead Quality</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">High Quality</span>
                            <span className="text-sm">65%</span>
                          </div>
                          <div className="w-full bg-background/50 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Medium Quality</span>
                            <span className="text-sm">25%</span>
                          </div>
                          <div className="w-full bg-background/50 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Low Quality</span>
                            <span className="text-sm">10%</span>
                          </div>
                          <div className="w-full bg-background/50 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AnalyticsDashboard;