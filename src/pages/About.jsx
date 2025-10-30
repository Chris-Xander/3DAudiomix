import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="img-placeholder w-full h-full min-h-0" style={{ minHeight: '60vh' }}>
            {/* User will add about hero image here */}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>

        <div className="container mx-auto px-4 text-center z-10 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 grad-text">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Your Premier Audio Production Partner
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Ready to level up your sound? Create your account and explore our expert audiomixing services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="glass" size="lg">
                Home
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="hero" size="lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="img-placeholder aspect-video">
              {/* User will add sound engineering image here */}
            </div>
            <div className="animate-slide-in">
              <h2 className="text-4xl font-bold mb-6 grad-text">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                3D Audiomix blends technology and creativity to craft immersive, high-quality audio experiences. 
                With over a decade of industry expertise, we specialize in sound production, live audio engineering, 
                and consultancy—earning a reputation for excellence across the board.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded to redefine how sound is produced and experienced in the digital age, we have become a 
                trusted partner to institutions like The Apostolic Church, The Church of Pentecost, and TAC TV. 
                Our work is driven by a commitment to quality, innovation, and customer satisfaction.
              </p>
            </div>
            <div className="img-placeholder aspect-video order-1 md:order-2">
              {/* User will add working engineer image here */}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 grad-text">
            Our Workspace
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card key={index} className="glass overflow-hidden lift">
                <div className="img-placeholder aspect-square">
                  {/* User will add gallery images here */}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 grad-text">
            What We Stand For
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'Uncompromising commitment to excellence in every project',
              },
              {
                title: 'Innovation',
                description: 'Leveraging cutting-edge technology for superior sound',
              },
              {
                title: 'Partnership',
                description: 'Building lasting relationships with our clients',
              },
            ].map((value, index) => (
              <Card key={index} className="glass p-8 lift text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
