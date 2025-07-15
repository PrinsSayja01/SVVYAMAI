import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Download, Lightbulb, Calculator, Target, DollarSign } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const BusinessGrowthPredictor = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    monthlyVisitors: 5000,
    conversionRate: 2.5,
    avgOrderValue: 150,
    customerLifetime: 12,
    growthRate: 15
  });

  const [predictions, setPredictions] = useState<any[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const calculatePredictions = () => {
    const data = [];
    let currentRevenue = (formData.monthlyVisitors * formData.conversionRate / 100) * formData.avgOrderValue;
    
    for (let month = 0; month <= 12; month++) {
      const visitors = formData.monthlyVisitors * Math.pow(1 + formData.growthRate / 100, month / 12);
      const revenue = (visitors * formData.conversionRate / 100) * formData.avgOrderValue;
      const lifetimeValue = revenue * formData.customerLifetime;
      
      data.push({
        month: month === 0 ? 'Now' : `Month ${month}`,
        visitors: Math.round(visitors),
        revenue: Math.round(revenue),
        lifetimeValue: Math.round(lifetimeValue)
      });
    }
    
    setPredictions(data);
  };

  const generateSuggestions = () => {
    const tips = [];
    
    if (formData.conversionRate < 3) {
      tips.push("🎯 Improve your conversion rate by optimizing your landing pages and adding social proof");
    }
    if (formData.avgOrderValue < 200) {
      tips.push("💰 Increase average order value with upselling and bundle offers");
    }
    if (formData.customerLifetime < 18) {
      tips.push("🔄 Focus on customer retention strategies to increase lifetime value");
    }
    if (formData.growthRate < 20) {
      tips.push("📈 Accelerate growth with targeted marketing campaigns and referral programs");
    }
    
    tips.push("✨ Consider implementing AI-powered lead scoring to improve conversion rates");
    tips.push("🚀 Automate your sales funnel to handle more leads efficiently");
    
    setSuggestions(tips);
  };

  useEffect(() => {
    calculatePredictions();
    generateSuggestions();
  }, [formData]);

  const handleInputChange = (field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const exportToPDF = () => {
    toast({
      title: "PDF Export",
      description: "Your business growth report is being prepared for download!",
    });
  };

  const currentYearRevenue = predictions.length > 0 ? predictions[12]?.revenue * 12 : 0;

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
                <Calculator className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                  Business Growth Predictor
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Predict your business growth with AI-powered insights and get actionable recommendations
              </p>
            </motion.div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16">
          <div className="container-width section-padding">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Input Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Your Business Metrics
                    </CardTitle>
                    <CardDescription>
                      Enter your current business data to see growth predictions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="visitors">Monthly Website Visitors</Label>
                      <Input
                        id="visitors"
                        type="number"
                        value={formData.monthlyVisitors}
                        onChange={(e) => handleInputChange('monthlyVisitors', parseInt(e.target.value) || 0)}
                        className="glass-input"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Conversion Rate: {formData.conversionRate}%</Label>
                      <Slider
                        value={[formData.conversionRate]}
                        onValueChange={(value) => handleInputChange('conversionRate', value[0])}
                        max={10}
                        min={0.1}
                        step={0.1}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="orderValue">Average Order Value ($)</Label>
                      <Input
                        id="orderValue"
                        type="number"
                        value={formData.avgOrderValue}
                        onChange={(e) => handleInputChange('avgOrderValue', parseInt(e.target.value) || 0)}
                        className="glass-input"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Customer Lifetime (months): {formData.customerLifetime}</Label>
                      <Slider
                        value={[formData.customerLifetime]}
                        onValueChange={(value) => handleInputChange('customerLifetime', value[0])}
                        max={60}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Monthly Growth Rate: {formData.growthRate}%</Label>
                      <Slider
                        value={[formData.growthRate]}
                        onValueChange={(value) => handleInputChange('growthRate', value[0])}
                        max={50}
                        min={0}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="h-5 w-5 mr-2" />
                      Revenue Projections
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">
                      ${currentYearRevenue.toLocaleString()}
                    </div>
                    <p className="text-muted-foreground">Projected annual revenue</p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Growth Visualization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={predictions}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                        <Line 
                          type="monotone" 
                          dataKey="revenue" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={3}
                          dot={{ fill: "hsl(var(--primary))" }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Suggestions */}
        <section className="py-16 bg-card/30">
          <div className="container-width section-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2" />
                    AI-Powered Growth Suggestions
                  </CardTitle>
                  <CardDescription>
                    Personalized recommendations based on your business metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {suggestions.map((suggestion, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="p-4 bg-background/50 rounded-lg border border-border/50"
                      >
                        <p className="text-sm">{suggestion}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Export Section */}
        <section className="py-16">
          <div className="container-width section-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Get Your Complete Growth Report</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Download a comprehensive PDF report with detailed projections, recommendations, and actionable insights.
              </p>
              <Button 
                onClick={exportToPDF}
                className="btn-primary"
                size="lg"
              >
                <Download className="h-5 w-5 mr-2" />
                Export PDF Report
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessGrowthPredictor;