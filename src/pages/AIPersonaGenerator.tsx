import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Brain, User, Target, Lightbulb, Mail, Download, Loader2, Sparkles, Heart, DollarSign, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const AIPersonaGenerator = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    industry: '',
    serviceType: '',
    targetAudience: '',
    businessGoals: '',
    challenges: '',
    budget: ''
  });
  const [generatedPersona, setGeneratedPersona] = useState<any>(null);
  const [marketingCopy, setMarketingCopy] = useState<any>(null);

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education', 
    'Real Estate', 'Legal', 'Manufacturing', 'Consulting', 'Other'
  ];

  const serviceTypes = [
    'Lead Generation', 'Social Media Marketing', 'Content Marketing', 
    'Email Marketing', 'SEO/SEM', 'Web Development', 'Branding', 'Other'
  ];

  const generatePersona = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation with realistic data
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const persona = {
      name: "Marketing Director Maria",
      age: "35-45",
      title: "Marketing Director",
      company: `${formData.industry} Company (50-200 employees)`,
      background: `Maria has been in marketing for 10+ years and is responsible for driving ${formData.businessGoals.toLowerCase()} for her company. She's tech-savvy but overwhelmed by the complexity of modern marketing tools.`,
      goals: [
        `Increase ${formData.serviceType.toLowerCase()} effectiveness by 40%`,
        "Streamline marketing processes and reduce manual work",
        "Improve ROI measurement and reporting capabilities",
        "Scale marketing efforts without proportional budget increases"
      ],
      painPoints: [
        "Limited time to research and implement new marketing strategies",
        "Difficulty proving marketing ROI to executives",
        "Juggling multiple tools and platforms",
        "Keeping up with rapidly changing digital marketing landscape"
      ],
      solutions: [
        `Automated ${formData.serviceType.toLowerCase()} system that saves 10+ hours/week`,
        "Clear, executive-friendly reporting dashboard",
        "Integrated platform reducing tool complexity",
        "Dedicated support team for strategy guidance"
      ],
      budget: formData.budget,
      decisionFactors: [
        "Proven ROI and case studies",
        "Ease of implementation",
        "Quality of support and training",
        "Integration capabilities"
      ]
    };

    const copy = {
      emailSubject: `Transform Your ${formData.serviceType} Results in 30 Days`,
      emailBody: `Hi Maria,

I noticed your company is in the ${formData.industry.toLowerCase()} space and likely facing challenges with ${formData.challenges.toLowerCase()}.

What if you could:
✅ Increase your ${formData.serviceType.toLowerCase()} effectiveness by 40%
✅ Save 10+ hours per week on manual marketing tasks
✅ Get clear ROI reporting that executives love

We've helped similar ${formData.industry.toLowerCase()} companies achieve exactly these results.

Would you be interested in a 15-minute call to see how this could work for your team?

Best regards,
[Your Name]`,
      socialPost: `🎯 ${formData.industry} marketing directors: Are you spending too much time on manual ${formData.serviceType.toLowerCase()} tasks?

Our clients typically see:
📈 40% improvement in campaign effectiveness
⏰ 10+ hours saved per week
📊 Clear ROI reporting

Ready to scale your marketing without scaling your workload?

#${formData.industry}Marketing #${formData.serviceType.replace(/\s+/g, '')}`,
      landingPageHeadline: `${formData.serviceType} Solutions Built for ${formData.industry} Leaders`,
      valueProposition: `Help ${formData.industry.toLowerCase()} companies achieve ${formData.businessGoals.toLowerCase()} through automated ${formData.serviceType.toLowerCase()} systems that save time and deliver measurable results.`
    };

    setGeneratedPersona(persona);
    setMarketingCopy(copy);
    setIsGenerating(false);
    
    toast({
      title: "Persona Generated! 🎉",
      description: "Your AI-powered client persona and marketing copy are ready.",
    });
  };

  const exportToPDF = () => {
    toast({
      title: "PDF Export",
      description: "Your persona and marketing templates are being prepared for download!",
    });
  };

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
                <Brain className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                  AI Persona Generator
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Create detailed client personas and marketing copy with AI-powered insights
              </p>
            </motion.div>
          </div>
        </section>

        {/* Input Form */}
        <section className="py-16">
          <div className="container-width section-padding">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Business Information
                    </CardTitle>
                    <CardDescription>
                      Tell us about your service to generate a targeted persona
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                        <SelectTrigger className="glass-input">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map(industry => (
                            <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Service Type</Label>
                      <Select value={formData.serviceType} onValueChange={(value) => setFormData(prev => ({ ...prev, serviceType: value }))}>
                        <SelectTrigger className="glass-input">
                          <SelectValue placeholder="Select your service type" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map(service => (
                            <SelectItem key={service} value={service}>{service}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="targetAudience">Target Audience</Label>
                      <Input
                        id="targetAudience"
                        value={formData.targetAudience}
                        onChange={(e) => setFormData(prev => ({ ...prev, targetAudience: e.target.value }))}
                        placeholder="e.g., Small business owners, Marketing directors"
                        className="glass-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessGoals">Business Goals</Label>
                      <Textarea
                        id="businessGoals"
                        value={formData.businessGoals}
                        onChange={(e) => setFormData(prev => ({ ...prev, businessGoals: e.target.value }))}
                        placeholder="What are your client's main business objectives?"
                        className="glass-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="challenges">Current Challenges</Label>
                      <Textarea
                        id="challenges"
                        value={formData.challenges}
                        onChange={(e) => setFormData(prev => ({ ...prev, challenges: e.target.value }))}
                        placeholder="What problems do your clients face?"
                        className="glass-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                        <SelectTrigger className="glass-input">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="<$5k">Less than $5,000</SelectItem>
                          <SelectItem value="$5k-$15k">$5,000 - $15,000</SelectItem>
                          <SelectItem value="$15k-$50k">$15,000 - $50,000</SelectItem>
                          <SelectItem value="$50k+">$50,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      onClick={generatePersona}
                      disabled={isGenerating || !formData.industry || !formData.serviceType}
                      className="w-full btn-primary"
                      size="lg"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                          Generating Persona...
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-5 w-5 mr-2" />
                          Generate AI Persona
                        </>
                      )}
                    </Button>
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
                {!generatedPersona ? (
                  <Card className="glass-card">
                    <CardContent className="flex items-center justify-center h-96">
                      <div className="text-center">
                        <Brain className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Ready to Generate</h3>
                        <p className="text-muted-foreground">
                          Fill out the form to create your AI-powered client persona
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <>
                    {/* Persona Card */}
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <User className="h-5 w-5 mr-2" />
                          {generatedPersona.name}
                        </CardTitle>
                        <CardDescription>
                          {generatedPersona.title} • {generatedPersona.age}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Company</h4>
                          <p className="text-sm text-muted-foreground">{generatedPersona.company}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Background</h4>
                          <p className="text-sm text-muted-foreground">{generatedPersona.background}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Target className="h-4 w-4 mr-1" />
                            Goals
                          </h4>
                          <ul className="space-y-1">
                            {generatedPersona.goals.map((goal: string, index: number) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                {goal}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            Pain Points
                          </h4>
                          <ul className="space-y-1">
                            {generatedPersona.painPoints.map((pain: string, index: number) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                {pain}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Lightbulb className="h-4 w-4 mr-1" />
                            Solutions
                          </h4>
                          <ul className="space-y-1">
                            {generatedPersona.solutions.map((solution: string, index: number) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                {solution}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            <span className="text-sm font-medium">Budget: {generatedPersona.budget}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Marketing Copy */}
                    {marketingCopy && (
                      <Card className="glass-card">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Mail className="h-5 w-5 mr-2" />
                            Marketing Templates
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Email Campaign</h4>
                            <Badge variant="secondary" className="mb-2">Subject: {marketingCopy.emailSubject}</Badge>
                            <Textarea
                              value={marketingCopy.emailBody}
                              readOnly
                              className="glass-input text-sm"
                              rows={8}
                            />
                          </div>
                          
                          <Separator />
                          
                          <div>
                            <h4 className="font-semibold mb-2">Social Media Post</h4>
                            <Textarea
                              value={marketingCopy.socialPost}
                              readOnly
                              className="glass-input text-sm"
                              rows={4}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Export Section */}
        {generatedPersona && (
          <section className="py-16 bg-card/30">
            <div className="container-width section-padding">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold mb-6">Export Your Persona & Templates</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Download a comprehensive PDF report with your persona details and ready-to-use marketing templates.
                </p>
                <Button 
                  onClick={exportToPDF}
                  className="btn-primary"
                  size="lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Export Persona & Templates
                </Button>
              </motion.div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default AIPersonaGenerator;