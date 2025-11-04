import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import react from 'react';
import aboutHero from '@/assets/k-nana-pnpVg_i9qCc-unsplash.jpg';
import storyImg from '@/assets/Mandingo1.jpg';
import engineerImg from '@/assets/man-working-with-radio-equipment.jpg';
import gallery1 from '@/assets/IMG-20240805-WA0027.jpg';
import gallery2 from '@/assets/close-up-sound-music-mixer-control-panel-blurred-background.jpg';
import gallery3 from '@/assets/pexels-anna-pou-8132802.jpg';

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="image-container w-full h-full min-h-0" style={{ minHeight: '60vh' }}>
            <img src={aboutHero} alt="About hero" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>

        <div className="container mx-auto px-4 text-center z-10 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
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
            <div className="image-container aspect-video">
              <img src={storyImg} alt="Our story" className="w-full h-full object-cover rounded" />
            </div>
            <div className="animate-slide-in">
              <h2 className="text-4xl font-bold mb-6 gradient-text">Our Story</h2>
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
            <div className="image-container aspect-video order-1 md:order-2">
              <img src={engineerImg} alt="Engineer working" className="w-full h-full object-cover rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Our Passion in Audio-mixing
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              gallery1,
              gallery2,
              gallery3,
            ].map((imgSrc, idx) => (
              <Card key={idx} className="glass-card overflow-hidden hover-lift">
                <div className="image-container aspect-square">
                  <img src={imgSrc} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
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
              <Card key={index} className="glass-card p-8 hover-lift text-center">
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
