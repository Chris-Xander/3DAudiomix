import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Music, Radio, Mic } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Music,
      title: 'Equipment Rental',
      description: 'High-quality audio equipment for events, studios, and productions.',
    },
    {
      icon: Mic,
      title: 'Sound Engineering',
      description: 'Professional engineering for live events and studio recordings.',
    },
    {
      icon: Radio,
      title: 'Instrument Sales',
      description: 'Top-tier instruments and accessories for all your audio needs.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 -z-10">
          <div className="image-container w-full h-full min-h-0" style={{ minHeight: '100vh' }}>
            {/* User will add hero background image here */}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="container mx-auto px-4 text-center z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Premier Audio Production
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Your trusted partner for professional sound engineering and audio equipment
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Over a decade of excellence in crafting immersive audio experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Explore Services
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="glass" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            What We Offer
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="glass-card p-8 hover-lift group cursor-pointer"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:animate-float" />
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 -z-10" />
        
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Sound?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join industry leaders who trust 3D Audiomix for their audio production needs
          </p>
          <Link to="/register">
            <Button variant="hero" size="lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
