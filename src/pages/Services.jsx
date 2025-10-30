import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function Services() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    service: '',
    additionalinfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // For now, just show success message
    // User can integrate EmailJS or other service later
    toast({
      title: "Booking Received!",
      description: "Thank you for contacting 3D Audiomix. We will contact you shortly!",
    });
    
    setFormData({ name: '', contact: '', email: '', service: '', additionalinfo: '' });
  };

  const services = [
    {
      title: 'Equipment Rental',
      description: 'We provide rentals for high-quality audio equipment (Linaries, Digital Mixers, Monitors, etc), for events, studios, and more.',
    },
    {
      title: 'Sound Engineering',
      description: 'Professional sound engineering for live events and recordings.',
    },
    {
      title: 'Instrument Sales',
      description: 'Top-tier instruments and related accessories for programs and events of all levels to ensure the best audio experience!',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="img-placeholder w-full h-full min-h-0">
            {/* User will add services hero image here */}
          </div>
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 grad-text animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our wide range of professional audio services, including equipment rentals, 
            sound engineering, and instrument sales.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass p-8 lift"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="glass p-8">
            <h2 className="text-3xl font-bold mb-2 text-center grad-text">
              Book a Service
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Please fill out the form below to request our services. We'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="bg-input border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact Number</Label>
                <Input
                  id="contact"
                  name="contact"
                  type="tel"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="bg-input border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="bg-input border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Select Service</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Choose a service</option>
                  <option value="equipment-rental">Equipment Rental</option>
                  <option value="sound-engineering">Sound Engineering</option>
                  <option value="instrument-sales">Instrument Sales</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalinfo">Additional Information</Label>
                <Textarea
                  id="additionalinfo"
                  name="additionalinfo"
                  value={formData.additionalinfo}
                  onChange={handleChange}
                  placeholder="Tell us more about your requirements"
                  rows={4}
                  className="bg-input border-border"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Submit Request
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
