import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, useTexture } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RotateCcw, MousePointer, Eye, TrendingUp, Users, Star, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import * as THREE from 'three';

const useCases = [
  {
    id: 1,
    title: "E-commerce Growth",
    industry: "Retail",
    challenge: "Low conversion rates and abandoned carts",
    solution: "Automated email sequences and retargeting campaigns",
    results: "45% increase in conversions, 2.3x ROI",
    color: "#8B5CF6",
    icon: "🛒"
  },
  {
    id: 2,
    title: "SaaS Lead Generation",
    industry: "Technology",
    challenge: "Difficulty reaching decision makers",
    solution: "LinkedIn outreach and content marketing strategy",
    results: "300% increase in qualified leads, 65% shorter sales cycle",
    color: "#06B6D4",
    icon: "💻"
  },
  {
    id: 3,
    title: "Healthcare Practice",
    industry: "Medical",
    challenge: "Local competition and patient acquisition",
    solution: "Local SEO and patient referral system",
    results: "85% increase in new patients, 4.8/5 online rating",
    color: "#10B981",
    icon: "🏥"
  },
  {
    id: 4,
    title: "Real Estate Agency",
    industry: "Property",
    challenge: "Seasonal fluctuations and lead quality",
    solution: "Multi-channel marketing and lead scoring",
    results: "120% increase in listings, 40% faster sales",
    color: "#F59E0B",
    icon: "🏠"
  },
  {
    id: 5,
    title: "Professional Services",
    industry: "Consulting",
    challenge: "Building trust and demonstrating expertise",
    solution: "Thought leadership content and webinar series",
    results: "200% increase in consultation bookings",
    color: "#EF4444",
    icon: "💼"
  },
  {
    id: 6,
    title: "Manufacturing B2B",
    industry: "Industrial",
    challenge: "Long sales cycles and complex buying process",
    solution: "Account-based marketing and automated nurturing",
    results: "50% reduction in sales cycle, 3x pipeline value",
    color: "#8B5CF6",
    icon: "🏭"
  }
];

// 3D Carousel Component
const CarouselItem = ({ useCase, position, rotation, isActive, onClick }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      
      if (hovered) {
        meshRef.current.scale.setScalar(1.1);
      } else {
        meshRef.current.scale.setScalar(isActive ? 1.2 : 1);
      }
    }
  });

  return (
    <group position={position} rotation={rotation}>
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial 
          color={useCase.color}
          transparent
          opacity={isActive ? 0.9 : 0.7}
          roughness={0.1}
          metalness={0.3}
        />
      </mesh>
      
      <Text
        position={[0, 0, 1.1]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={3}
      >
        {useCase.title}
      </Text>
      
      <Text
        position={[0, -0.3, 1.1]}
        fontSize={0.15}
        color="rgba(255, 255, 255, 0.8)"
        anchorX="center"
        anchorY="middle"
      >
        {useCase.industry}
      </Text>
    </group>
  );
};

const Carousel3D = ({ useCases, activeIndex, onItemClick }: any) => {
  const radius = 4;
  const items = useCases.map((useCase: any, index: number) => {
    const angle = (index / useCases.length) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const rotation = [0, -angle, 0];
    
    return (
      <CarouselItem
        key={useCase.id}
        useCase={useCase}
        position={[x, 0, z]}
        rotation={rotation}
        isActive={index === activeIndex}
        onClick={() => onItemClick(index)}
      />
    );
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[0, 5, 0]} intensity={0.5} />
      
      {items}
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const UseCase3DCarousel = () => {
  const { toast } = useToast();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const activeUseCase = useCases[activeIndex];

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setIsExpanded(true);
    toast({
      title: `Selected: ${useCases[index].title}`,
      description: `${useCases[index].industry} case study`,
    });
  };

  const nextCase = () => {
    setActiveIndex((prev) => (prev + 1) % useCases.length);
  };

  const prevCase = () => {
    setActiveIndex((prev) => (prev - 1 + useCases.length) % useCases.length);
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
                <RotateCcw className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                  3D Use Case Showcase
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our success stories in an interactive 3D environment
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3D Carousel */}
        <section className="py-16">
          <div className="container-width section-padding">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* 3D Carousel */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="glass-card">
                  <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center">
                      <Eye className="h-5 w-5 mr-2" />
                      Interactive 3D Showcase
                    </CardTitle>
                    <CardDescription>
                      Click on any cube to explore the use case
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96 w-full">
                      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                        <Carousel3D
                          useCases={useCases}
                          activeIndex={activeIndex}
                          onItemClick={handleItemClick}
                        />
                      </Canvas>
                    </div>
                    
                    <div className="flex justify-center space-x-4 mt-6">
                      <Button onClick={prevCase} variant="outline" size="sm">
                        ← Previous
                      </Button>
                      <Button onClick={nextCase} variant="outline" size="sm">
                        Next →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Use Case Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="h-12 w-12 rounded-full flex items-center justify-center text-2xl"
                          style={{ backgroundColor: activeUseCase.color + '20' }}
                        >
                          {activeUseCase.icon}
                        </div>
                        <div>
                          <CardTitle>{activeUseCase.title}</CardTitle>
                          <Badge variant="secondary">{activeUseCase.industry}</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Case Study</div>
                        <div className="text-2xl font-bold">{activeIndex + 1}/6</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-red-500" />
                        Challenge
                      </h4>
                      <p className="text-muted-foreground">{activeUseCase.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <MousePointer className="h-4 w-4 mr-2 text-blue-500" />
                        Solution
                      </h4>
                      <p className="text-muted-foreground">{activeUseCase.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Star className="h-4 w-4 mr-2 text-yellow-500" />
                        Results
                      </h4>
                      <p className="text-muted-foreground font-semibold text-primary">
                        {activeUseCase.results}
                      </p>
                    </div>

                    <div className="pt-4 border-t">
                      <Button className="w-full btn-primary" size="lg">
                        <ArrowRight className="h-5 w-5 mr-2" />
                        Learn More About This Case
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">6</div>
                        <div className="text-sm text-muted-foreground">Industries</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">150+</div>
                        <div className="text-sm text-muted-foreground">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">95%</div>
                        <div className="text-sm text-muted-foreground">Success Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">3.2x</div>
                        <div className="text-sm text-muted-foreground">Avg ROI</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-16 bg-card/30">
          <div className="container-width section-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6">All Use Cases</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse through our comprehensive collection of successful projects across various industries
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="cursor-pointer"
                  onClick={() => handleItemClick(index)}
                >
                  <Card className={`glass-card transition-all duration-300 hover:scale-105 ${
                    index === activeIndex ? 'ring-2 ring-primary' : ''
                  }`}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div 
                          className="h-10 w-10 rounded-full flex items-center justify-center text-lg"
                          style={{ backgroundColor: useCase.color + '20' }}
                        >
                          {useCase.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{useCase.title}</CardTitle>
                          <Badge 
                            variant="secondary" 
                            style={{ backgroundColor: useCase.color + '20', color: useCase.color }}
                          >
                            {useCase.industry}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">{useCase.challenge}</p>
                      <div className="text-sm font-semibold text-primary">{useCase.results}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container-width section-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Create Your Success Story?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results for your business
              </p>
              <Button className="btn-primary" size="lg">
                <Users className="h-5 w-5 mr-2" />
                Schedule a Strategy Call
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default UseCase3DCarousel;